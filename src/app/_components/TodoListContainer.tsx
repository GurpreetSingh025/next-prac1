import styles from '../_styles/todoListContainer.module.css'
import { MdOutlineEdit , MdOutlineDelete  } from "react-icons/md";

export default function TodoListContainer(){
     return(
          <div className={`${styles.flex} ${styles.todoListContainer}`}>
             <div className={`${styles.listItem} ${styles.flex}`}>                 
                <div className={`${styles.flex} ${styles.itemDetails}`}><input type='checkbox' /><p>Learn Next.js 16</p></div>
                <div className={`${styles.flex} ${styles.itemOperations}`}><MdOutlineEdit className={`${styles.iconStyle}`}/><MdOutlineDelete className={`${styles.iconStyle}`}/></div>
             </div>
            <div className={`${styles.listItem} ${styles.flex}`}>                 
                <div className={`${styles.flex} ${styles.itemDetails}`}><input type='checkbox' /><p>Learn Next.js 16</p></div>
                <div className={`${styles.flex} ${styles.itemOperations}`}><MdOutlineEdit className={`${styles.iconStyle}`}/><MdOutlineDelete className={`${styles.iconStyle}`}/></div>
             </div>
                         <div className={`${styles.listItem} ${styles.flex}`}>                 
                <div className={`${styles.flex} ${styles.itemDetails}`}><input type='checkbox' /><p>Learn Next.js 16</p></div>
                <div className={`${styles.flex} ${styles.itemOperations}`}><MdOutlineEdit className={`${styles.iconStyle}`}/><MdOutlineDelete className={`${styles.iconStyle}`}/></div>
             </div>
                                      <div className={`${styles.listItem} ${styles.flex}`}>                 
                <div className={`${styles.flex} ${styles.itemDetails}`}><input type='checkbox' /><p>Learn Next.js 16</p></div>
                <div className={`${styles.flex} ${styles.itemOperations}`}><MdOutlineEdit className={`${styles.iconStyle}`}/><MdOutlineDelete className={`${styles.iconStyle}`}/></div>
             </div>                         <div className={`${styles.listItem} ${styles.flex}`}>                 
                <div className={`${styles.flex} ${styles.itemDetails}`}><input type='checkbox' /><p>Learn Next.js 16</p></div>
                <div className={`${styles.flex} ${styles.itemOperations}`}><MdOutlineEdit className={`${styles.iconStyle}`}/><MdOutlineDelete className={`${styles.iconStyle}`}/></div>
             </div>                         <div className={`${styles.listItem} ${styles.flex}`}>                 
                <div className={`${styles.flex} ${styles.itemDetails}`}><input type='checkbox' /><p>Learn Next.js 16</p></div>
                <div className={`${styles.flex} ${styles.itemOperations}`}><MdOutlineEdit className={`${styles.iconStyle}`}/><MdOutlineDelete className={`${styles.iconStyle}`}/></div>
             </div>                         <div className={`${styles.listItem} ${styles.flex}`}>                 
                <div className={`${styles.flex} ${styles.itemDetails}`}><input type='checkbox' /><p>Learn Next.js 16</p></div>
                <div className={`${styles.flex} ${styles.itemOperations}`}><MdOutlineEdit className={`${styles.iconStyle}`}/><MdOutlineDelete className={`${styles.iconStyle}`}/></div>
             </div>                         <div className={`${styles.listItem} ${styles.flex}`}>                 
                <div className={`${styles.flex} ${styles.itemDetails}`}><input type='checkbox' /><p>Learn Next.js 16</p></div>
                <div className={`${styles.flex} ${styles.itemOperations}`}><MdOutlineEdit className={`${styles.iconStyle}`}/><MdOutlineDelete className={`${styles.iconStyle}`}/></div>
             </div>
          </div>
     )
}