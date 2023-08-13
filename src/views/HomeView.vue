<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
{{  count }} <button type="button" @click="increment">increment</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    increment() {
      this.$store.commit("increment", 2);
    }
  },
}
</script>
