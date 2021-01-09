import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import styles from "../styles.module.css";
import Footer from "./Footer";
import Element from "./Element";

const InputContainer = ({ text, setText, setAdd, setAllCompleted }) => {
	return (
		<Container
			className={styles.inputContainer}
			style={{
				margin: 0,
				display: "flex",
				alignItems: "center",
				flexDirection: "row",
			}}
		>
			<Button
				className={styles.filterButton}
				onClick={() => {
					setAllCompleted();
				}}
			>
				<i
					style={{ color: "#000" }}
					className={"fas fa-chevron-down"}
				/>
			</Button>
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<input
					type="text"
					value={text}
					onChange={(val) => {
						setText(val.target.value);
					}}
					onKeyDown={(e) => {
						if (e.keyCode === 13 && text !== "") {
							setAdd();
						}
					}}
					placeholder="What needs to be done?"
					className={styles.input}
					autoFocus
				/>
			</form>
		</Container>
	);
};

const ElementContainer = ({ elements, setElements, pickedFilter }) => {
	return (
		<>
			{elements.map((todo, i) => {
				return pickedFilter === 1 ? (
					<Element
						key={i}
						name={todo}
						setElements={() =>
							setElements(elements.filter((a, j) => j !== i))
						}
						setName={(name) => {
							setElements(
								elements.map((val, j) =>
									j === i
										? {
												...val,
												todoName: name,
										  }
										: val
								)
							);
						}}
						setComplete={() => {
							setElements(
								elements.map((val, j) =>
									j === i
										? {
												...val,
												isComplete: !val.isComplete,
										  }
										: val
								)
							);
						}}
					/>
				) : pickedFilter === 2 && todo.isComplete === false ? (
					<Element
						key={i}
						name={todo}
						setElements={() =>
							setElements(elements.filter((a, j) => j !== i))
						}
						setName={(name) => {
							setElements(
								elements.map((val, j) =>
									j === i
										? {
												...val,
												todoName: name,
										  }
										: val
								)
							);
						}}
						setComplete={() => {
							setElements(
								elements.map((val, j) =>
									j === i
										? {
												...val,
												isComplete: !val.isComplete,
										  }
										: val
								)
							);
						}}
					/>
				) : pickedFilter === 3 && todo.isComplete === true ? (
					<Element
						key={i}
						name={todo}
						setElements={() =>
							setElements(elements.filter((a, j) => j !== i))
						}
						setName={(name) => {
							setElements(
								elements.map((val, j) =>
									j === i
										? {
												...val,
												todoName: name,
										  }
										: val
								)
							);
						}}
						setComplete={() => {
							setElements(
								elements.map((val, j) =>
									j === i
										? {
												...val,
												isComplete: !val.isComplete,
										  }
										: val
								)
							);
						}}
					/>
				) : null;
			})}
		</>
	);
};

const TodoContainer = () => {
	const [todoName, setTodo] = useState("");
	const [todoList, setTodoList] = useState([]);
	const [pickedFilter, setFiler] = useState(1);
	const [allComplete, setAllComplete] = useState(true);
	return (
		<div className={styles.todoContainer}>
			<InputContainer
				text={todoName}
				setText={(a) => {
					setTodo(a);
				}}
				setAdd={() => {
					console.log("todoList");
					setTodoList([...todoList, { todoName, isComplete: false }]);
					setTodo("");
				}}
				setAllCompleted={() => {
					setTodoList(
						todoList.map((a) => {
							return { ...a, isComplete: allComplete };
						})
					);
					setAllComplete(!allComplete);
				}}
			/>
			<ElementContainer
				pickedFilter={pickedFilter}
				elements={todoList}
				setElements={(a) => setTodoList(a)}
			/>
			{todoList.length > 0 && (
				<Footer
					setClearCompleted={() => {
						setTodoList(
							todoList.filter((a) => a.isComplete === false)
						);
					}}
					pickedFilter={pickedFilter}
					setFiler={(a) => {
						setFiler(a);
					}}
					todos={todoList}
					setTodos={(a) => setTodoList(a)}
				/>
			)}
		</div>
	);
};

export default TodoContainer;
