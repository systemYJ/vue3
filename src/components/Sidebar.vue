<template>
  <div class="sider">
    <a-menu
      style="width:200px"
      theme="dark"
      mode="inline"
      :inline-collapsed="collapsed"
      @select="open"
    >
      <template
        v-for="item in menuList"
        :key="item.name"
      >
        <template v-if="item.children && item.children.length === 1">
          <SidebarItem
            v-if="showChildren(item)"
            :parent-item="item"
          ></SidebarItem>
          <a-menu-item
            v-else
            :key="item.children[0].name"
          >
            <CaretDownOutlined />
            <!-- <span slot="title">{{ item.children[0].meta.title }}</span> -->
            <span>{{ item.children[0].meta.title }}</span>
          </a-menu-item>
        </template>
        <template v-else>
          <SidebarItem
            v-if="showChildren(item)"
            :parent-item="item"
          ></SidebarItem>
          <a-menu-item
            v-else
            :key="item.name"
          >
            <!-- <i :class="['iconfont', item.meta.icon]"></i> -->
            <PlusOutlined />
            <!-- <span slot="title">{{ item.meta.title }}</span> -->
            <span>{{ item.meta.title }}</span>
          </a-menu-item>
        </template>
      </template>
    </a-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import SidebarItem from './SidebarItem.vue'
import { CaretDownOutlined,PlusOutlined } from '@ant-design/icons-vue'
export default defineComponent({
  components: {
    SidebarItem,
    CaretDownOutlined,
    PlusOutlined
  },
  setup() {
    const collapsed = ref(false)
    const menuList = computed(() => {
      return [
        {
          name: 'dashboard',
          meta: { ideInBread: true },
          children: [
            {
              name: 'dashboard__page',
              meta: { icon: 'el-icon-lx-home', title: '系统首页' }
            }
          ]
        },
        {
          name: 'form',
          meta: { title: '表单相关', icon: 'el-icon-lx-calendar' },
          children: [
            { meta: { title: '基本表单' }, name: 'form__page' },
            { meta: { title: '文件上传' }, name: 'upload__page' },
            {
              meta: { title: '三级菜单', showAlways: true },
              name: 'threeform',
              children: [
                { meta: { title: '富文本编辑器' }, name: 'editor' },
                { meta: { title: 'markdown编辑器' }, name: 'markdown' }
              ]
            }
          ]
        }
      ]
    })
    const showChildren = (item: any) => {
      return (
        item.children &&
        (item.children.length > 1 || (item.meta && item.meta.showAlways))
      )
    }
    const open = (item: any, key: any, selectedKeys: any) => {
      console.log("你点击了", item);
     
    }
    return {
      collapsed,
      menuList,
      showChildren,
      open
    }
  }
})
</script>