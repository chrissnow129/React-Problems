import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function BlogPost(props) {
	const [blog, setBlog] = useState({
		title: '',
		body: ''
	});
	const [didDelete, setDidDelete] = useState(false);
	const titleInput = useRef(null);
	const bodyInput = useRef(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/blogs/${props.match.params.id}`);
				const data = await response.json();
				setBlog(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [blog, didDelete]);

	const handleDelete = async evt => {
		try {
			const response = await fetch(`/api/blogs/${props.match.params.id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const data = await response.json();
			setDidDelete(!didDelete);
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/');
		}
	};

	const handleSubmit = async evt => {
		evt.preventDefault();
		try {
			const response = await fetch(`/api/blogs/${props.match.params.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					title: titleInput.current.value,
					body: bodyInput.current.value
				})
			});
			const data = await response.json();
			setBlog(data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<form
				style={{ display: 'flex', flexDirection: 'column' }}
				onSubmit={handleSubmit}
			>
				<label>
					{' '}
					Title:{' '}
					<input type="text" ref={titleInput} defaultValue={blog.title} />
				</label>
				<label>
					{' '}
					Body: <input type="text" ref={bodyInput} defaultValue={blog.body} />
				</label>
				<input type="submit" value="Create MicroBlog" />
			</form>
			<h1>{blog.title ? blog.title : ''}</h1>
			<p>{blog.body ? blog.body : ''}</p>
			<button onClick={handleDelete}>Delete this Post</button>
			<ul>
				{blog.comments && blog.comments.length
					? blog.comments.map(comment => {
							return (
								<li key={comment._id}>
									<h3>{comment.name} says...</h3>
									<p>{comment.message}</p>
									<small>{comment.createdAt}</small>
								</li>
							);
					  })
					: ''}
			</ul>
		</div>
	);
}
