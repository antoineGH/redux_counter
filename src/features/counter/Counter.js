import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	decrement,
	increment,
	incrementByAmount,
	decrementByAmount,
	selectCount,
} from './counterSlice'
import './Counter.css'

export default function Counter() {
	const count = useSelector(selectCount)
	const dispatch = useDispatch()
	const [incrementAmount, setIncrementAmount] = useState('2')

	return (
		<>
			<div className='container'>
				<button onClick={() => dispatch(increment())}>+</button>
				<span className='counter'>{count}</span>
				<button onClick={() => dispatch(decrement())}>-</button>
			</div>
			<div className='container-input'>
				<input
					className='input-amount'
					aria-label='Set Increment Amount'
					value={incrementAmount}
					onChange={(e) => setIncrementAmount(e.target.value)}
				/>
				<button
					className='btn-increment'
					onClick={() =>
						dispatch(incrementByAmount(Number(incrementAmount)))
					}>
					Add Amount
				</button>
				<button
					className='btn-increment'
					onClick={() =>
						dispatch(decrementByAmount(Number(incrementAmount)))
					}>
					Remove Amount
				</button>
			</div>
		</>
	)
}
