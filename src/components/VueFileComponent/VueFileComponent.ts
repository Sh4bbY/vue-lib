import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Example extends Vue {
  count = 0;

  get name() {
    return 'VueFileComponent';
  }
}
