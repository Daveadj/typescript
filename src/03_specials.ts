//strictNullChecks

// let title : string = "typescript";
// title = undefined


let title : string | undefined = "typescript";
title = undefined



//void: function doesn't return a useful value
function log(msg:string) : void{
    console.log(msg);
}

//never returns
function fail(msg:string): never{
    throw new Error(msg);
}


//DO NOT USE ANY TRY TO IGNORE IF POSSIBLE


const valueAny : any = JSON.parse('{"x": 1}')

valueAny.notThere.toFixed(2) //this compiles but can break at runtime


