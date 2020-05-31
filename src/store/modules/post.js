export default {
    actions: {
      async  fetchPosts({commit}) {
             let data = await fetch('http://localhost:3000/')
                 .then(response => response.json())
            commit('updatePosts', data)
            let marked = new Map()
            data.forEach(element => {
                marked.set(element.id, element.inFav)
            });
            commit('setMarkedValues', marked)
        },
        async  filterPosts({ commit},arr) {
            let data = await fetch('http://localhost:3000/filter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify([...arr])
            })
                .then(response => response.json())
            commit('updatePosts', data)
        },
        async  addToFavorit({ commit},id) {

            let data = await fetch('http://localhost:3000/favorit', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json;charset=utf-8'
                                    },
                                    body: JSON.stringify({id})
                                    })
            .then(response => response.json())

            commit('updateMarked', data)
        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        setMarkedValues(state, marked) {
            state.marked = marked
        },
          updateMarked(state, marked) {
            state.marked = new Map([...state.marked, ...marked])
        }
    },
    state: {
        posts: [],
        marked: {}
    },
    getters: {
        allPosts: state => state.posts,
        markedPosts: state => state.marked
    }
}
