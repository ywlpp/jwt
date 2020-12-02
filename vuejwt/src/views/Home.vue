<template>
  <div class="home">
  用户名{{nickname}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapState} from 'vuex'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed:{
    ...mapState(['nickname'])
  }
}
</script>
