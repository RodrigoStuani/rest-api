const express = require('express');
const router = express.Router();
const postsService = require('../service/postsService');

router.get('/posts', async function(req, resp) {
  const posts = await postsService.getPosts();
  resp.json(posts);
}); // Retorna uma lista todos recursos posts

router.get('/posts/:id', async function(req, resp) {
  
}); // Retorna somente um post expecifíco

router.post('/posts', async function(req, resp) {
  
}); // Criar um novo recurso de post

router.put('/posts/:id', async function(req, resp) {
  
});
 // Alteração naquele recurso post
router.delete('/posts', async function(req, resp) {
  
}); // Remover o recurso post

module.exports = router;