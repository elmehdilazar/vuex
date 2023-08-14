<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    {{ count }} <button type="button" @click="increment">increment</button>
    <ul>
      <li v-for="(book, index) in books" :key="index">{{ book.title }}</li>
    </ul>
    <button type="button" @click="addBook">add</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { useStore } from "vuex";
import { computed,onMounted } from "vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  setup() {
    const store = useStore();
    const count = computed(() => store.state.count);
    const books = computed(() => store.state.books);
    function increment() {
      store.commit("increment", 2);
    }
    function addBook() {
      const book = {
        ref: "aaayyyttt",
        title: "vue js",
        descripiotn: "ddddd kkkkkk ddddddddjjjjjjjj",
      };
      store.dispatch("addbook", book);
    }
    onMounted(() => {
      store.dispatch("getBooks");
    });
    return {
      count,
      books,
      increment,
      addBook,
    };
  },
};
</script>
