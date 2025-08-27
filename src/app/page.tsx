import Image from "next/image";
import styles from "./page.module.css";
import Header from "./_components/Header";
import Container from "./_components/Container";
import SearchAddItem from "./_components/SearchAddTodoItem";
import TodoFilters from "./_components/TodoFilters";
import TodoListContainer from "./_components/TodoListContainer";

export default function Home() {
  return (
    <div className={styles.page}>
        <Container>
           <Header />
           <SearchAddItem />
           <TodoFilters/>
           <TodoListContainer />
        </Container>
    </div>
  );
}
