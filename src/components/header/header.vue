<template>
  <div class="head">
      <div class="icon"></div>
      <div class="text">Music</div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
@import '../../common/scss/variable.scss';
@import '../../common/scss/mixin.scss';
.head{
    position: relative;
    height: 44px;
    text-align: center;
    color:$color-theme;
    font-size: 0;
    .icon{
        display: inline-block;
        vertical-align: top;
        margin-top: 6px;
        width: 30px;
        height:32px;
        margin-right: 9px;
        background-size: 30px 32px;
        @include bg-image('logo');
    }
    .text{
        display: inline-block;
        vertical-align: top;
        line-height: 44px;
        font-size:$font-size-large;
    }
}

</style>
