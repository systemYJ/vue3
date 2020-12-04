import {ItemProps} from '../store'
export const hasChild = (item: ItemProps) => {
  return item.children && item.children.length !== 0
}


export const getMenuByRouter = (list: Array<ItemProps |any>) =>{
  const res: Array<ItemProps>= []
  list.forEach(item => {
    if (!item.meta || (item.meta && !item.meta.hideInMenu)) {
      const obj: any = {
        name: item.name,
        meta: item.meta,
        children:item.children 
      }
      if (hasChild(item) || (item.meta && item.meta.showAlways)) {
        if(item.children){
          obj.children = getMenuByRouter(item.children)
        }
      }
      res.push(obj)
    }
  })
  return res
}
export const flatenArr = (data: Array<ItemProps>,res: Array<ItemProps>= []) =>{
  if(Array.isArray(data)&&data.length){
    data.forEach((item)=>{
      res.push(item)
      if(item.children) flatenArr(item.children,res)
    })
  }
  return res
}