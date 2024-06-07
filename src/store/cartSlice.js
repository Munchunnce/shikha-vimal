import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: JSON.parse(localStorage.getItem('cart')) || [],
    },
    reducers: {
        add(state, action){
            state.items.push(action.payload);
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        remove(state, action){
            state.items = state.items.filter((item) => item.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(state.items));
        }
    }
})

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;