import {createSlice} from '@reduxjs/toolkit';
export type CartState = {
  items: {
    product:any
    quantity: number,
    total: number
  }[] ,
  quantity: number,
  total: number
}
const initialState:CartState = {
  items:[],
  quantity: 0,
  total: 0,
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state,action)=>{
      // if(state.items.length > 0){
        const arr= [...state.items]
        const newData = arr?.filter(
                (item:any) => item.product.id == action.payload.id && item.product.vendor_id === action.payload.vendor_id,
              );
        if (newData.length > 0) {
          const oldState = arr?.filter(
            (item:any) => item.product.id !== action.payload.id && item.product.vendor_id === action.payload.vendor_id,
          );
          console.log(oldState,"old")
          newData[0].quantity+=1
          newData[0].total+=newData[0].product.price
          console.log(newData[0],"new")
          state.items = [...oldState,...newData]
          state.total = state.total + newData[0].product.price;
          console.log(state.total,"total")
          // console.log('product already added to the cart');
        } else {
          // console.log(item.id, action.payload._id);
          state.items.push({product:action.payload,quantity:action.payload.quantity??1,total:action.payload.price});
          state.quantity += 1;
          state.total = state.total + (action.payload.price * (action.payload.quantity??1));
        }
      // }
    },
  
    deleteProduct: (state,action)=>{
      const arr= [...state.items]
      const newData = arr?.filter(
              (item:any) => item.product.id !== action.payload.product.id && item.product.vendor_id === action.payload.product.vendor_id,
            );
      state.items = newData
      state.quantity = arr.length === 1 ? 0 : state.quantity - 1
      state.total = arr.length === 1 ? 0 : state.total - action.payload.total
    }
    // deleteProduct: (state, action) => {
    //   if (action.payload.arr) {
    //     action.payload.arr.map(item => {
    //       const newData = state.products.filter(prod => prod._id == item._id);
    //       if (newData.length > 0) {
    //         state.products = state.products.filter(p => p._id !== item._id);
    //         //    localStorage.setItem('persist:root.cart.products','state.products.filter((p)=>p._id !== action.payload._id)')
    //         // if (state.quantity === 1) {
    //         //   state.quantity -= 1;
    //         //   let price = parseInt(action.payload.price);
    //         //   state.total = state.total - price;
    //         // } else {
    //         state.quantity -= item.quantity;

    //         let price = parseInt(item.price);
    //         state.total = state.total - price * item.quantity;
    //       }
    //     });
    //   } else {
    //     const newData = state.products.filter(
    //       item => item._id == action.payload._id,
    //     );
    //     if (newData.length > 0) {
    //       state.products = state.products.filter(
    //         p => p._id !== action.payload._id,
    //       );
    //       state.quantity -= action.payload.quantity;

    //       let price = parseInt(action.payload.price);
    //       state.total = state.total - price * action.payload.quantity;
    //     }
    //   }
    // },
    ,incQuantity: (state, action) => {
      // const arr = [...state.items]
      state.items.forEach(item => {
        if (item.product.id === action.payload.product.id && item.product.vendor_id === action.payload.product.vendor_id) {
          item.quantity += 1;
          // state.quantity += 1;
          item.total= item.total + action.payload.product.price
          console.log("totaltotal",action.payload.product.price)
          state.total = state.total + action.payload.product.price;
        }
      });
    },
    decQuantity: (state, action) => {
      state.items.forEach(item => {
        if (item.product.id === action.payload.product.id && item.product.vendor_id === action.payload.product.vendor_id)  {
          if(item.quantity >1){
            item.quantity -= 1;
            item.total = item.total - action.payload.product.price;
            // state.quantity -= 1;
            state.total = state.total - action.payload.product.price;
          }
        }
      });
    },
    emptyCart: state => {
      state.items = [];
      state.total = 0;
      state.quantity = 0;
    },
  },
});
export const {
  addItem,
  deleteProduct,
  incQuantity,
  decQuantity,
  emptyCart,
} = cartSlice.actions;
export default cartSlice.reducer;