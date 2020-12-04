// import parentView from "../view/parent-view.vue"
// import Main from "../view/layout.vue"

// export default [
//   {
//     path: "/",
//     redirect: "/dashboard/dashboard__page",
//     meta:{hideInMenu:true}
//   },
//   {
//     path:'/dashboard',
//     name:'dashboard',
//     component:Main,
//     meta:{
//       hideInBread:true
//     },
//     children:[
//       {
//         path:'dashboard__page',
//         name:'dashboard__page',
//         component: () => import(/* webpackChunkName: "dashboard" */ '../view/Dashboard.vue'),
//         meta: { title: '系统首页',icon:'el-icon-lx-home' }
//       }
//     ]
//   },
//   {
//     path:'/form',
//     name:'form',
//     component: Main,
//     meta: { title: '表单相关',icon:'el-icon-lx-calendar' },
//     children:[
//       {
//         path: 'form__page',
//         name: 'form__page',
//         component: () => import(/* webpackChunkName: "form" */ '../view/BaseForm.vue'),
//         meta: { title: '基本表单' }
//       },
//       {
//         path:'threeform',
//         name:'threeform',
//         component: parentView,
//         meta: { title: '三级菜单',showAlways: true},
//         children:[
//           {
//             // 富文本编辑器组件
//             path: 'editor',
//             name: 'editor',
//             component: () => import(/* webpackChunkName: "editor" */ '../view/VueEditor.vue'),
//             meta: { title: '富文本编辑器' }
//           },
//           {
//               // markdown组件
//               path: 'markdown',
//               name: 'markdown',
//               component: () => import(/* webpackChunkName: "markdown" */ '../view/Markdown.vue'),
//               meta: { title: 'markdown编辑器' }
//           },
//         ]
//       },   
//     ]
//   }
// ]