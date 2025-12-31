function sumAllNumbers(...numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumAllNumbers(1,2,3,4))

//Tuple rest

function makeRange(...args: [start:number,end:number,step?:number]) : number[]{
   const [start,end,step = 1] = args;
   const out : number[] = [];

   for(let n = start; n<= end; n += step) out.push(n);
   return out;
}

console.log(makeRange(1,5))


function draw(x:number,y:number){
    console.log(x,y);
}

const points = [10,20]

//draw(...points) //not a fixed [number,number]tuple

const pointFixed = [1,5] as const

draw(...pointFixed);

