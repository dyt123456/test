<template>
  <div class="recommend">
    <scroll class="recommend-content" :data="discList">
      <div>
        <div v-if="recommends.length" class="slider-wrapper">
          <slider>
            <div v-for="item in recommends" :key="item.id">
              <a :href="item.linkUrl">
                <img :src="item.picUrl" alt>
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul v-if="discList.length">
            <li class="item" v-for="item in discList" :key="item.listennum">
              <div class="icon">
                <img v-lazy="item.imgurl">
              </div>
              <div class="text">
                <h2 class="name">{{item.creator.name}}</h2>
                <p class="desc">{{item.dissname}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import Scroll from 'base/scroll/scroll'
import Slider from 'base/slider/slider'
import { getRecommend, getDiscList } from 'api/recommend'
import { ERR_0K } from 'api/config'

export default {
  data() {
    return {
      recommends: [],
      discList: []
    }
  },
  created() {
    this._getRecommend()
    this._getDiscList()
  },
  methods: {
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === ERR_0K) {
          this.recommends = res.data.slider
        }
      })
    },
    _getDiscList() {
      getDiscList().then((res) => {
        if (res.code === ERR_0K) {
          this.discList = res.data.list
          console.log(this.discList)
        }
      })
    }
  },
  components: {
    Slider,
    Scroll
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
.recommend
  position fixed
  width 100%
  top 88px
  bottom 0
  .recommend-content
    height 100%
    overflow:hidden
    .slider-wrapper
      position relative
      width 100%
      overflow hidden
    .recommend-list
      .list-title
        height 65px
        line-height 65px
        text-align center
        color $color-theme
        font-size $font-size-medium
      ul
        .item
          width 100%
          display flex
          align-items center
          // border-bottom: 1px solid red
          padding 0 20px 20px 20px
          box-sizing border-box
          .icon
            width 60px
            height 60px
            padding-right 20px
            // border: 1px solid red
            flex 0 0 60px
            overflow hidden
            img
              width 100%
              height 100%
          .text
            display flex
            justify-content center
            flex-direction column
            flex 1
            line-height 20px
            overflow hidden
            font-size $font-size-medium
            .desc
              color $color-text-d
</style>
