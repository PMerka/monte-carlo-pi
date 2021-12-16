export class Computation {
    constructor(){
    this.in = 0;
    this.total = 0;
    this.pi = undefined; 
    this.piString = undefined;
    this.pCenter = [0.5, 0.5];
    this.pRandom = undefined;
    this.isIn = undefined
}
   calc(){
       this.pRandom = [Math.random(), Math.random()]
       let distance = Math.sqrt((this.pRandom[0] - this.pCenter[0])**2 + (this.pRandom[1] - this.pCenter[1])**2)
       if (distance<=0.5){
           this.in ++
           this.isIn = true
       }
       else{
           this.isIn = false
       }
       this.total ++
       this.pi = 4 * this.in/this.total
       this.piString = this.pi.toFixed(5);
   }
   }