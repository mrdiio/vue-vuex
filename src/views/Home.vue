<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Learn Vuex"/>
    <h1>by {{author}}</h1>
    <a :href="github">{{$store.state.github}}</a>
    <p>Hobi : {{ cariHobiId(2).jenis }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState, mapGetters} from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState([
      'author',
      'github'
    ]),
    ...mapGetters([
      'cariHobiId'
    ])
  }
}
</script>
