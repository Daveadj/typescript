import type { ReactNode } from "react";

interface UserCardProps{
    id: string;
    name?: string;
    substitle?: ReactNode
}

export function Usercard({id, name, substitle}: UserCardProps){
    const displayName = name ?? "Guest"

    return(
        <div>
            <h2>{displayName}</h2>
            <p>{id}</p>
             {
                substitle? <p>{substitle}</p> : null
             }
        </div>
    )
}


