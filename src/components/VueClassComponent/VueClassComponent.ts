import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import shuffle from 'lodash/shuffle';

require('./VueClassComponent.scss');

@Component({
  template: require('raw-loader!./VueClassComponent.html'),
})
export default class Example extends Vue {
  count = 0;

  get name() {
    return 'VueClassComponent';
  }

  work(){
    console.log(shuffle([1,2,3,4,5]));
  }
}
