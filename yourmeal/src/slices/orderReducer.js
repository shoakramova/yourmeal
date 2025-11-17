import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const orderReducer = createSlice({
    initialState,
    name: 'orders',
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        },
        upCounter: (state, action) => {
            const index = state.findIndex(item => item.id == action.payload);
            if(index != -1) {
                state[index].count += 1;
            }
        },
        downCounter: (state, action) => {
            const index = state.findIndex(item => item.id == action.payload)
            if(index != -1) {
                if(state[index].count - 1 <= 0 ) {
                    state.splice(index, 1)
                } else {
                    state[index].count -= 1
                }
            }
        },
        clear: (state, action) => {
            state.splice(0, state.length)
        }

    },
    selectors: {
        selectOrder: (state) => state
    }
})

export default orderReducer.reducer
export const { selectOrder } = orderReducer.selectors
export const { add, upCounter, downCounter, clear } = orderReducer.actions