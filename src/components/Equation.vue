<template>
<h2>Calculated <i> π </i></h2> 

<div class="equation"> 
 <i> π </i> ≈ 4 &times; <div class="frac">
    <span><i>N</i><span class="desc">(in)</span> </span>
    <span class="symbol">/</span>
    <span class="bottom"><i>N</i><span class="desc">(total)</span>  </span>
</div>
</div>
 
  <div class="equation"> 
 <i> π </i> ≈ 4 &times; 
 <div class="frac">
    <span> {{myComputation.in}} <ColoredCircle :cssColor="cssIn"/> </span>
    <span class="symbol">/</span>
    <span class="bottom"> {{myComputation.total}} <ColoredCircle :cssColor="cssInAndOut"/> </span>
  </div> = {{myComputation.piString }}
  
  </div>
   The <ColoredCircle :cssColor="cssIn"/> are the dots in the circle,
  <span class="together-span">
    <ColoredCircle :cssColor="cssInAndOut"/> are dots
    in or out of the circle.
  </span>
  
</template>

<script>
import { ref } from 'vue'
import ColoredCircle from './ColoredCircle.vue'

export default {
  components: {ColoredCircle},
  props: ['myComputation', 'colorSettingOfPoints'],

setup(props){
  const cssIn = ref({'background': props.colorSettingOfPoints.colorIn})
  const cssInAndOut = ref({'background-image': `linear-gradient(110deg, ${props.colorSettingOfPoints.colorIn} 50%, ${props.colorSettingOfPoints.colorOut} 50%)`})
  return { cssIn, cssInAndOut}
  }
}
</script>

<style>

.equation{
  font-size: 1.25em;
}
.frac {
    display: inline-block;
    position: relative;
    vertical-align: middle;
    letter-spacing: 0.001em;
    text-align: center;
}
.frac > span {
    display: block;
    padding: 0.1em;
}
.frac span.bottom {
    border-top: thin solid black;
}
.frac span.symbol {
    display: none;
}
.desc{
  font-size: 0.75em;
}
</style>