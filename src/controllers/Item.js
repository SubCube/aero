class Post {
   static async  fetchPosts() {
        let arr= await fetch('https://my-json-server.typicode.com/aero-frontend/test-task/PRODUCTS_SUCCESS')
                .then(response => response.json())
            .then(commits => commits.data);
      const {products} = arr
         return products
    }

}

export default Post
