import type { PropsWithChildren, ReactNode } from "react";

type PanelProps = {
    title: string;
    children?: ReactNode;
}


export function Panel({title, children} : PanelProps){
    return(
        <section>
            <h2>{title}</h2>
          <div> {children ?? <em>No children passed</em>}</div>
        </section>


    )


}



interface RequiredChildrenProps extends PropsWithChildren{
    title: string;
    children: ReactNode;
}



export function RequiredChildrenPanel({title, children} : RequiredChildrenProps){
    return(
        <section>
            <h2>{title}</h2>
          <div> {children}</div>
        </section>


    )


}
