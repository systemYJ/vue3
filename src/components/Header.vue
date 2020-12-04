<template>
  <div class="header">
    <div class="header-left">
      <div
        class="collapse-btn"
        @click="collapseHandle"
      >
        <template v-if="!collapse">
          <MenuFoldOutlined />
        </template>
        <template v-else>
          <MenuUnfoldOutlined />
        </template>
      </div>
      <div class="logo">后台管理系统</div>
    </div>
    <div class="header-right">
      <div class="header-user-con">
        <!-- 全屏显示 -->
        <div
          class="btn-fullscreen"
          @click="handleFullScreen"
        >
          <a-tooltip
            placement="bottom"
            :title="fullscreen?`取消全屏`:`全屏`"
          >
            <FullscreenOutlined />
          </a-tooltip>
        </div>
        <!-- 消息中心 -->
        <div class="btn-bell">
          <a-tooltip
            placement="bottom"
            :title=" message ? `有${message}条未读消息`:`消息中心`"
          >
            <BellOutlined />
          </a-tooltip>
          <span
            class="btn-bell-badge"
            v-if="message"
          ></span>
        </div>
        <!-- 用户头像 -->
        <div class="user-avator">
          <img src="../assets/img.jpg" />
        </div>
        <!-- 用户名下拉菜单 -->
        <a-dropdown :trigger="['click']">
          <div class="user-name"> {{userName}}
            <CaretDownOutlined />
          </div>
          <template #overlay>
            <a-menu @click="onClick">
              <a-menu-item key="0">
                <a
                  href="#"
                  target="_blank"
                >项目仓库</a>
              </a-menu-item>
              <a-menu-divider />
              <a-menu-item key="1">
                <a href="#">退出登录</a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FullscreenOutlined,
  BellOutlined,
  CaretDownOutlined
} from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    FullscreenOutlined,
    BellOutlined,
    CaretDownOutlined
  },
  setup () {
    const collapse = ref(false)
    const fullscreen = ref(false)
    const message = ref(3)
    const userName = ref('admin')
    const store = useStore()
    const handleFullScreen = () => {
      const element = document.documentElement;
      if (fullscreen.value) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      fullscreen.value = !fullscreen.value;
    }
    const onClick = ({ key }) => {
      console.log(key)
    }
    const collapseHandle = () => {
      collapse.value = !collapse.value
      store.commit('COOAPSE_FLAG', collapse.value)
    }
    return {
      collapse,
      fullscreen,
      message,
      userName,
      handleFullScreen,
      onClick,
      collapseHandle
    }
  }
})
</script>
<style scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  font-size: 22px;
  color: #fff;
  display: flex;
  justify-content: space-between;
}
.header-left {
  display: flex;
  align-items: center;
}
.collapse-btn {
  padding: 0 21px;
  cursor: pointer;
  line-height: 60px;
}
.header .logo {
  width: 200px;
  line-height: 60px;
}
/* .bread-crumb-container{
  float: left;
} */
.header-right {
  padding-right: 50px;
}
.header-user-con {
  display: flex;
  height: 60px;
  align-items: center;
}
.btn-fullscreen {
  transform: rotate(45deg);
  margin-right: 5px;
  font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
}
.btn-bell-badge {
  position: absolute;
  right: 0;
  top: -2px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #f56c6c;
  color: #fff;
}
.btn-bell .el-icon-bell {
  color: #fff;
}
.user-name {
  font-size: 14px;
  margin-left: 10px;
}
.user-avator {
  margin-left: 20px;
}
.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
