import { Component, Vue } from "vue-property-decorator";
import pageEvent from "@/utils/event";

@Component
export default class MyMixins extends Vue {
  //模拟音频监听事件
  audioPlay(text: string) {
    this.handleTimeout(() => {
      pageEvent.emit("audioEnd");
    }, 1500);
  }

  //联调安卓播放语音
  audioPlayByAndroid(text: string) {
    const dm = window.dm;
    dm.stopSpeaking();
    dm.startSpeaking(text);
    pageEvent.on("playEnd", () => {
      pageEvent.removeAllListeners("playEnd");
      pageEvent.emit("audioEnd");
    });
  }

  //timeout
  handleTimeout(func: Function, delay: number) {
    const timeout = setTimeout(() => {
      func();
      clearTimeout(timeout);
    }, delay);
  }
}
