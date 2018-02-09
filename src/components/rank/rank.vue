<template>
<div>
  <input type="text" v-model="search" v-on:input="_getRecommend">
  <ul v-show="res">
      <li v-for ="item in res">
          <span>{{item}}</span>
      </li>
  </ul>
</div>
</template>
<script>
import {getBaidu} from '../../api/baidu'
import {ERR_OK} from '../../api/config'
export default {
    data(){
        return{
            search:'',
            res:[]
        }
    },
  methods:{
    _getRecommend (){
        let self = this;
        console.log(self)
        window.baidu={};
        window.baidu.sug=function(val){
        JSON.stringify(val);
        console.log(val.s)
        self.res = val.s
        }
        getBaidu(this.search)
    },

  }
}
</script>
<style lang="scss" scoped>
p{
    color:red;
}
</style>
