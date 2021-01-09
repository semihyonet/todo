import "./App.css";
import TodoContainer from "./components/TodoContainer";
import styles from "./styles.module.css";

function App() {
	return (
		<div className={styles.App}>
			<h1 className={styles.title}>todo</h1>
			<TodoContainer />
		</div>
	);
}

export default App;
