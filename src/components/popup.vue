<template>
  <div id="popup">
    <div class="overlay" @click="close"></div>
    <div class="popup">
      <i class="fa fa-window-close fa-lg fa-inverse" @click="close"></i>
      <videoframe></videoframe>
    </div>
  </div>
</template>

<script>
import Videoframe from './videoframe.vue'


export default {
  name: 'popup',
  data () {
    return {}
  },
  methods: {
    close: function () {this.$router.go(-1)}
  },
  components: {
    Videoframe
  }
}
</script>

<style lang="scss">
.overlay {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, .5);
  z-index: 1;
}

.popup {
  $popupHeight: 400px;
  $popupwidth: 560px;
  $left: 50%;
  position: fixed;
  top: calc(50% - #{$popupHeight/2});
  left: calc(50% - #{$popupwidth/2});
  width: $popupwidth;
  z-index: 2;
  > i {    
    float: right;
    z-index: 3;
    cursor: pointer;
  }
}
</style>
