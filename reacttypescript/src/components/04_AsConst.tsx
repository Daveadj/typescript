const VARIANTS = [  
    "primary",
    "secondary",
    "tertiary",
] as const;


 type Variant = typeof VARIANTS[number];

 type BadgeProps = {
    label: string;
    variant: Variant;
 }

 export function Badge({label, variant = "primary"}: BadgeProps){
    const styles: Record<Variant, React.CSSProperties> = {
       primary: {
        color: "white",
        backgroundColor: "blue",
        
       },
       secondary: {
        color: "black",
        backgroundColor: "blue",
       },
       tertiary: {
        color: "black",
        backgroundColor: "blue",
       }

    }
    return(
        <div style={styles[variant]}>
            {label}
        </div>
    )
 }