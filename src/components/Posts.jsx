/** @format */

import axios from "axios";
import React, { useState, useEffect } from "react";

const Posts = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		// using fetch
		// fetch("https://jsonplaceholder.typicode.com/posts")
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		setPosts(data);
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		//     });

		// using axios
		axios
			.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
			.then((res) => {
				console.log(res.data);
				setPosts(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return ( 
		<div className=" flex flex-col gap-2 items-center">
			{posts.map((post) => (
				<div
					key={post.id}
					className="flex p-4 items-start flex-col shadow-lg bg-gray-300 w-8/12">
					<div className="mb-2 flex justify-between gap-5">
						<h1 className="font-bold text-xl">{post.title}</h1>
						<button className="bg-red-500 text-white rounded-md p-1 text-xs hover:bg-red-600 hover:transition ">
							Delete
						</button>
					</div>
					<div>
						<p className="text-md text-gray-600">{post.body}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Posts;
