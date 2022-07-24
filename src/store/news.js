export default {
    actions: {
        async fetchNews(context) {
            const res = import("../news.json")
            res.then(response => {
                const news = response.news
                context.commit('updateNews', news)
            })
          }
    },
    mutations: {
        updateNews(state, news){
            state.news = news
        },
        addItem(state, newItem){
            state.news.unshift(newItem)
        },
        deleteItem(state, id){
            state.news.forEach((el, i) => {
                if (el.id == id) state.news.splice(i, 1)
            })
        },
        editItem(state, editedItem){
            console.log(`store: `, editedItem)
            state.news.forEach((el) => {
                if (el.id == editedItem.id){
                    el.title = editedItem.title
                    el.text = editedItem.text
                }
            })
        }
    },
    state: {
        news:[]
    },
    getters: {
        allNews(state){
            return state.news
        }
    }
}