import { set } from 'mongoose';
import React, { useEffect, useState, useRef } from 'react';

export default function App(props) {
	const [blogs, setBlogs] = useState([]);
	const titleInput = useRef(null);
	const bodyInput = useRef(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/blogs');
				const data = await response.json();
				setBlogs(data);
			} catch (error) {
				console.error(error);
			}
		})();
	});

	const handleSubmit = async evt => {
		evt.preventDefault();
		const titleValue = titleInput.current.value;
		const bodyValue = bodyInput.current.value;
		try {
			const response = await fetch('api/blogs', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify({
					title: titleValue,
					body: bodyValue
				})
			});
			const data = await response.json();
			setBlogs([...blogs, data]);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="AppPage">
			{blogs.map(blog => {
				return (
					<div key={blog._id}>
						<h1>{blog.title}</h1>
						<p>{blog.body}</p>
					</div>
				);
			})}
			<form
				style={{ display: 'flex', flexDirection: 'column' }}
				onSubmit={handleSubmit}
			>
				<label>
					{' '}
					Title: <input type="text" ref={titleInput} />
				</label>
				<label>
					{' '}
					Body: <input type="text" ref={bodyInput} />
				</label>
				<input type="submit" value="Create MicroBlog" />
			</form>
		</div>
	);
}
