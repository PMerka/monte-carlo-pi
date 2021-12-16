<template>
  <span class="dot" :style="cssColor"></span>
</template>

<script>

export default {
  props: ['cssColor']
}
</script>

<style>
.dot {
  border: solid rgb(100, 100, 100) 1.5px;
  height: 0.6em;
  width: 0.6em;
  
  border-radius: 50%;
  display: inline-block;
}
</style>