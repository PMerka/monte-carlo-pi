<template>
<div ref="canvasFrame" class="myDiv">
<canvas ref="myCanvas" class="myCanvasId"></canvas>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import {  onMounted, watch } from '@vue/runtime-core'

export default {
props: ['myComputation', 'colorSettingOfPoints'],
setup(props){
  const myCanvas = ref(null);
  const canvasFrame = ref(null);
  let ctx = null
  let size = null

  onMounted(() => {
    setSize()  
    let resizer = new ResizeObserver(setSize);
    resizer.observe(canvasFrame.value)
  })

  function setSize() {
    if (canvasFrame.value !== null) {
    size = 0.9*canvasFrame.value.clientWidth
    myCanvas.value.height = size
    myCanvas.value.width = size
    drawUnitCircle()
    }
  }

  watch(props.myComputation, drawThePoint)

  function drawUnitCircle() {
    ctx = myCanvas.value.getContext("2d");
    ctx.beginPath();
    ctx.arc(size/2, size/2, size/2, 0, 2 * Math.PI);
    ctx.stroke();
  } 

  function drawThePoint(){
    let point = props.myComputation.pRandom
    ctx.beginPath();
    ctx.arc(point[0]*size, point[1]*size, 1/100*size, 0, 2 * Math.PI);
    if(props.myComputation.isIn){
    ctx.fillStyle = props.colorSettingOfPoints.colorIn;
    }
    else{
      ctx.fillStyle = props.colorSettingOfPoints.colorOut;
    }
    ctx.fill();
    ctx.stroke();
  }

  return { myCanvas, canvasFrame }
}

}
</script>

<style>
.myCanvasId{
  border: 2px solid rgba(50, 50, 50, 0.5);
  }

.myDiv{
  width: 50vw;
  height: 50vw;
  min-width: 300px;
  min-height: 300px;
  border: 2px solid rgba(50, 50, 50, 0.5);
  border-radius: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1vw;
}
</style>