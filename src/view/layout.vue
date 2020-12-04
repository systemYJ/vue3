<template>
  <div class="layout-page">
    <v-head></v-head>
    <SidebarTwo></SidebarTwo>
    <div class="hide-screen">
      <div :class="['content-box',collapsed ? 'content-collapse' : '']">
        <Tags></Tags>
        <div class="content">
           <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent,computed } from 'vue'
import vHead from '../components/Header.vue'
import { useStore } from 'vuex'
import SidebarTwo from '../components/SidebarTwo.vue'
import Tags from '../components/Tags.vue'
export default defineComponent({
  components: {
    vHead,
    SidebarTwo,
    Tags
  },
  setup(){
    const store = useStore()
     const collapsed = computed(() => store.getters.getCollapse())
    return{
      collapsed
    }
  }
})
</script>
<style scoped>
.layout-page {
  width: 100%;
  height: 100%;
}
.hide-screen .content-box {
  position: absolute;
  left: 200px;
  right: 0;
  top: 60px;
  bottom: 0;
  background: #eaeff5;
  /* transition: left 0.3s ease-in-out; */
  transition: left 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.hide-screen .content-collapse{
  left: 81px;
}
.content{
  width:auto;
  height: calc(100% - 30px);
  overflow-y: auto;
}
</style>