<template>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/30W-wZlNg4U?list=PLdMjDQMd_pLlSOSXZxw8LztqnjWfwsaNc" frameborder="0" allowfullscreen></iframe>
</template>

<script>
export default {
  name: 'videoframe',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
  iframe {
    $iframeHeight: 315px;
    position: relative;
    top: calc(100% - #{$iframeHeight});
  }
</style>
