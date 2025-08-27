import styles from '../_styles/todoFilters.module.css'
import FilterStatus from './FilterStatus';
export default function TodoFilters() {
    const pendingItems = 1;
    const completedItem = 2;

    return (
        <div className={`${styles.flex} ${styles.filterComponentContainer}`}>
            <p className={`${styles.statusText}`}>{pendingItems} pending , {completedItem}{" "}completed</p>
            {/* <div className={`${styles.flex} ${styles.filterContainer}`}> */}
                <FilterStatus />
            {/* </div> */}
        </div>
    )
}