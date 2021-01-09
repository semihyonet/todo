import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import styles from "../styles.module.css";

const Filters = ({ pickedFilter, setFiler }) => {
	return (
		<Container>
			<Button
				className={
					pickedFilter === 1
						? styles.activeFilterButton
						: styles.filterButton
				}
				onClick={() => {
					setFiler(1);
				}}
			>
				All
			</Button>
			<Button
				className={
					pickedFilter === 2
						? styles.activeFilterButton
						: styles.filterButton
				}
				onClick={() => {
					setFiler(2);
				}}
			>
				Active
			</Button>
			<Button
				className={
					pickedFilter === 3
						? styles.activeFilterButton
						: styles.filterButton
				}
				onClick={() => {
					setFiler(3);
				}}
			>
				Completed
			</Button>
		</Container>
	);
};

const Footer = ({
	todos,
	setTodos,
	pickedFilter,
	setFiler,
	setClearCompleted,
}) => {
	const [checked, setChecked] = useState(0);
	useEffect(() => {
		setChecked(0);
		let checky = 0;
		todos.map((todo) => {
			if (todo.isComplete === true) checky += 1;
			return 0;
		});
		setChecked(checky);
	}, [todos]);
	return (
		<Container className={styles.footer}>
			<Container style={{ paddingRight: 0 }}>
				{todos.length - checked} items left
			</Container>
			<Container
				style={{
					position: "absolute",
					right: "45%",
					alignSelf: "center",
				}}
			>
				<Filters
					pickedFilter={pickedFilter}
					setFiler={(a) => {
						setFiler(a);
					}}
				/>
			</Container>
			<Container
				style={{
					position: "absolute",
					right: "37%",
					alignSelf: "center",
				}}
			>
				{checked > 0 && (
					<Button
						className={styles.filterButton}
						onClick={() => {
							setClearCompleted();
						}}
					>
						Clear Completed
					</Button>
				)}
			</Container>
		</Container>
	);
};

export default Footer;
