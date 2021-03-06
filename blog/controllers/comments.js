const Comment = require('../models/comment');
const express = require('express');
const Blog = require('../models/blog');
const commentRouter = express.Router();

// no New or Edit

//Create

commentRouter.post('/', async (req, res) => {
	try {
		const { name, message, blogID } = req.body;
		const newComment = await Comment.create({
			name,
			message
		});
		const blog = await Blog.findById(blogID);
		const blogComments = blog.comments;
		const updateBlog = await Blog.findByIdAndUpdate(blogID, {
			comments: [...blogComments, newComment._id]
		});

		res.status(200).json(newComment);
	} catch (error) {
		res.status(400).json(error);
	}
});

//Read
//INDEX

commentRouter.get('/', async (req, res) => {
	try {
		const foundComments = await Comment.find({});

		res.status(200).json(foundComments);
	} catch (error) {
		res.status(400).json(error);
	}
});

//SHOW

commentRouter.get('/:id', async (req, res) => {
	try {
		const foundComment = await Comment.findById(req.params.id);

		res.status(200).json(foundComment);
	} catch (error) {
		res.status(400).json(error);
	}
});

//Destroy

commentRouter.delete('/:id', async (req, res) => {
	try {
		const foundComment = await Comment.findByIdAndDelete(req.params.id);

		res.status(200).json(foundComment);
	} catch (error) {
		res.status(400).json(error);
	}
});

//Update

commentRouter.put('/:id', async (req, res) => {
	try {
		const foundComment = await Comment.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true
			}
		);

		res.status(200).json(foundComment);
	} catch (error) {
		res.status(400).json(error);
	}
});

module.exports = commentRouter;
