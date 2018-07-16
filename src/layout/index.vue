<template>
  <div>
    {{this.getMsg}}
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class Layout extends Vue {
    msg: string = '1'

    get getMsg () {
      return this.msg + 'a'
    }

    changeMsg (): void {
      this.msg = 'haha'
    }

    getList () {
      this.$axios.get('http://leezii.cn/oss/policy', {
        params: {
          a: 1,
          b: 2
        }
      }).then(res => {
        console.log(res)
      })
    }

    mounted () {
      setTimeout(_ => {
        this.changeMsg()
      }, 1000)
      this.getList()
      let a = ['aaaa']
      let b = [...a]
      console.log(b)
    }

  }
</script>
<style lang="less" scoped>
  div {
    background: yellow;
  }
</style>
