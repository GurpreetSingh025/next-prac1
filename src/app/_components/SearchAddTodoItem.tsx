"use client";

import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import styles from "../_styles/searchAddItem.module.css";

export default function SearchAddItem() {
  const [showAddInput, setShowAddInput] = useState(false);

  const handleToggleAdd = () => {
    setShowAddInput((prev) => !prev);
  };

  const handleSearchFocus = () => {
    setShowAddInput(false);
  };

  return (
    <div className={styles.wrapper}>
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search todos..."
        className={`${styles.searchInput} ${
          showAddInput ? styles.collapsed : ""
        }`}
        onFocus={handleSearchFocus}
      />

      {/* Add todo section */}
      <div className={styles.addWrapper}>
        <AiOutlinePlus
          className={`${styles.plusIcon} ${
            showAddInput ? styles.rotate : ""
          }`}
          onClick={handleToggleAdd}
        />
        <input
          type="text"
          placeholder="Add new todo..."
          className={`${styles.addInput} ${
            showAddInput ? styles.expanded : ""
          }`}
        />
      </div>
    </div>
  );
}
