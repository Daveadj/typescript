import { useState, type ChangeEvent, type MouseEvent, type KeyboardEvent, type FormEvent } from "react";


export function FormExample(){
    const [name, setName] = useState("");
    const[color, setColor] = useState("red");
    function handleNameChange(event : ChangeEvent<HTMLInputElement>){
        setName(event.currentTarget.value);
        setColor(event.target.value);
    }

    function handleButtonClick(event : MouseEvent<HTMLButtonElement>){
       event.preventDefault();
       alert(`Hello ${name}`);
    }
    function handleKeyDown(event : KeyboardEvent<HTMLInputElement>){
        if(event.key === "Enter"){
         
        }
    }

    function handleFinalFormSubmit(event : FormEvent<HTMLFormElement>){
        event.preventDefault();
        alert(`Hello ${name}`);
    }

    function handleColorChange(event : ChangeEvent<HTMLSelectElement>){
        setColor(event.target.value);
    }
    return(
        <form onSubmit={handleFinalFormSubmit

        }>
            <input type="text" value={name} 
            placeholder="Enter your name" 
            onChange={handleNameChange} 
            onKeyDown={handleKeyDown}
            />
             
             <select value={color} onChange={handleColorChange} >

                <option value="">Select</option>
                <option value="">Select</option>
                <option value="">Select</option>
             </select>



            <button type="submit" onClick={handleButtonClick}>Submit</button>
        </form>
    )
}