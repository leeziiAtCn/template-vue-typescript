<template>
  <el-container>
    <el-header>
      <v-header></v-header>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <v-footer></v-footer>
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import vHeader from '../common/vHeader/index.vue'
import vFooter from '../common/vFooter/index.vue'
@Component({
  components: {
    vHeader,
    vFooter
  }
})
export default class Layout extends Vue {}
</script>

<style>

</style>
