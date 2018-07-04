export const VueComponent = {
  data    : () => ({
    count: 0,
    name: 'VueComponent'
  }),
  template: `<div class="vue-component">
    <h2>I am {{name}}</h2>
    <button v-on:click="count++">You clicked me {{ count }} times.</button>
</div>`,
};
