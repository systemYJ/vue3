<template>
  <div class="wrap">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
html,body,#app,.wrap {
  width: 100%;
  height: 100%;
  /* overflow: hidden;    */
}
</style>
