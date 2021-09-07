<template>
  <div :class="{ container: 'container' }" @click="isDo">
    <video
      id="first-video"
      :poster="poster"
      controls="controls"
      x5-video-player-fullscreen="false"
      x5-video-player-orientation="landscape"
      controlslist="nodownload"
    >
      <source :src="url" type="video/mp4" />
      您的浏览器不支持 HTML5 video 标签。
    </video>
    <div @click="playvideo">paly video</div>
    <!-- <video
      id="first-video"
      controls="controls"
      x5-video-player-type="h5"
      x5-video-player-fullscreen="true"
      x5-playsinline=""
      playsinline
      webkit-playsinline=""
      preload="auto"
      :poster="poster"
      :src="url"
      :playOrPause="playOrPause"
      x-webkit-airplay="allow"
      @click="pauseVideo"
      @ended="onPlayerEnded($event)"
    ></video> -->

    <!-- video标签里属性的说明：
    controlslist="nodownload"               // 去掉三个点里的“下载”
    x5-video-player-type="h5"               // 启用H5播放器，是wechat安卓版特性
    x5-video-player-fullscreen="true"       // 全屏设置，设置为true是防止横屏
    x5-video-player-orientation="portraint" // 播放器支持的方向，landscape横屏，portraint竖屏，默认值为竖屏
    webkit-playsinline="true"               // 这个属性是ios10中设置可以让视频在小窗内播放，就是不全屏播放
    playsinline="true"                      // ios微信浏览器支持小窗内播放
    
  --></div>
</template>
<script>
export default {
  name: "videoChild",
  props: {
    url: String,
    poster: String
  },
  data() {
    let userAgent = navigator.userAgent;
    return {
      lastTime: null, //第一次点击事件
      currentTime: null, //当前点击事件
      timeOut: 3000, // 设置超时时间
      isShow: true,
      playOrPause: false,
      playPause: false,
      video: null,
      container: "container",
      isAndroid:
        userAgent.indexOf("Android") > -1 || userAgent.indexOf("Adr") > -1, // android终端
      isiOS: !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
    };
  },
  mounted() {
    let videoplay = document.getElementById("first-video");

    // console.log('video',videoplay)

    // 如果有多个视频，只能播放一个
    // var videos = document.getElementsByTagName("video");
    // for (var i = videos.length - 1; i >= 0; i--) {
    //   (function() {
    //     var p = i;
    //     videos[p].addEventListener("play", function() {
    //       pauseAll(p);
    //     });
    //   })();
    // }
    // function pauseAll(index) {
    //   for (var j = videos.length - 1; j >= 0; j--) {
    //     if (j != index) videos[j].pause();
    //   }
    // }
    var quitTIme = window.setInterval(this.testTime, 1000);
  },
  created() {
    this.lastTime = new Date().getTime(); // 网页第一次打开时，记录当前时间
    // console.log("当前时间", this.lastTime);
  },
  methods: {
    isDo() {
      console.log("video");
      this.currentTime = new Date().getTime(); // 记录当前点击的时间
      if (this.currentTIme - this.lastTime > this.timeOut) {
        console.log("3s");
      }
    },
    // 播放视频
    playvideo(event) {
      if (this.isiOS) {
        let video = document.querySelector("video");
        // this.isVideoShow = false;
        this.playOrPause = true;
        video.play();
        // 进入全屏
        window.onresize = function() {
          video.style.width = window.innerWidth + "px";
          video.style.height = window.innerHeight + "px";
        };
      }
    },
    // 暂停\播放
    pauseVideo() {
      let video = document.querySelector("video");
      if (this.playOrPause) {
        video.pause();
      } else {
        video.play();
      }
      this.playOrPause = !this.playOrPause;
    },
    // 视频结束
    onPlayerEnded(player) {
      this.isShow = true;
      this.playOrPause = false;
    },
    androidPlay() {
      let video = document.querySelector("video");
      this.isShow = false;
      video.play();
    }
  }
};
</script>
<style lang="scss" scoped>
// video::-webkit-media-controls {
//   display:none !important;
// }
.focus {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: block;
}
.container {
  background: #eee;
  width: 100%;
  height: 92%;
  position: absolute;
  left: 0;
  top: 8%;
  right: 0;
  bottom: 0;
  #first-video {
    width: 100%;
    height: 100%;
    object-fit: fill;
    object-position: center center;
    z-index: 50;
  }
  .btn {
    position: absolute;
    bottom: 2%;
    left: 2%;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    text-align: center;
    background: gray;
  }
  .play {
    width: 0;
    height: 0;
    border-width: 10px 14px;
    border-style: solid;
    margin: 10px 0 0 14px;
    border-color: transparent transparent transparent white;
  }
  .pause {
    margin: 6px auto auto 5px;
    span {
      width: 5px;
      height: 12px;
      display: inline-block;
      background: white;
      margin-right: 6px;
    }
  }
}
</style>
