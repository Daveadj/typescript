import { useReducer } from "react"

type CounterState = {
    count: number;
    step: number;
}

function init(initialState: number) : CounterState{ 
    return {count: initialState, step: 1};
}

type Action = 
   {type : 'Increment'} | {type : 'Decrement'} | {type : 'Reset', to?: number}


function CounterReducer(state: CounterState, action: Action) : CounterState{
  switch(action.type){
    case 'Increment':
     return {...state, count: state.count + state.step};
    case 'Decrement':
       return {...state, count: state.count - state.step};
    case 'Reset':
       return {...state, count: action.to ?? 0};
    default:
       return state;
  }
}


export function TypedUseReducer({initial = 0}: {initial?: number}){
    const [state, dispatch] = useReducer(CounterReducer,initial, init)


    return(
        <div>
            <h2>TypedUseReducer</h2>
            <p>Count: {state.count}</p>
            <p>Step: {state.step}</p>
            <button onClick={() => dispatch({type: 'Increment'})}>Increment</button>
            <button onClick={() => dispatch({type: 'Decrement'})}>Decrement</button>
            <button onClick={() => dispatch({type: 'Reset', to: 0})}>Reset</button>
        </div>
    )   
    
}

