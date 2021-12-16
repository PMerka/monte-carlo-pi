<template>
<h1>Monte carlo <span class="together-span"> calculation of <i> π </i></span> </h1>
<p>
  This project is javascript + Vue3 implementation of monte carlo method used for estimation of π.
</p>

<div class="main">
  <!-- The description and text output. -->
  <div class="controls">
    
    <Equation :myComputation="myComputation" :colorSettingOfPoints="colorSettingOfPoints"/>
    <h2>Settings</h2> 
    <div>
      <button @click="run">Start</button>
      <button @click="stop">Stop</button>
      <br><br>
      Time of one step: {{iterationTime}} ms <br>
      <input type="range" min="10" max="1000" id="range" v-model="iterationTime" @mouseup="restart" >
      
    </div>

  </div>

  <!-- The graphical output -->
  <MyDisplay :myComputation="myComputation" :colorSettingOfPoints="colorSettingOfPoints"/>

</div>

</template>

<script>
import MyDisplay from './MyDisplay.vue'
import Equation from './Equation.vue'
import { ref } from 'vue'
import { Computation } from './MonteCarloPi.js'
 
export default {
components: {MyDisplay, Equation},

 setup(){
    const myComputation = ref(new Computation);
    const iterationTime = ref(300);
    //color setting
    const colorSettingOfPoints = {
      colorIn: 'rgba(0, 150, 0, 0.5)',
      colorOut: 'rgb(150, 0, 0, 0.5)'
    }

    let intervId;
    function run(){
      if (!intervId) {
        intervId = setInterval(iteration, iterationTime.value) ;  
      }
    }
    function stop(){
      clearInterval(intervId);
      intervId = null; 
    }
    function restart(){
      if (intervId) {
        stop()
        run()
      }
    }

    function iteration(){
        myComputation.value.calc();
    }

    return {myComputation, colorSettingOfPoints, iterationTime, run, stop, restart}
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
  min-height: 400px;
}
.controls{
  width: 30vw;
  height: 50vw;
  min-width: 300px;
  min-height: 400px;
  border: 2px solid rgba(50, 50, 50, 0.5);
  border-radius: 2vw;
  margin: 1vw;
}
@media (max-width: 800px) {
  .main {
    flex-direction: column;
  }
  .controls{
    width: 50vw;
  }
}
</style>