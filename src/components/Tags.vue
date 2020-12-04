<template>
  <div class="tags">
    <ul>
      <li
        class="tags-li"
        v-for="(item,index) in tagsList"
        :class="{'active': isActive(item.path)}"
        :key="index"
      >
        <router-link
          :to="item.path"
          class="tags-li-title"
        >
          {{item.title}}
        </router-link>
        <span
          class="tags-li-icon"
          @click="closeTags(index)"
        ><i class="el-icon-close"></i></span>
      </li>
    </ul>
    <div class="tags-close-box">
      <a-dropdown :trigger="['click']">
        <div class="user-name">
          <a-button
            type="primary"
            size="small"
          >
            标签选项
            <CaretDownOutlined />
          </a-button>

        </div>
        <template #overlay>
          <a-menu @click="handleTags">
            <a-menu-item key="0">
              <a href="#">关闭其他</a>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="1">
              <a href="#">关闭所有</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref,watch } from 'vue'
import { CaretDownOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  components: {
    CaretDownOutlined
  },
  setup() {
    const tagsList = ref([])
    const router = useRouter()
    watch(router,(newValue,lodValue)=>{
      console.log(newValue,lodValue)
    })  
    return {
      tagsList
    }
  }
})
</script>


<style>
.tags {
  position: relative;
  height: 30px;
  overflow: hidden;
  background: #fff;
  padding-right: 120px;
  box-shadow: 0 5px 10px #ddd;
}

.tags ul {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

.tags-li {
  float: left;
  margin: 3px 5px 2px 3px;
  border-radius: 3px;
  font-size: 12px;
  overflow: hidden;
  cursor: pointer;
  height: 23px;
  line-height: 23px;
  border: 1px solid #e9eaec;
  background: #fff;
  padding: 0 5px 0 12px;
  vertical-align: middle;
  color: #666;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}

.tags-li:not(.active):hover {
  background: #f8f8f8;
}

.tags-li.active {
  color: #fff;
}

.tags-li-title {
  float: left;
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 5px;
  color: #666;
}

.tags-li.active .tags-li-title {
  color: #fff;
}

.tags-close-box {
  position: absolute;
  right: 0;
  top: 0;
  box-sizing: border-box;
  padding-top: 1px;
  text-align: center;
  width: 110px;
  height: 30px;
  background: #fff;
  box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
  z-index: 10;
}
</style>
