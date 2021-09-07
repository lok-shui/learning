<template>
  <div class="canvas-contain">
    <canvas
      class="base-canvas"
      ref="baseCanvas"
      width="250"
      height="250"
      :style="canvasStyle"
    />
    <canvas
      class="draw-canvas"
      ref="myCanvas"
      width="250"
      height="250"
      :style="canvasStyle"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { findIndex } from "lodash";
import { colorToRGB } from "../../../utils";
import pageEvent from "@/utils/event";

@Component
export default class DrawingBoard extends Vue {
  @Prop() graph: any;

  canvasStyle: any = {};

  myCanvasCtx: any;
  points: any;
  pointsOrigin: any;

  centerPoint: any = { Cx: 125, Cy: 125 }; //图片中心点 用来做象限区分使用

  // { points: ["A", "E"], color: "#FF3D5F", type: 'line', symbol: 'line_AE' },
  // { points: ["A", "D", "C"], color: "#00C2FF", type: 'polygon', symbol: 'polygon_ADC' },
  // { points: ["A", "B", "C"], color: "#FF3D5F", type: 'angle', symbol: 'angle_ABC' }
  renderData: any[] = [];

  drawData: any[] = [];

  bgColor: string = "#ffffff"; //模块背景色

  get reRenderData() {
    const symbolList = this.drawData.map(item => item.symbol);
    const reRenderData = this.renderData.filter(
      item => symbolList.indexOf(item.symbol) === -1
    );

    return reRenderData;
  }

  mounted() {
    const canvas = this.$refs.myCanvas as HTMLCanvasElement;
    this.myCanvasCtx = canvas.getContext("2d");

    this.init(this.graph);
    // console.log(this.graph);
    // this.formatPoints(this.graph.points);

    // const img = new Image();
    // img.src = this.graph.base64;
    // img.onload = () => {
    //   const ctx: any = (this.$refs.baseCanvas as HTMLCanvasElement).getContext(
    //     "2d"
    //   );
    //   ctx.drawImage(img, 0, 0);
    // };

    // const view = dataList.data1.subject.view.filter(
    //   item => item.type === "graph"
    // )[0] as any;
    // const img = new Image();
    // img.src = this.graph.base64;
    // img.onload = () => {
    //   const width = img.width;
    //   const height = img.height;
    //   console.log("width", width, "height", height);
    //   this.centerPoint = {
    //     Cx: width / 2,
    //     Cy: height / 2
    //   };

    //   const ctx: any = (this.$refs.baseCanvas as HTMLCanvasElement).getContext(
    //     "2d"
    //   );
    //   ctx.drawImage(img, 100, 50, 200, 100);
    //   ctx.drawImage(img, 0, 0);
    //   let percent = 0;
    //   let last = false;

    //   //模拟替换下一张图
    //   function animate() {
    //     const _scale = (100 - percent) / 100;
    //     const _width = width * _scale;
    //     const _height = height * _scale;
    //     const _x = (width - _width) / 2;
    //     const _y = (height - _height) / 2;

    //     ctx.clearRect(0, 0, 400, 400);
    //     ctx.drawImage(img, _x, _y, _width, _height);

    //     const _height2 = height * (percent / 100);
    //     const _y2 = height - _height2;
    //     ctx.drawImage(img, 0, 0, width, _height2, 0, _y2, width, _height2);

    //     if (last) return;
    //     percent = percent + 2;
    //     if (percent === 100) {
    //       last = true;
    //       animate();
    //       return;
    //     }
    //     requestAnimationFrame(animate);
    //   }

    //   // 模拟替换上一张图
    //   function animate() {
    //     const _scale = percent / 100;
    //     const _width = width * _scale;
    //     const _height = height * _scale;
    //     const _x = (width - _width) / 2;
    //     const _y = (height - _height) / 2;
    //     ctx.clearRect(0, 0, 400, 400);
    //     ctx.drawImage(img, _x, _y, _width, _height);

    //     const _height2 = height * ((100 - percent) / 100);
    //     const _y2 = height - _height2;
    //     ctx.drawImage(img, 0, 0, width, _height2, 0, _y2, width, _height2);

    //     if (last) return;
    //     percent = percent + 2;
    //     if (percent === 100) {
    //       last = true;
    //       animate();
    //       return;
    //     }
    //     requestAnimationFrame(animate);
    //   }

    //   animate();
    //   this.highlightLetter("F", "#FF3D5F");
    // };

    this.canvasStyle = {
      transform: `scale(${window.innerWidth / 960})`
    };
  }

