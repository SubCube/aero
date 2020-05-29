class Post {
    //   static async  fetchPosts() {
    //     let data = await fetch('http://localhost:3000/')
    //             .then(response => response.json())
    //      return data
    //   }
        static async  addToFavorit(id) {
            try {
            let data = await fetch('http://localhost:3000/favorit', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json;charset=utf-8'
                                    },
                                    body: JSON.stringify({id})
                                    })
            .then(response => response.json())

         return data
            } catch (err) {
                console.log(err)
      }
        }
//             static async  filterItems(arr) {
//             try {
//             let data = await fetch('http://localhost:3000/filter', {
//                                     method: 'POST',
//                                     headers: {
//                                         'Content-Type': 'application/json;charset=utf-8'
//                                     },
//                                     body: JSON.stringify([...arr])
//                                     })
//             .then(response => response.json())

//          return data
//             } catch (err) {
//                 console.log(err)
//       }
//    }
}

export default Post
