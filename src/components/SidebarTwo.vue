<template>
  <div class="sidebar">
    <a-menu
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      @select="open"
      :default-selected-keys="['dashboard__page']"
      :default-open-keys="['form']"
    >
      <template
        v-for="item in list"
        :key="item.name"
      >
        <template v-if="item.children && item.children.length==1">
          <a-menu-item :key="item.children[0].name">
            <!-- <icon-font :type="item.children[0].meta.icon" /> -->
            <span>{{ item.children[0].meta.title}}</span>
          </a-menu-item>
        </template>
        <template v-else>
          <SidebarItemTwo
            :menu-info="item"
            :key="item.name"
          />
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script lang='ts'>
import SidebarItemTwo from './SidebarItemTwo.vue'
import { defineComponent, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import router from '../router'
import { getMenuByRouter, flatenArr } from '../utils/utils'
import { ItemProps } from '../store'
// import IconFont from './icon'
export default defineComponent({
  name: 'SideTwo',
  components: {
    // IconFont,
    SidebarItemTwo
  },
  setup() {
    const router = useRouter()
    const store = useStore()
    const routerList: any = router.options.routes
    const list = ref(getMenuByRouter(routerList))
    const collapsed = computed(() => store.getters.getCollapse())
    const tagList = computed(() => store.getters.getTagList())
    const open = ({ item, key, selectedKeys }: any) => {
      const itemRouter = flatenArr(routerList).filter(item => item.name === key)
      // const index = tagList.value.findIndex((obj: as any) => obj.name === key)
      // if (index > -1) {
      //   console.log(index)
      //   store.commit('TAG_LIST', itemRouter)
      // }
      router.push({ name: key })
    }
    return {
      collapsed,
      list,
      open,
      tagList
    }
  }
})
</script>
<style lang="css" scoped>
.sidebar {
  /* display: block; */
  width: 200px;
  position: absolute;
  left: 0;
  top: 60px;
  bottom: 0;
  height: calc(100% - 60px);
  background: #001529;
}
.icons-list ::v-deep(.anticon) {
  font-size: 18px;
}
</style>
