import React from "react";
import Counter from "./Counter";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Simple Counter</h1>
			<Counter />
			
			<p>
				Made by{" "}
				<a href="https://www.linkedin.com/in/yuliya-bundur/">Yúliya Búndur</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
