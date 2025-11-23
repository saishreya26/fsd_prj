// backend/routes/postRoutes.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// CRUD Routes
router.post('/', postController.createPost);           // Create
router.get('/', postController.getAllPosts);           // Read all
router.get('/:id', postController.getPostById);        // Read one
router.put('/:id', postController.updatePost);         // Update
router.delete('/:id', postController.deletePost);      // Delete

module.exports = router;