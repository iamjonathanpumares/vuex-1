<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1
      :style="colorContador"
    >
      {{ titulo }}: {{ contador }}
    </h1>
    <button @click="accionIncrementar">Aumentar</button>
    <BotonDisminuir/>

    <hr>

    <BotonAccion :estado="true"/>
    <BotonAccion :estado="false"/>
  </div>
</template>

<script>
import BotonDisminuir from '../components/BotonDisminuir'
import BotonAccion from '../components/BotonAccion'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    BotonDisminuir,
    BotonAccion
  },
  data() {
    return {
      titulo: 'Mi contador Vuex'
    }
  },
  computed: {
    ...mapState(['contador']),
    colorContador() {
      return [this.contador > 100 ? {'color': 'green'} : {'color': 'red'}]
    }
  },
  methods: {
    ...mapMutations(['incrementar']),
    ...mapActions(['accionIncrementar'])
  }
}
</script>
