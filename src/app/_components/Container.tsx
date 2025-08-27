import { ReactNode } from "react";
import styles from "../_styles/container.module.css" ;

type containerType = {
     children : ReactNode
}
export default function Container({children} : containerType){
    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}