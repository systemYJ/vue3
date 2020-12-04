<template>
  <keep-alive :include="tagsList">
    <router-view ref="child"/>
  </keep-alive>
</template>
<script>
export default {
  name: 'ParentView',
  data(){
    return {
      tagsList: [],
    }
  },
  create(){
    //  bus.$on('tags', mconst=> {
    //         const arr = [];
    //         for (let i = 0, len = msg.length; i < len; i++) {
    //             msg[i].name && arr.push(msg[i].name);
    //         }
    //         this.tagsList = arr;
    //     });
  },
  computed: {
  
  }
}
</script>
