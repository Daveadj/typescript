

//interface => object shapes that you expect to extend
//supports declaration merging


//types => more general -> objects , union, intersections,function
// cannot be reopened -> no merging


interface Box1{
    width : number
}

interface Box1{
    height : number
}

const boxDemo : Box1 = {width:10, height:10}

// type Bag = {size: number}
// type Bag = {color : string}

//cant redeclare type alias name


