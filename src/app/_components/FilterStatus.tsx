"use client"
import styles from '../_styles/todoFilters.module.css' ;
import { useState } from 'react';
export default function FilterStatus(){
      const [activeFilterId , setActiveFilterId] = useState(1) ;
      const status = [
        {
            title: 'All',
            id: 1
        },
        {
            title: 'Active',
            id: 2
        },
        {
            title: 'Completed',
            id: 3
        }
    ]
    const handleStatusClick = (id : number) => {
        setActiveFilterId(id) ;
    }
    return (
         <div className={`${styles.flex} ${styles.statusContainer}`}>
            {
                status.map(obj => (
                     <div key={obj.id} className={`${styles.flexCenter} ${styles.status} ${obj.id === activeFilterId ? `${styles.activeStatus}` : ''}`} onClick={() => handleStatusClick(obj.id)}>{obj.title}</div>
                ))
            }
         </div>
    )
}