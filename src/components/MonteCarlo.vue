<template>
  Monte carlo
  <button @click="run">Start</button>
   <button @click="stop">Stop</button>
  <p> {{myComputation.pi}} </p>
  <MyDisplay :myComputation="myComputation" />
</template>

<script>
import MyDisplay from './MyDisplay.vue'
import { ref } from 'vue'
import { Computation } from './MonteCarloPi.js'

 
export default {
components: {MyDisplay},

 setup(){
    const myComputation = ref(new Computation);
    const iterationTime = ref(10);

    let intervId;
    const run = function(){
      if (!intervId) {
        intervId = setInterval(iteration, iterationTime.value) ;  
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

</style>