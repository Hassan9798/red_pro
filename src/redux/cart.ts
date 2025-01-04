import {createSlice} from '@reduxjs/toolkit';
export type CartState = {
  items: {
    products:Array<any>,
    quantity: number,
    total: number
  }[] | null,
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

    }
    // addProduct: (state, action) => {
    //   // console.log('action', action.payload._id);
    //   if (state.products.length !== 0) {
    //     const newData = state.products.filter(
    //       (item:any) => item.id == action.payload.id && item.vendor_id === action.payload.vendor_id,
    //     );
    //     // console.log('newdata', newData);
    //     if (newData.length > 0) {
    //       // console.log('product already added to the cart');
    //     } else {
    //       // console.log(item.id, action.payload._id);
    //       state.products.push(action.payload);
    //       state.quantity += 1;
    //       let price = parseInt(action.payload.price);
    //       state.total = state.total + price * action.payload.quantity;
    //     }
    //     // state.products.map(item => {
    //     //   if (item._id == action.payload._id) {
    //     //     console.log('product already added to the cart');
    //     //   } else {
    //     //     console.log(item.id, action.payload._id);
    //     //     state.products.push(action.payload);
    //     //     state.quantity += 1;
    //     //     let price = parseInt(action.payload.price);
    //     //     state.total = state.total + price * action.payload.quantity;
    //     //   }
    //     // });
    //   } else {
    //     state.products.push(action.payload);
    //     state.quantity += action.payload.quantity;
    //     let price = parseInt(action.payload.price);
    //     state.total = state.total + price * action.payload.quantity;
    //   }
    // },
    // initiateCart: (state, action) => {
    //   // console.log('redux', action.payload);
    //   state.products = action.payload.products;
    //   state.total = action.payload.total;
    //   state.quantity = action.payload.quantity;
    // },
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
    // incQuantity: (state, action) => {
    //   state.products.map(item => {
    //     if (item._id === action.payload._id) {
    //       item.quantity += 1;
    //       state.quantity += 1;
    //       state.total = state.total + action.payload.price;
    //     }
    //   });
    // },
    // decQuantity: (state, action) => {
    //   state.products.map(item => {
    //     if (item._id === action.payload._id) {
    //       item.quantity -= 1;
    //       state.quantity -= 1;
    //       state.total = state.total - action.payload.price;
    //     }
    //   });
    // },
    // emptyCart: state => {
    //   state.products = [];
    //   state.total = 0;
    //   state.quantity = 0;
    // },
  },
});
export const {
//   addProduct,
//   deleteProduct,
//   incQuantity,
//   decQuantity,
  // emptyCart,
  // initiateCart,
} = cartSlice.actions;
export default cartSlice.reducer;