import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    counter : {value: 0}
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            return { counter: {value: state.counter.value + 1} }
        },
        decrement: (state) => {
            return { counter: {value: state.counter.value - 1 } }
        },
        incrementByAmount: (state, action) => {
            return { counter: {value: state.counter.value + action.payload} }
        }
    }
})
// console.log(counterSlice)
const counterReducer = counterSlice.reducer

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterReducer