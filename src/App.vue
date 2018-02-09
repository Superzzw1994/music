<template>
  <div id="app">
    <zhead></zhead>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import head from 'components/header/header'
import tab from 'components/tab/tab'
export default {
  name: 'App',
  components: {
    zhead:head,
    tab:tab
  }
}
</script>

<style lang="scss" scoped>
@import 'common/scss/variable.scss';
#app{
  color:$color-theme;
}

</style>
