<template>
    <div>
        <span @click="test">{{str}}</span>
        <el-button @click="test">按钮</el-button>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Home extends Vue {
  str: string = '22'
  test() {
    console.log(1)
  }
}
</script>
