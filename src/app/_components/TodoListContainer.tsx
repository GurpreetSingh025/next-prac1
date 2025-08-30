import styles from '../_styles/todoListContainer.module.css'
import todoData from "../../data/todos.json";
import { MdOutlineEdit, MdOutlineDelete } from "react-icons/md";

export default function TodoListContainer() {
   return (
      <div className={`${styles.flex} ${styles.todoListContainer}`}>
         {
            todoData.todos.map(obj => (
               <div className={`${styles.listItem} ${styles.flex}`} key={obj.id}>
                  <div className={`${styles.flex} ${styles.itemDetails}`}><input type='checkbox' checked={obj.status === "completed"}/><p>{obj.title}</p></div>
                  <div className={`${styles.flex} ${styles.itemOperations}`}><MdOutlineEdit className={`${styles.iconStyle}`} /><MdOutlineDelete className={`${styles.iconStyle}`} /></div>
               </div>
            ))
         }
      </div>
   )
}