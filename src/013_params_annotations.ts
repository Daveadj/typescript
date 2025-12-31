function add(a: number, b: number): number {
    return a + b;
}

const nums12 = [1,2,3]

const doubled = nums12.map(n => n * 2)

console.log(doubled)


type Point = {
    x: number,
    y: number
}

function distanceFromOrigin(point: Point): number {
    return Math.hypot(point.x,point.y)
}

console.log(distanceFromOrigin({x: 1, y: 2}))
