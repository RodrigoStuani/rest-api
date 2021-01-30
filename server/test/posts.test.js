const axios = require('axios');

test('Should get posts', async function (){
  const response = await axios({
    url: 'http://localhost:3030/posts',
    method: 'get'
  });
  const posts = response.data;
  expect(posts).toHaveLength(4); // verifica o tamanho do array;
  const [firstPost] = posts;
  console.log(firstPost);
  expect(firstPost.id).toBe(1);
  expect(firstPost.title).toBe('REST API: Métodos');
});