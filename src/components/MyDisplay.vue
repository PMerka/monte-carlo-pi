<template>
The Display component
<br>
<canvas ref="myCanvas" class="myCanvasId"></canvas>
<br>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted, watch } from '@vue/runtime-core'

export default {
props: ['myComputation'],
setup(props){
  const myCanvas = ref(null);
  let ctx = null
  let size = 1000 

  onMounted(() => {
    myCanvas.value.height = size
    myCanvas.value.width = size
    ctx = myCanvas.value.getContext("2d");
  })

  console.log(props.myComputation.pRandom)

  watch(props.myComputation,() => {
  let point = props.myComputation.pRandom
  ctx.beginPath();
  ctx.arc(point[0]*size, point[1]*size, 4000/size, 0, 2 * Math.PI);
  if(props.myComputation.isIn){
  ctx.fillStyle = "rgba(0, 130, 0, 0.5)";
  }
  else{
    ctx.fillStyle = "rgba(130, 0, 0, 0.5)";
  }
  ctx.fill();
  ctx.stroke();
  }
  )

  return { myCanvas }
}

}
</script>

<style>
.myCanvasId{
  width: 50vw;
  height: 50vw;
  max-width: 500px;
  min-width: 200px;
  min-height: 200px;
  max-height: 500px;
  border: 2px solid rgba(50, 50, 50, 0.5);
}
</style>