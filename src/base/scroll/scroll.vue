<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>
<script type="text/ecmascript-6">
import BScroll from 'better-scroll'

export default {
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: null
    }
  },
  mounted() {
    setTimeout(() => {
        console.log(0)
      this._initScroll()
    }, 20)
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return
      }
      this.scrolls = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      })
    },
    enable() {
      this.scrolls && this.scrolls.enable()
    },
    disable() {
      this.scrolls && this.scrolls.disable()
    },
    refresh() {
      this.scrolls && this.scrolls.refresh()
    }
  },
  watch: {
    data() {
      setTimeout(() => {
          console.log(2)
          this.refresh()// bscroll 重新刷新计算
      }, 20)
    }
  }
}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
</style>

