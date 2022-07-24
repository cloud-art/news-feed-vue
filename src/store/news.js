export default {
    actions: {
        async fetchNews(context) {
            const res = import("../news.json")
            res.then(response => {
                const news = response.news
                console.log(news)
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
            let index = state.news.indexOf(id)
            state.news.slice(index, 1)
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