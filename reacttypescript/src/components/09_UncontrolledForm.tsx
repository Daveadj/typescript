import { useRef, type FormEvent } from "react";

function getString(input: FormData, key: string): string | null{
    var result = input.get(key);
    return typeof result === "string" ? result : null;
}


function getNumber(input: FormData, key: string): number | null{
    var result = getString(input, key);
    if(result === null) return null;

    const convertToNumber = Number(result);
   return Number.isFinite(convertToNumber) ? convertToNumber : null;
}



export function UncontrolledForm(){
  const formRef = useRef<HTMLFormElement | null>(null);

    function handleFormSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const extractName = getString(formData, "name");
      const extractAge = getNumber(formData, "age");
      console.log(extractName, extractAge);
    }

    return(
        <form onSubmit={handleFormSubmit} ref={formRef}>
            <input type="text" name="name" defaultValue="Guest"/>
            <input type="number" name="age" defaultValue="25" min={0}/>
            <button type="submit">Submit</button>
        </form>
    )

}
