<template>
  <div class="canvas-contain">
    <canvas
      class="base-canvas"
      ref="baseCanvas"
      width="400"
      height="200"
      :style="canvasStyle"
    />
    <canvas
      class="draw-canvas"
      ref="myCanvas"
      width="400"
      height="200"
      :style="canvasStyle"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { findIndex } from "lodash";
import { colorToRGB } from "../utils";

@Component
export default class DrawingBoard extends Vue {
  @Prop() graph: any;

  myCanvasCtx: any;
  points: any;
  pointsOrigin: any;

  canvasStyle: any = {};

  newPoints: any = {}; //记录解题过程中增加的点
  renderData: any[] = [
    // { points: ["A", "E"], color: "#FF3D5F", type: 'line', symbol: 'line_AE' },
    // { points: ["A", "D", "C"], color: "#00C2FF", type: 'polygon', symbol: 'polygon_ADC' },
    // { points: ["A", "B", "C"], color: "#FF3D5F", type: 'angle', symbol: 'angle_ABC' }
  ]; //尝试把线，角，多边形数据聚合一块

  imgWidth: any = 400;
  imgHeight: any = 200;

  percent: number = 0;
  drawData: any[] = [
    // { points: ["A", "E"], color: "#FF3D5F", type: "line", symbol: "line_AE" },
    // {
    //   points: ["A", "D", "C"],
    //   color: "#00C2FF",
    //   type: "polygon",
    //   symbol: "polygon_ADC"
    // },
    // {
    //   points: ["A", "B", "C"],
    //   color: "#FF3D5F",
    //   type: "angle",
    //   symbol: "angle_ABC"
    // }
  ];

  bgColor: string = "#282b51"; //模块背景色

  get reRenderData() {
    const symbolList = this.drawData.map(item => item.symbol);
    const reRenderData = this.renderData.filter(
      item => symbolList.indexOf(item.symbol) === -1
    );

    return reRenderData;
  }

  mounted() {
    console.log(this.graph);
    const { src, points, pointsOrigin } = this.graph;

    const canvas = this.$refs.myCanvas as HTMLCanvasElement;
    this.myCanvasCtx = canvas.getContext("2d");
    this.init(src);
    this.points = points;
    this.pointsOrigin = pointsOrigin;

    this.canvasStyle = {
      transform: `scale(${window.innerWidth / 960})`
    };
  }

