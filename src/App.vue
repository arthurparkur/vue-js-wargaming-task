<template>
    <div id="app">
      <div class="play-button" @click="showPopup">
        <i class="fa fa-youtube-play"></i>
        <p>Let's watch the video</p>
      </div>
      <router-view></router-view>
    </div>   
</template>

<script>
import Popup from './components/popup.vue'

export default {
  name: 'app',
  data () {
    return {}
  },
  components: {
    Popup
  },
  methods: {
    showPopup: function () {this.$router.push({path: 'popup'})}
  }
}
</script>

<style lang="scss">
$buttonHeight: 50px;
$butonWidth: 268px;
.play-button {
  position: absolute;
  top: 40%;
  left: calc(30% - #{$butonWidth/2});
  height: $buttonHeight;
  width: 268px;
  background-color: #55c7ec;
  font-size: 18pt;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  color: #ffffff;
    &:hover {
      box-shadow: 0 0 10px #ffffff;
      text-shadow: 0.5px 0.5px 1px white, 0 0 1em white;
    }
    > i {
      position: absolute;
      left: 13px;
      top: calc(50% - 12px);
    }
    > p {
      position: absolute;
      display: block;
      margin:0;
      left: 45px;
      top: 12px;
    }
}
</style>