  init(graph: any) {
    const { points, base64 } = graph;
    const ctx: any = (this.$refs.baseCanvas as HTMLCanvasElement).getContext(
      "2d"
    );
    this.formatPoints(points);

    ctx.clearRect(0, 0, 250, 250);
    const img = new Image();
    img.src = base64;
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
    };
  }

  reRender() {
    const ctx = this.myCanvasCtx;
    ctx.clearRect(0, 0, 250, 250);

    this.reRenderData.forEach(item => {
      const { points, color, type, highlight, value } = item;
      switch (type) {
        case "line":
          this.drawLine(points, "line", color);
          if (value) this.highlightValue(value, color, points);
          break;
        case "angle": {
          const [a, b, c] = points;
          const letter = highlight || b;
          this.highlightLetter(letter, color, "bg");
          this.drawLine([a, b], "angleStart", color);
          this.drawLine([b, c], "angleEnd", color);
          this.highlightLetter(letter, color, "text", value);
          break;
        }
        case "polygon":
          this.highlightPolygon(points, color);
          break;
      }
    });
  }

  //写字
  fillText(
    text: string,
    x: number,
    y: number,
    size: number = 16,
    color: string = "#ffffff"
  ) {
    const ctx = this.myCanvasCtx;
    ctx.font = `${size}px Times New Roman`;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
  }

  //高亮字母
  highlightLetter(
    letter: string,
    color: string,
    type: "bg" | "text" | "all" = "all",
    value?: string | number
  ) {
    const pos = this.points[letter];
    const { x, y } = pos;
    const { Cx, Cy } = this.centerPoint;
    const position = x >= Cx ? "right" : "left";
    // console.log(position);
    const [x1, y1, x2, y2] = this.pointsOrigin[letter];

    const ctx = this.myCanvasCtx;
    ctx.fillStyle = this.bgColor;
    if (type !== "text") ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
    if (type !== "bg") {
      let Tx = 0;
      switch (position) {
        case "left":
          Tx = x1 - (x2 - x1);
          if (value) {
            Tx = Math.max(Tx - 50, 0);
          }
          break;
        case "right":
          Tx = x2;
          break;
      }

      let _text: string = "";
      if (!value) {
        _text = letter;
      } else {
        switch (position) {
          case "right":
            _text = `${letter} ${value}`;
            break;
          case "left":
            _text = `${value} ${letter}`;
            break;
        }
      }
      this.fillText(_text, Tx, y2, 16, color);
    }
  }

  //高亮值标识
  highlightValue(value: string | number, color: string, points: string[]) {
    const { Cx, Cy } = this.centerPoint;
    const [start, end] = points;
    const point1 = this.points[start];
    const x1 = point1.x,
      y1 = point1.y;
    const point2 = this.points[end];
    const x2 = point2.x,
      y2 = point2.y;
    const center = [(x1 + x2) / 2, (y1 + y2) / 2];
    // console.log(Cx, Cy)
    // console.log(center)
    let Tx, Ty;
    let angletype; //[0, 45) [45, 90) [90, 135) [135, 180)  直线倾角
    if (center[0] === Cx) {
      //中点在1/2象限或3/4象限边界上
      // Tx = Cx - 10;
      Tx = center[0] - 20;
      Ty = center[1] >= Cy ? center[1] - 25 : center[1] + 25;
    } else if (center[1] === Cy) {
      //中点在2/3象限或1/4象限边界上
      Ty = center[1] + 10;
      Tx = center[0] >= Cx ? center[0] + 10 : Math.max(center[0] - 40, 0);
    } else if (y1 === y2) {
      Tx = center[0] - 10;
      Ty = center[1] >= Cy ? center[1] - 15 : center[1] + 15;
    } else if (x1 === x2) {
      Ty = Cy - 8;
      Tx = center[0] >= Cx ? center[0] + 8 : Math.max(center[0] - 40, 0);
    } else {
      let top, bottom;
      if (y1 > y2) {
        top = [x2, y2];
        bottom = [x1, y1];
      } else {
        bottom = [x2, y2];
        top = [x1, y1];
      }
      const tag = top[1] - bottom[1] > Math.abs(top[0] - bottom[0]);
      if (tag) {
        angletype = top[0] > bottom[0] ? 1 : 2;
      } else {
        angletype = top[0] > bottom[0] ? 0 : 3;
      }

      if (center[0] > Cx) {
        if (center[1] > Cy) {
          //第一象限
          Ty = angletype === 0 ? center[1] - 8 : center[1] + 8;
          Tx = angletype === 0 ? center[0] - 15 : center[0] + 15;
        } else {
          //第四象限
          Ty = angletype === 3 ? center[1] + 15 : center[1] + 8;
          Tx = angletype === 3 ? center[0] - 15 : center[0] + 15;
        }
      } else {
        if (center[1] > Cy) {
          //第二象限
          Ty = angletype === 3 ? center[1] - 8 : center[1] + 15;
          Tx = angletype === 3 ? center[0] - 15 : Math.max(center[0] - 20, 0);
        } else {
          //第三象限
          Ty = angletype === 0 ? center[1] + 15 : center[1] + 15;
          Tx = angletype === 0 ? center[0] - 35 : Math.max(center[0] - 20, 0);
        }
      }
    }
    // console.log(Tx, Ty)
    this.fillText(value.toString(), Tx, Ty, 16, color);
  }

  //画线与画角
  drawLine(
    points: string[],
    type: "line" | "angleStart" | "angleEnd",
    color: string,
    percent: number = 100
  ) {
    const [start, end] = points;
    const point1 = this.points[start];
    const point2 = this.points[end];
    if (!point1 || !point2 || !color) return;
    const [r, g, b] = colorToRGB(color);
    const _percent = percent / 100;
    const ctx = this.myCanvasCtx;
    const grd = ctx.createLinearGradient(
      point1.x,
      point1.y,
      point2.x,
      point2.y
    );
    const color80 = `RGBA(${r},${g},${b},0.8)`;
    switch (type) {
      case "line":
        grd.addColorStop(0, "transparent");
        grd.addColorStop(0.05, `RGBA(${r},${g},${b},0.2)`);
        grd.addColorStop(0.5, color80);
        grd.addColorStop(0.95, `RGBA(${r},${g},${b},0.2)`);
        grd.addColorStop(1, "transparent");
        break;
      case "angleStart":
        grd.addColorStop(0, "transparent");
        grd.addColorStop(0.05, `RGBA(${r},${g},${b},0.3)`);
        grd.addColorStop(1, color80);
        break;
      case "angleEnd":
        grd.addColorStop(0, color80);
        grd.addColorStop(0.95, `RGBA(${r},${g},${b},0.3)`);
        grd.addColorStop(1, "transparent");
        break;
    }
    ctx.setLineDash([]);
    ctx.lineWidth = 5;

    ctx.beginPath();
    ctx.moveTo(point1.x, point1.y);
    ctx.lineTo(
      point1.x + (point2.x - point1.x) * _percent,
      point1.y + (point2.y - point1.y) * _percent
    );
    ctx.strokeStyle = grd;
    ctx.stroke();
    ctx.closePath();
  }

  //高亮多边形
  highlightPolygon(points: string[], color: string, opacity: number = 0.4) {
    const ctx = this.myCanvasCtx;

    const _length = points.length;
    const [r, g, b] = colorToRGB(color);
    ctx.beginPath();
    //第一个点为起点
    const begin = this.points[points[0]];
    ctx.moveTo(begin.x, begin.y);
    for (let i = 1; i < _length; i++) {
      const point = this.points[points[i]];
      const { x, y } = point;
      ctx.lineTo(x, y);
    }
    ctx.fillStyle = `RGBA(${r},${g},${b},${opacity})`;
    ctx.fill();
    ctx.closePath();
  }

  //统一动画执行处 设计到图形、划线，动画涉及到重绘，如果分开方法会在执行重绘的时候相互抵消
  drawByAnimate() {
    let last = false;
    let percent = 0;

    const animate = () => {
      if (!this.drawData.length) {
        return;
      }
      this.reRender();
      this.drawData.forEach(item => {
        const { points, color, type, highlight, value } = item;
        switch (type) {
          case "line":
            this.drawLine(points, "line", color, percent || 100);
            if (value) this.highlightValue(value, color, points);
            break;
          case "angle": {
            const [a, b, c] = points;
            const letter = highlight || b;
            this.highlightLetter(letter, color, "bg");
            if (percent !== 0 && percent < 50) {
              this.drawLine([a, b], "angleStart", color, percent * 2);
            } else {
              this.drawLine([a, b], "angleStart", color, 100);
              this.drawLine(
                [b, c],
                "angleEnd",
                color,
                percent ? (percent - 50) * 2 : 100
              );
            }
            this.highlightLetter(letter, color, "text", value);
            break;
          }
          case "polygon":
            this.highlightPolygon(
              points,
              color,
              0.4 * ((percent || 100) / 100)
            );
            break;
        }
      });

      if (last) return;
      percent = (percent + 4) % 100;
      if (percent === 0) {
        last = true;
        animate();
        return;
      }
      requestAnimationFrame(animate);
    };

    animate();
  }

  //依次顺序播放动画
  drawByQueue() {
    //drawData
    let last = false;
    let percent = 0;

    const animate = () => {
      if (!this.drawData.length) return;
      const item = this.drawData[0];
      this.reRender();
      const { points, color, type, highlight, value } = item;
      switch (type) {
        case "line":
          this.drawLine(points, "line", color, percent || 100);
          if (value) this.highlightValue(value, color, points);
          break;
        case "angle": {
          const [a, b, c] = points;
          const letter = highlight || b;
          this.highlightLetter(letter, color, "bg");
          if (percent !== 0 && percent < 50) {
            this.drawLine([a, b], "angleStart", color, percent * 2);
          } else {
            this.drawLine([a, b], "angleStart", color, 100);
            this.drawLine(
              [b, c],
              "angleEnd",
              color,
              percent ? (percent - 50) * 2 : 100
            );
          }
          this.highlightLetter(letter, color, "text", value);
          break;
        }
        case "polygon":
          this.highlightPolygon(points, color, 0.4 * ((percent || 100) / 100));
          break;
      }

      if (last) {
        this.drawData.shift();
        last = false;
        if (this.drawData.length) animate();
        else {
          pageEvent.emit("subStepFinish");
        }
        return;
      }
      percent = (percent + 2.5) % 100;
      if (percent === 0) {
        last = true;
        animate();
        return;
      }
      requestAnimationFrame(animate);
    };

    animate();
  }

  //统一整理画图指令&执行
  draw(data: any[], actionMode?: "play" | "pause") {
    // let hideData: any[] = [];
    let drawData: any[] = [];
    this.drawData = [];
    this.renderData = [];
    data.forEach(item => {
      const { type, points, color, value } = item;
      switch (type) {
        case "line": {
          const lineItem = {
            points,
            color,
            value,
            type: "line",
            symbol: `line_${points.join("")}`
          };
          this.renderData.push(lineItem);
          drawData.push(lineItem);
          break;
        }
        case "polygon": {
          const polygonItem = {
            points,
            color,
            type: "polygon",
            symbol: `polygon_${points.join("")}`
          };
          this.renderData.push(polygonItem);
          drawData.push(polygonItem);
          break;
        }
        case "angle": {
          const angleItem = {
            points,
            color,
            value,
            type: "angle",
            symbol: `angle_${points.join("")}`
          };
          this.renderData.push(angleItem);
          drawData.push(angleItem);
          break;
        }
      }
    });

    if (drawData.length) {
      const timeout = setTimeout(() => {
        clearTimeout(timeout);
        this.drawData = drawData;
        actionMode === "pause" ? this.drawByAnimate() : this.drawByQueue();
      }, 20);
    }
  }

  //清空
  clean() {
    this.renderData = [];
    this.drawData = [];
    this.reRender();
  }

  //暂时用来转换坐标
  formatPoints(points: any[]) {
    this.points = {};
    this.pointsOrigin = {};
    points.forEach((point: any) => {
      const { text, pos } = point;
      const [x1, y1, x2, y2] = pos;
      this.pointsOrigin[text] = pos;
      this.points[text] = { x: (x1 + x2) / 2, y: (y1 + y2) / 2 };
    });
  }
}
</script>

<style lang="scss" scoped>
.canvas-contain {
  position: relative;
  canvas {
    transform-origin: 0 0;

    &.base-canvas {
      position: absolute;
      left: 0;
      top: 0;
    }

    &.draw-canvas {
      position: relative;
      z-index: 99;
    }
  }
}
</style>
