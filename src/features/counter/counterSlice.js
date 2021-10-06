import { createSlice } from '@reduxjs/toolkit'

// Slice Reducer
////////////////////////////////

const initialValue = {
	value: 0,
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState: initialValue,
	reducers: {
		increment: (state) => {
			state.value += 1
		},
		decrement: (state) => {
			state.value -= 1
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload
		},
		decrementByAmount: (state, action) => {
			state.value -= action.payload
		},
	},
})

export const { increment, decrement, incrementByAmount, decrementByAmount } =
	counterSlice.actions

// Selectors
////////////////////////////////

export const selectCount = (state) => state.counter.value

export default counterSlice.reducer
