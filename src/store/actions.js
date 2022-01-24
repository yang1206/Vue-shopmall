import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'
export default {
  addCart(context, payload) {
    return new Promise((resolve) => {
      let oldProduct = context.state.cartList.find(function (item) {
        return item.iid === payload.iid
      })
      //2.判断oldProduct
      if (oldProduct) {
        context.commit(ADD_COUNTER, oldProduct)
        resolve('商品数量+1')

      } else {
        payload.count = 1
        context.commit(ADD_TO_CART, payload)
        resolve('商品添加成功')
      }
    })
  }
}
