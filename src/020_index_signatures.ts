

type NumberDict = {
    [key : string] : number
}

const counters : NumberDict = {
    
}

counters["Likes"] = 1
counters["Dislikes"] = 2


type Metrics = Record<"Likes" | "Dislikes" | "Views", number>

const mm : Metrics = {Likes:1,Views:100,Dislikes:23}

const priceMap = new  Map<string, number>()
priceMap.set("Apple", 10)
priceMap.set("Banana", 20)
priceMap.set("Orange", 30)


type LooseMap = Record<string, number | undefined>
const lm : LooseMap = {}
lm["xm"] = undefined
lm["xt"] = 10