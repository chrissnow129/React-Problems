import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

export default function App(props) {
	const [todoList, updateTodo] = useState([
		{
			title: 'Learn more about React',
			completed: true
		},
		{
			title: 'Write a new Component',
			completed: false
		},
		{
			title: 'Add some style',
			completed: false
		}
	]);

	return (
		<div class="bg-green-100 mt-40 h-45 w-30 flex flex-col items-center justify-between">
			{Object.keys(todoList).length
				? todoList.map(todo => {
						return (
							<div class="w-72 h-18 mt-30 bg-green-200 rounded-lg shadow-md flex items-center text-center flex-col">
								<h2>{todo.title}</h2>
								<p>
									{todo.completed == 'false' ? 'Completed' : 'Not Completed'}
								</p>
								<br />
							</div>
						);
				  })
				: ''}
		</div>
	);
}
