<template>
<h1>Monte carlo <span class="together-span"> calculation of <i> π </i></span> </h1>
This project is javascript + Vue3 implementation of monte carlo method used for estimation of π.
<div class="main">

  <div class="controls">
    
    
    <Equation :myComputation="myComputation" />
    <br><br>
    <div>
      <button @click="run">Start</button>
      <button @click="stop">Stop</button>
    </div>
  </div>

  <MyDisplay :myComputation="myComputation" />

</div>
</template>

<script>
import MyDisplay from './MyDisplay.vue'
import { ref } from 'vue'
import { Computation } from './MonteCarloPi.js'
import Equation from './Equation.vue'

 
export default {
components: {MyDisplay, Equation},

 setup(){
    const myComputation = ref(new Computation);
    const iterationTime = 10;

    let intervId;
    const run = function(){
      if (!intervId) {
        intervId = setInterval(iteration, iterationTime) ;  
      }
    }
    const stop = function(){
      clearInterval(intervId);
      intervId = null; 
    }

    const iteration = function(){
        myComputation.value.calc();
    }

    return {myComputation, run, stop}
 }   

}
</script>

<style>
.together-span{
display: inline-block;
} 
.main{
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  min-width: 300px;
}
@media (max-width: 800px) {
  .main {
    flex-direction: column;
  }
}
.controls{
  width: 30vw;
  height: 40vw;
  min-width: 300px;
  min-height: 300px;
  border: 2px solid rgba(50, 50, 50, 0.5);
  border-radius: 2vw;
  margin: 1vw;
}
</style>