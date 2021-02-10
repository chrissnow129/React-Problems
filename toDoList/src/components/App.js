import React, { useState, useRef } from 'react';
import todoListx from '../data';
import 'tailwindcss/tailwind.css';

export default function App(props) {
	const [todoList, updateTodo] = useState(todoListx);
	const bodyInput = useRef(null);

	const handleChange = evt => {
		updateTodo({
			title: '',
			completed: false
		});
	};

	const handleSubmit = evt => {
		evt.preventDefault();
		const bodyValue = bodyInput.current.value;
		// todoList.completed = 'false';
		// todoList.title = '';
		console.log(todoList);
		updateTodo([...todoList, bodyValue]);
	};

	return (
		<body>
			<form onSubmit={handleSubmit} className="flex flex-col mt-14">
				<label>
					What do you Need To Do? <br />
					<input
						type="text"
						onChange={handleChange}
						ref={bodyInput}
						className="bg-gray-100"
					/>
				</label>{' '}
				<br />
				<input
					type="submit"
					value="Add To Do"
					className="w-24 p-2 rounded-lg "
				/>
			</form>

			<div className="bg-green-100 mt-40 h-65 w-25 p-8 flex items-center rounded-lg flex-wrap justify-between">
				{Object.keys(todoList).length
					? todoListx.map(todo => {
							return (
								<div
									className="
							w-60 
							h-23 
							mt-30 
							bg-green-200 
							leading-7 
							rounded-lg
							shadow-sm 
							flex 
							items-center 
							text-center 
							flex-col 
							justify-between
							text-white
							hover:shadow-md"
								>
									<h2 className="text-xl font-bold">{todo.title}</h2> <br />
									<p>
										{todo.completed == 'false' ? 'Completed' : 'Not Completed'}
									</p>
									<br />
								</div>
							);
					  })
					: ''}
			</div>
		</body>
	);
}
