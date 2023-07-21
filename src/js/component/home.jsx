import React, { useState } from "react";


//create your first component
const Home = () => {
	const [newTodo, setNewTodo] = useState("");
	const [list, setList] = useState(["Make the bed", "Wash my hands", "Brush my teeth"]);


	const keyPress = (e) => {
		if (e.key === "Enter"){
			setList(list.concat(newTodo))
			setNewTodo("");
		}
	}

	return (
		<div className="container">
			<h1>To Do List &#x2705;&#x1F41D;</h1>
			<div className="listWrapper">
				<ul>
					<li className="item px-5">
						<input type="text" onChange={e => setNewTodo(e.target.value)} value={newTodo} onKeyDown={keyPress} id="add-todo" placeholder="What needs to be done?" />
					</li>

					{list.map((l, i) => (
						<li className=" item px-5 d-flex">{l}
						<div className="trash">
							<i className="far fa-trash-alt" onClick={() => setList(list.filter((t, currentIndex) => i != currentIndex))}></i>
						</div>
						</li>
					))}

					<li className="px-4 tasks-left">
						{list.length} tasks {list.length === 0 ? ", add a task!" : ""}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Home;