<template>
  <div>{{str}}</div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class vFooter extends Vue {
  str: string = 'footer'
}
</script>
