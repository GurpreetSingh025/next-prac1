import styles from "../_styles/header.module.css" ;
import ThemeIcon from "./ThemeIcon";
export default async function Header(){
     return (
         <div className={`${styles.flex} ${styles.headerContainer}`}>
                <h3>Todo App</h3>
                <ThemeIcon/>
         </div>
     )
}