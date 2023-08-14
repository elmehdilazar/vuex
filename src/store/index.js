import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    books:[],
  },
  getters: {
  },
  mutations: {
    increment(state,number) {
      state.count += number;
    },
    fetchBook(state) {
      const books = JSON.parse(localStorage.getItem("books"));
      state.books = books;
     
    },
    storeBook(state, book) {
      state.books.push(book);
      
    }
  },
  actions: {
    getBooks(context) {
      context.commit("fetchBook");
     
    },
    //with parameter
    addbook({commit},book) {
      commit("storeBook", book);
    }
  },
  modules: {
  }
})
