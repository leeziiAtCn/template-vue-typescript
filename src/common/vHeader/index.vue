<template>
  <div>{{str}}</div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class vHeader extends Vue {
  str: string = 'header'
}
</script>
