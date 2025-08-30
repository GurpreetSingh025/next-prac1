"use client";
import styles from "../_styles/todoFilters.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ALL, ACTIVE, COMPLETED } from "@/constant/statusFilterConstant";
import { setFilter } from "@/store/slices/TodoSlice";

export default function FilterStatus() {
  const [activeFilterId, setActiveFilterId] = useState(1);
  const dispatch = useDispatch();

  type StatusType = "all" | "active" | "completed";

  type StatusObj = {
    id: number;
    title: StatusType;
  };

  const status: StatusObj[] = [
    {
      title: ALL as StatusType,
      id: 1,
    },
    {
      title: ACTIVE as StatusType,
      id: 2,
    },
    {
      title: COMPLETED as StatusType,
      id: 3,
    },
  ];

  const handleStatusClick = (id: number, title: StatusType) => {
    setActiveFilterId(id);
    dispatch(setFilter(title));
  };

  return (
    <div className={`${styles.flex} ${styles.statusContainer}`}>
      {status.map((obj) => (
        <div
          key={obj.id}
          className={`${styles.flexCenter} ${styles.status} ${
            obj.id === activeFilterId ? `${styles.activeStatus}` : ""
          }`}
          onClick={() => handleStatusClick(obj.id, obj.title)}
        >
          {obj.title}
        </div>
      ))}
    </div>
  );
}
