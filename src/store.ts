import { createStore } from 'vuex'
//import router from './router' //在store这里引入 报undefined 
// import axios, { AxiosRequestConfig } from 'axios'
export interface GlobalDataProps {
  collapse: boolean;
  tagList: Array<ItemProps>;
}
export interface ItemProps {
  redirect?: string;
  path?: string;
  name?: string;
  component?: any;
  meta?: MetaProps;
  children?: Array<PathProps>;
}
export interface MetaProps {
  hideInBread?: boolean;
  hideInMenu?: boolean;
  showAlways?: boolean;
  icon?: string;
  title?: string;
}
export interface PathProps {
  path?: string;
  name: string;
  component: any;
  meta?: MetaProps;
  children?: Array<PathProps>;
}
// const asyncAndCommit = async (url: string, mutationName: string,
//   commit: Commit, config: AxiosRequestConfig = { method: 'get' }, extraData?: any) => {
//   const { data } = await axios(url, config)
//   if (extraData) {
//     commit(mutationName, { data, extraData })
//   } else {
//     commit(mutationName, data)
//   }
//   return data
// }
const store = createStore<GlobalDataProps>({
  state: {
    collapse: false,
    tagList: []
  },
  mutations: {
    COOAPSE_FLAG: (state, flag) => {
      state.collapse = flag
    },
    TAG_LIST: (state, tag) => {
      state.tagList.push(tag)
    }
  },
  actions: {

  },
  getters: {
    getCollapse: (state) => () => {
      return state.collapse
    },
    getTagList: (state) => () => {
      return state.tagList
    }
  }

})
export default store
