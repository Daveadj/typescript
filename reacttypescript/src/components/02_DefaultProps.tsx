type GreetProps = {
    name?: string;
    shout?: boolean;
}

export function GreetA({name = "Guest", shout = false}: GreetProps){
  const text = shout ? name.toUpperCase(): name;

  return(
    <h2>Hello {text}</h2>
  )
    
}


export function GreetB(props: GreetProps){
    const name = props.name ?? "Greet" 
    const shout = props.shout ?? false;

    const text = shout ? name.toUpperCase(): name;

    return(
        <h2>Hello {text}</h2>
    )
}