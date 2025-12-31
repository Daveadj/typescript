//value must be everything from A and from B

type Inter1 = {id:string}
type Inter2 = {createdAt : Date}

type Entity = Inter1 & Inter2; //must have id and createdAt

const e : Entity = {id: 'e1', createdAt: new Date()}



type Inter3 = {id:string}
type Inter4 = {id : string}

type Entity2 = Inter3 & Inter4

const  z : Entity2 = {id: "1"}


type Product = {id: string; title : string}
type Priced = {price : number}

type ProductPriced = Product & Priced