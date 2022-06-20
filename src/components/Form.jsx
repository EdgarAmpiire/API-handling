/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";

const Form = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleBodyChange = (e) => {
		setBody(e.target.value);
	};

	const handleButton = (e) => {
		e.preventDefault();
		// console.log(title);
		// console.log(body);
        e.target.reset();

		axios.post("https://jsonplaceholder.typicode.com/posts", {
				title: { title },
				body: { body },
			})
			.then((res) => {
				console.log(res.data);
			});
	};

	return (
		<div className="flex justify-center">
			<div className="bg-gray-300 w-[48rem]">
				<form
					action=""
					className="flex flex-col justify-center items-center my-5">
					<input
						type="text"
						placeholder="Enter title"
						className="p-3 rounded-md w-5/12 border bg-gray-600 text-white"
						onChange={handleTitleChange}
					/>
					<textarea
						type="text"
						placeholder="body"
						className="mt-2 p-3 rounded-md w-5/12 border bg-gray-600 text-white"
						onChange={handleBodyChange}
					/>
					<button
						onClick={handleButton}
						className="rounded-md bg-green-400 text-gray-600 p-3 w-3/12 mt-5 font-bold text-lg hover:bg-green-500 hover:transition "
						type="submit">
						Post
					</button>
				</form>
			</div>
		</div>
	);
};

export default Form;
