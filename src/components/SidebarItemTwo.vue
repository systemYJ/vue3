<template>
    <a-sub-menu :key="menuInfo.name" v-bind="$attrs">
      <template #title>
        <span>
          <icon-font :type="menuInfo.meta.icon" />
          <span>{{ menuInfo.meta.title }}</span>
        </span>
      </template>
      <template v-for="item in menuInfo.children" :key="item.name">
        <template v-if="!item.children">
          <a-menu-item :key="item.name">
            <icon-font :type="item.meta.icon" />
            <span>{{ item.meta.title }}</span>
          </a-menu-item>
        </template>
        <template v-else>
          <SideItemTwo :menu-info="item" :key="item.name" />
        </template>
      </template>
    </a-sub-menu>
</template>
<script>
import {defineComponent,PropType} from 'vue'
import {ItemProps} from '../store'
import IconFont from './icon'
export default defineComponent({
  name: 'SideItemTwo',
  components: {
    IconFont
  },
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
})
</script>
<style lang="css" scoped>
.icons-list ::v-deep(.anticon) {
  font-size: 18px;
}
</style>
 