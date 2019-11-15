<template>
  <div class="qrcode">
      <div></div>
    <canvas ref="canvas"></canvas>
  </div>
</template>
<script>
import QRCode from "qrcode";
export default {
  data() {
    return {
      remain: 5000,
      endTime: Date.now(),
      count: 0
    };
  },
  mounted() {
    this.endTime = Date.now() + this.remain;
    this.$nextTick(() => {
      this.setQrcode(this.$refs.canvas, "1234567" + this.count);
      this.reloadQr();
    });
  },
  methods: {
    reloadQr() {
        const _this = this;
      const id = requestAnimationFrame(() => {
        const get_remain = this.getRemain();
        // console.log(isSameSecond(remain, get_remain));

        if (!this.isSameSecond(this.remain, get_remain) || get_remain === 0) {
          this.setRemain(get_remain);
          if (get_remain === 0) {
            this.count++;
            this.setQrcode(this.$refs.canvas, "1234567" + this.count);
            cancelAnimationFrame(this.rafId);
            this.setRemain(5000);
            this.endTime = Date.now() + this.remain;
            this.reloadQr();
          }
        }

        if (get_remain !== 0) {
          this.reloadQr();
        }
      });
      this.setRafId(id);
    },
    setRemain(remain) {
      this.remain = remain;
    },
    setRafId(id) {
      this.rafId = id;
    },
    setQrcode(node, text) {
      QRCode.toCanvas(
        node,
        text,
        { margin: 1, width: 240, maskPattern: 1 },
        function(error) {
          if (error) console.error(error);
          console.log("success!");
        }
      );
    },
    isSameSecond(time1, time2) {
      return Math.floor(time1 / 1000) === Math.floor(time2 / 1000);
    },
    getRemain() {
      return Math.max(this.endTime - Date.now(), 0);
    }
  }
};
</script>
<style lang="less">
    .qrcode {
        background-color: #000;
        font-size: 0%;
        text-align: center;
        height: 100%;
        canvas {
            vertical-align: middle
        }
        div {
            height: 100%;
            vertical-align: middle;
            display: inline-block;
        }
    }
</style>