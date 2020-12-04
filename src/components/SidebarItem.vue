<template>
  <a-sub-menu :key="parentItem.name">
    <template #title>
      <CaretDownOutlined />
      <span>eee{{ parentItem.meta.title }}</span>
    </template>
    <template
      v-for="subItem in parentItem.children"
      :key="subItem.name"
    >
      <template v-if="subItem.children && subItem.children.length === 1">
        <SidebarItem
          v-if="showChildren(subItem)"
          :parent-item="subItem"
        ></SidebarItem>
        <a-menu-item
          v-else
          :key="subItem.children[0].name"
          class="nest-menu"
        >
          <CaretDownOutlined />
          <!-- <span slot="title">{{ subItem.children[0].meta.title }}</span> -->
          <span>{{ subItem.children[0].meta.title }}</span>
        </a-menu-item>
      </template>
      <template v-else>
        <SidebarItem
          v-if="showChildren(subItem)"
          :parent-item="subItem"
        ></SidebarItem>
        <a-menu-item
          v-else
          :key="subItem.name"
          class="nest-menu"
        >
          <CaretDownOutlined />
          <!-- <span slot="title">{{ subItem.meta.title }}</span> -->
          <span>88{{ subItem.meta.title }}</span>
        </a-menu-item>
      </template>
    </template>
  </a-sub-menu>
</template>
<script>
import { defineComponent } from 'vue'
import {
  CaretDownOutlined
} from '@ant-design/icons-vue';
export default defineComponent({
  name: "SidebarItem",
  components: {
    CaretDownOutlined
  },
  props: {
    parentItem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  setup () {
    const showChildren = (item) => {
      return (
        item.children &&
        (item.children.length > 1 || (item.meta && item.meta.showAlways))
      );
    }
    return {
      showChildren
    }
  }
})
</script>