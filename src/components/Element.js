import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import styles from "../styles.module.css";

const Element = ({ name, setElements, setComplete, setName }) => {
	const [mouseIn, setMouseIn] = useState(false);
	const [newName, setNewName] = useState(name.todoName);
	const [isInput, setToogleInput] = useState(false);
	return (
		<Container
			onMouseOver={() => {
				setMouseIn(true);
			}}
			onMouseLeave={() => {
				setMouseIn(false);
			}}
			className={styles.element}
		>
			<Container className={styles.buttonAndName}>
				<Button className={styles.button} onClick={() => setComplete()}>
					{name.isComplete ? (
						<i
							style={{ color: "#000" }}
							className={"fas fa-check"}
						/>
					) : null}
				</Button>
				{!isInput ? (
					<Button
						className={styles.editButton}
						onClick={() => {
							setToogleInput(!isInput);
						}}
					>
						{name.todoName}
					</Button>
				) : (
					<input
						type="text"
						value={newName}
						onChange={(val) => {
							setNewName(val.target.value);
						}}
						onKeyDown={(e) => {
							if (e.keyCode === 13 && newName !== "") {
								setName(newName);
								setToogleInput(!isInput);
							}
						}}
						className={styles.input}
						autoFocus
					/>
				)}
			</Container>
			{mouseIn && (
				<Button
					className={styles.filterButton}
					onClick={() => setElements()}
				>
					<i
						style={{ color: "rgba(175, 47, 47, 0.55)" }}
						className={"fas fa-times"}
					/>
				</Button>
			)}
		</Container>
	);
};
export default Element;
