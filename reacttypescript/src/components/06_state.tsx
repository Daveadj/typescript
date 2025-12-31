import { useState } from "react";

export function Counter(){
    const [count, setCount] = useState(0); //inferred as a number
  return(
    <div>
      <h2>Counter</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

//idle , loading,success,error
type LoaderState = {status: "idle"} | {status: "loading"} | {status: "success"; data: string} | {status: "error"; message: string};

function heavyDefault(): number{
    return 100;
}

type User = {
    id: number;
    name: string;
    email: string;
}
export function LoaderDemo(){
    const [state, setState] = useState<LoaderState>({status: "idle"});
    const [n, setN] = useState<number>(() => heavyDefault());

    const [user, setUser] = useState<User | null>(null);

    async function fetchData(){
        setState({status: "loading"});

        //mock api call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setState({status: "success", data: "Data fetched successfully"});

        //catch error
        setState({status: "error", message: "Error fetching data"});
    }

    return <div>
        <h2>Loader Demo</h2>
        <p>{state.status}</p>
    </div>
}


