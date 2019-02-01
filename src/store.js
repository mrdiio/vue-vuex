import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    author: 'Dio',
    github: 'https://github.com/mrdiio',
    hobi: [
      {
        id: 1,
        jenis: 'Futsal'
      },
      {
        id: 2,
        jenis: 'Musik'
      },
      {
        id: 3,
        jenis: 'Gamer'
      }
    ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    cariHobiId: state => (id) => {
      return state.hobi.find((ob) => {
        return ob.id === id
      })
    }
  }
})
