
//Exclude<U,V> remove from U those member assignable to V
//Extract<U, V> keep from U those member assignable to V
//Nonnullabe


type EventType1 = "click" | "submit"| "hover" | "keydown"| "keyup";

type EventType2 = Exclude<EventType1,"keydown">

function handleEvent(e: EventType2){
    console.log(e);
}

//handleEvent("keydown") error

type ActionsN1 = "create" | "update" | "delete"| "read"
type ActionsN2 = Extract<ActionsN1, "create" | "update">

function handleEvent2(e: ActionsN2){
    console.log(e);
}

//handleEvent2("read") error


type MaybeNumber = number | null | undefined
type CleanNumber = NonNullable<MaybeNumber>

function square(num : CleanNumber){
    return num * 2
}

square(20)
//square(null) error