  init(src: any, points?: any) {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const ctx: any = (this.$refs.baseCanvas as HTMLCanvasElement).getContext(
        "2d"
      );
      ctx.drawImage(img, 0, 0);
      this.imgWidth = img.width;
      this.imgHeight = img.height;
      if (points) {
        this.points = this.formatPoints(points);
      }

      //开发过程测试动画
      // this.drawByAnimate();
    };
  }

  reRender() {
    const ctx = this.myCanvasCtx;
    ctx.clearRect(0, 0, 400, 200);

    this.reRenderData.forEach(item => {
      const { points, color, type, highlight } = item;
      switch (type) {
        case "line":
          this.drawLineNew(points, "line", color);
          break;
        case "angle": {
          const [a, b, c] = points;
          const letter = highlight || b;
          this.highlightLetter(letter, color, "bg");
          this.drawLineNew([a, b], "angleStart", color);
          this.drawLineNew([b, c], "angleEnd", color);
          this.highlightLetter(letter, color, "text");
          break;
        }
        case "polygon":
          this.highlightPolygon(points, color);
          break;
      }
    });
  }

  //画直线
  drawLine(data: string[], type?: string | null, color?: string) {
    const [a, b] = data;
    const point1 = this.points[a];
    const point2 = this.points[b];
    const ctx = this.myCanvasCtx;

    if (type && type === "dash") {
      ctx.setLineDash([4, 2]); //虚线
      ctx.lineWidth = 2.0;
    } else {
      ctx.setLineDash([]);
      ctx.lineWidth = 3.0;
    }

    ctx.beginPath();
    ctx.moveTo(point1.x, point1.y);
    ctx.lineTo(point2.x, point2.y);
    // ctx.lineWidth = 2.0;
    ctx.strokeStyle = color || "#ffffff";
    ctx.stroke();
    ctx.closePath();
  }

  //画曲线
  drawArc(data: string[], color?: string, cPoint?: number[]) {
    const [a, b] = data;
    const point1 = this.points[a];
    const point2 = this.points[b];
    let contronlPoint;
    if (cPoint) {
      const _cPoint = this.formatPoints({ cPoint });
      contronlPoint = { x: _cPoint.cPoint.x, y: _cPoint.cPoint.y };
    } else {
      contronlPoint = this.getControlPoint(
        [point1.x, point1.y],
        [point2.x, point2.y]
      );
    }
    // console.log("contronlPoint", contronlPoint);
    const ctx = this.myCanvasCtx;
    ctx.setLineDash([]);
    ctx.lineWidth = 3.0;
    ctx.strokeStyle = color || "#FF3D5F";
    ctx.beginPath();
    ctx.moveTo(point1.x, point1.y);
    ctx.quadraticCurveTo(contronlPoint.x, contronlPoint.y, point2.x, point2.y);
    ctx.stroke();
    ctx.closePath();
  }

  //获取二次贝塞尔曲线控制点
  getControlPoint(point1: number[], point2: number[]) {
    const [x1, y1] = point1;
    const [x2, y2] = point2;
    const x = (x1 + x2) / 2 - (y1 - y2) * 0.4;
    const y = (y1 + y2) / 2 - (x2 - x1) * 0.4;
    return { x, y };
  }

  //新版动画曲线    data: string[], color?: string, cPoint?: number[]
  drawArcNew() {
    // if (!this.drawLineData.length) return;
    // const ctx = this.myCanvasCtx;
    // let drawingLines = this.drawLineData.map(
    //   item => `${item.data[0]}${item.data[1]}`
    // );
    // const lines = this.lines.filter(
    //   item =>
    //     item.type !== "drawLine" ||
    //     (item.linetype !== "straightline" &&
    //       drawingLines.indexOf(item.line) === -1)
    // );
    // let last = false;
    // let percent = 0;
    // const _this = this;
    // function animate() {
    //   // ctx.clearRect(0, 0, 400, 200);
    //   if (!_this.lines.length) {
    //     return;
    //   }
    //   // _this.reRender(lines);
    //   _this.reRender()
    //   _this.drawLineData.forEach((item: any) => {
    //     const { data, color, cPoint } = item;
    //     const [a, b] = data;
    //     const point1 = _this.points[a];
    //     const point2 = _this.points[b];
    //     ctx.setLineDash([]);
    //     ctx.lineWidth = 3.0;
    //     ctx.strokeStyle = color || "#FF3D5F";
    //     ctx.beginPath();
    //     _this.drawCurvePath(
    //       ctx,
    //       [point1.x, point1.y],
    //       [point2.x, point2.y],
    //       0.4,
    //       percent || 100,
    //       cPoint
    //     );
    //     ctx.stroke();
    //   });
    //   if (last) return;
    //   percent = (percent + 4) % 100;
    //   if (percent === 0) {
    //     last = true;
    //     animate();
    //     return;
    //   }
    //   requestAnimationFrame(animate);
    // }
    // animate();
  }

  drawCurvePath(
    ctx: any,
    start: number[],
    end: number[],
    curviness: number,
    percent: number,
    cPoint?: number[]
  ) {
    const cp = cPoint || [
      (start[0] + end[0]) / 2 - (start[1] - end[1]) * curviness,
      (start[1] + end[1]) / 2 - (end[0] - start[0]) * curviness
    ];

    const t = percent / 100;

    const p0 = start;
    const p1 = cp;
    const p2 = end;

    const v01 = [p1[0] - p0[0], p1[1] - p0[1]];
    const v12 = [p2[0] - p1[0], p2[1] - p1[1]];

    const q0 = [p0[0] + v01[0] * t, p0[1] + v01[1] * t];
    const q1 = [p1[0] + v12[0] * t, p1[1] + v12[1] * t];

    const v = [q1[0] - q0[0], q1[1] - q0[1]];

    const b = [q0[0] + v[0] * t, q0[1] + v[1] * t];

    ctx.moveTo(p0[0], p0[1]);

    ctx.quadraticCurveTo(q0[0], q0[1], b[0], b[1]);
  }

  //删除划线数据并重绘
  hideLine(points: string[]) {
    const index = findIndex(
      this.renderData,
      (item: any) =>
        item.type === "line" && item.symbol === `line_${points.join("")}`
    );
    if (index === -1) return;
    this.renderData.splice(index, 1);
    this.reRender();
  }

  //公用隐藏方法  points: string[], type: string
  hide(data: any[]) {
    data.forEach(item => {
      const { points, type } = item;
      const symbol = `${type}_${points.join("")}`;
      const index = findIndex(
        this.renderData,
        (item: any) => item.type === type && item.symbol === symbol
      );
      if (index === -1) return;
      this.renderData.splice(index, 1);
    });
    this.reRender();
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
    ctx.fillText(text, x > 380 ? 380 : x, y < 20 ? 20 : y);
  }

  addPoint(points: any) {
    const _points = this.formatPoints(points);
    this.points = Object.assign(this.points, _points);
    this.newPoints = Object.assign(this.newPoints, _points);
    Object.entries(_points).forEach((point: any[]) => {
      const [key, coordinate] = point;
      this.fillText(key, coordinate.x - 5, coordinate.y - 5);
    });
  }

  //高亮字母  A/B...
  highlightLetter(
    letter: string,
    color: string,
    type: "bg" | "text" | "all" = "all"
  ) {
    //先用背景色方块盖住原字母，在原位置替换一个上色字母
    //先以题目1，顶点B作为测试写功能代码
    const ctx = this.myCanvasCtx;
    ctx.fillStyle = this.bgColor;
    const [x1, y1, x2, y2] = this.pointsOrigin[letter];
    if (type !== "text") ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
    if (type !== "bg") this.fillText(letter, x1 - 2, y2 + 2, 22, color);
  }

  //新版划线 根据是线还是角 给划线赋值不同的渐变色逻辑
  drawLineNew(
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
  highlightPolygon(points: string[], color: string, opacity: number = 0.2) {
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
    const _this = this;

    function animate() {
      if (!_this.drawData.length) {
        return;
      }
      _this.reRender();
      _this.drawData.forEach(item => {
        const { points, color, type, highlight } = item;
        switch (type) {
          case "line":
            _this.drawLineNew(points, "line", color, percent || 100);
            break;
          case "angle": {
            const [a, b, c] = points;
            const letter = highlight || b;
            _this.highlightLetter(letter, color, "bg");
            if (percent !== 0 && percent < 50) {
              _this.drawLineNew([a, b], "angleStart", color, percent * 2);
            } else {
              _this.drawLineNew([a, b], "angleStart", color, 100);
              _this.drawLineNew(
                [b, c],
                "angleEnd",
                color,
                percent ? (percent - 50) * 2 : 100
              );
            }
            _this.highlightLetter(letter, color, "text");
            break;
          }
          case "polygon":
            _this.highlightPolygon(
              points,
              color,
              0.2 * ((percent || 100) / 100)
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
    }

    animate();
  }

  draw(data: any[]) {
    let hideData: any[] = [];
    let drawData: any[] = [];
    this.drawData = [];
    data.forEach(item => {
      const { type, points, color, tempPoint, linetype } = item;
      // console.log(type, points);
      switch (type) {
        case "line":
        case "drawLine": {
          const lineItem = {
            points,
            color,
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
            type: "angle",
            symbol: `angle_${points.join("")}`
          };
          this.renderData.push(angleItem);
          drawData.push(angleItem);
          break;
        }
        case "hideLine":
          // this.hideLine(points);
          hideData.push({
            points,
            type: "line"
          });
          break;
        case "hidePolygon":
          hideData.push({
            points,
            type: "polygon"
          });
          break;
        case "hideAngle":
          hideData.push({
            points,
            type: "angle"
          });
          break;
        // case "addPoint":
        //   this.addPoint(points);
        //   break;
      }
    });

    if (hideData.length) {
      this.hide(hideData);
    }
    if (drawData.length) {
      this.drawData = drawData;
      this.drawByAnimate();
    }
  }

  //清空初始化
  clean() {
    const ctx = this.myCanvasCtx;
    ctx.clearRect(0, 0, 400, 200);
    // this.lines = [];
    // this.newPoints = {};
    this.renderData = [];
    this.drawData = [];

    // this.init(this.graph.src);
  }

  //
  cleanByDraw() {
    // this.lines = this.lines.filter(item => item.type !== "drawLine");
    this.renderData = [];
    this.drawData = [];
    this.reRender();
  }

  //转换坐标值
  formatPoints(data: Object) {
    const points: any = {};
    Object.entries(data).forEach(item => {
      const [key, coordinate] = item;
      const [x, y] = coordinate;
      points[key] = {
        x: Math.floor(x * this.imgWidth),
        y: Math.floor(y * this.imgHeight)
      };
    });
    return points;
  }
}
</script>

<style lang="scss" scoped>
.canvas-contain {
  position: relative;
  // width: 400px;
  // height: 200px;
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
