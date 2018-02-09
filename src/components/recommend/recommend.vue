<template>
  <div class="recommend">
    <div class="recommend-content">
      <div v-if="recommends.length" class="slider-wrapper">
         <slider>
           <div v-for="item in recommends">
              <a :href="item.linkUrl">
                <img :src="item.picUrl">
              </a>
            </div>
         </slider>
      </div>
    </div>
  </div>
</template>
<script>
import {getRecommend} from '../../api/recommend'
import {ERR_OK} from '../../api/config'
import slider from '../../base/slider/slider'
export default {
  components: {
    slider:slider
  },
  data(){
    return{
      recommends :[]
    }
  },
  created (){
    this._getRecommend();
  },
  methods:{
    _getRecommend (){
      let self = this;
      getRecommend().then(function(val){
        if(val.code === ERR_OK){
          console.log(val.data.slider)
          self.recommends = val.data.slider;
          console.log(self.recommends)
        }
      });
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~common/scss/variable';
.recommend{
  position: fixed;
  width:100%;
  top: 88px;
  bottom: 0;
  .recommend-content{
    height: 100%;
    overflow: hidden;
  }
  .slider-wrapper{
    position: relative;
    width:100%;
    overflow: hidden;
  }
}
</style>
