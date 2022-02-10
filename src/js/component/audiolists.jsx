import React, { useRef } from "react";
import { FooterAndButtons } from "./footerybotones.jsx";

//create your first component
const AudioLists = () => {
	// let listSongs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
	let newSongs = [
		{
			id: 1,
			category: "game",
			name: "Mario Castle",
			url: "files/mario/songs/castle.mp3",
		},
		{
			id: 2,
			category: "game",
			name: "Mario Star",
			url: "files/mario/songs/hurry-starman.mp3",
		},
		{
			id: 3,
			category: "game",
			name: "Mario Overworld",
			url: "files/mario/songs/overworld.mp3",
		},
	];
	return (
		<>
			<div className="maincontainer">
				<div className="container">
					<ol className="list">
						{newSongs.map((element) => {
							console.log(element);
							return (
								<li className="item" key={element.id}>
									{element.name}
									<audio controlsList="nodownload" controls>
										<source
											src={`https://assets.breatheco.de/apis/sound/${element.url}`}
											type="audio/mpeg"
										/>
									</audio>
								</li>
							);
						})}
					</ol>
					<FooterAndButtons />
				</div>
			</div>
		</>
	);
};

export default AudioLists;
