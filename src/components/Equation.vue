<template>
<br>
<h2>Calculated <i> π </i></h2> 
<div class="equation"> 
 <i> π </i> ≈ 4 &times<div class="frac">
    <span><i>N</i><span class="desc">(in)</span> </span>
    <span class="symbol">/</span>
    <span class="bottom"><i>N</i><span class="desc">(total)</span>  </span>
</div>
</div>
 
  <div class="equation"> 
 <i> π </i> ≈ 4 &times<div class="frac">
    <span>{{myComputation.in}} <span class="dot in"></span> </span>
    <span class="symbol">/</span>
    <span class="bottom">{{myComputation.total}} <span class="dot total"></span> </span>
  </div> = {{myComputation.piString }}
  </div>
  The <span class="dot in"></span> are the dots in the circle,
  <span class="together-span">
    <span class="dot total"></span> are dots
    in or out of the circle.
  </span>
</template>

<script>
export default {
  props: ['myComputation'],
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
.dot {
  border: solid rgb(100, 100, 100) 1.5px;
  height: 0.6em;
  width: 0.6em;
  
  border-radius: 50%;
  display: inline-block;
}
.in{
  background-color: rgba(0, 130, 0, 0.5);
}
.total{
  background-image: linear-gradient(110deg, rgba(0, 130, 0, 0.5) 50%, rgb(130, 0, 0, 0.5) 50%);
}
</style>