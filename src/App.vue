<template>
  <div id="app">
    <VueClassComponent/>
    <VueComponent/>
    <VueFileComponent/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { VueClassComponent, VueComponent, VueFileComponent } from './components';

  @Component({
    components: {
      VueClassComponent,
      VueComponent,
      VueFileComponent,
    },
  })
  export default class App extends Vue {}
</script>
