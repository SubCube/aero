export default {
    actions: {
      async  fetchPosts({commit}) {
             let data = await fetch('http://localhost:3000/')
                .then(response => response.json())
            commit('updatePosts', data)
        },
        async  filterItems({ commit},arr) {
            let data = await fetch('http://localhost:3000/filter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify([...arr])
            })
                .then(response => response.json())
            commit('updatePosts', data)
        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        }
    },
    state: {
        posts: []
    },
    getters: {
        allPosts: state => state.posts
    }
}
