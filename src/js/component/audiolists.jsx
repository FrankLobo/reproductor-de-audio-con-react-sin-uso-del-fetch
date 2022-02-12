import React, { useRef, useState } from "react";
import FooterAndButtons from "./footerybotones.jsx";

const AudioLists = () => {
	const [songs, setSongs] = useState([
		{
			id: 1,
			cateory: "game",
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
		{
			id: 4,
			category: "game",
			name: "Mario Stage 1",
			url: "files/mario/songs/stage1.mp3",
		},
		{
			id: 5,
			category: "game",
			name: "Mario Stage 2",
			url: "files/mario/songs/stage2.mp3",
		},
		{
			id: 6,
			category: "game",
			name: "Mario Underworld",
			url: "files/mario/songs/underworld.mp3",
		},
		{
			id: 7,
			category: "game",
			name: "Mario Underwater",
			url: "files/mario/songs/underwater.mp3",
		},
		{
			id: 8,
			category: "game",
			name: "Zelda Castle",
			url: "files/videogame/songs/zelda_castle.mp3",
		},
		{
			id: 9,
			category: "game",
			name: "Zelda Outworld",
			url: "files/videogame/songs/zelda_outworld.mp3",
		},
		{
			id: 10,
			category: "game",
			name: "Zelda Titles",
			url: "files/videogame/songs/zelda_title.mp3",
		},
		{
			id: 11,
			category: "game",
			name: "Sonic Brain Zone",
			url: "files/videogame/songs/sonic_brain-zone.mp3",
		},
		{
			id: 12,
			category: "game",
			name: "Zelda Link To Past",
			url: "files/videogame/songs/zelda_link-to-past.mp3",
		},
		{
			id: 13,
			category: "game",
			name: "Dong KinKong Main",
			url: "files/other/songs/dkng-main.mp3",
		},
		{
			id: 14,
			category: "game",
			name: "Dong KinKong Other",
			url: "files/other/songs/dkng-other.mp3",
		},
		{
			id: 15,
			category: "game",
			name: "mega-man",
			url: "files/other/songs/mega-man.mp3",
		},
		{
			id: 16,
			category: "cartoon",
			name: "Flintstones",
			url: "files/cartoons/songs/flintstones.mp3",
		},
		{
			id: 17,
			category: "cartoon",
			name: "power-rangers",
			url: "files/cartoons/songs/power-rangers.mp3",
		},
		{
			id: 18,
			category: "cartoon",
			name: "simpsons",
			url: "files/cartoons/songs/simpsons.mp3",
		},
		{
			id: 19,
			category: "cartoon",
			name: "south-park",
			url: "files/cartoons/songs/south-park.mp3",
		},
		{
			id: 20,
			category: "cartoon",
			name: "thundercats",
			url: "files/cartoons/songs/thundercats.mp3",
		},
		{
			id: 21,
			category: "cartoon",
			name: "x-men",
			url: "files/cartoons/songs/x-men.mp3",
		},
	]);
	const audioRef = useRef();
	const [songsIndex, setSongsIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);

	const selectIndexSong = (index) => {
		audioRef.current.src = `https://assets.breatheco.de/apis/sound/${songs[index].url}`;
	};
	let playStop = () => {
		audioRef.current.play();
	};
	let pauseSong = () => {
		audioRef.current.pause();
	};
	const buttonAction = (element, index) => {
		if (audioRef.current.src !== element.url) {
			selectIndexSong(index);
			setSongsIndex(index);
		}
		if (!isPlaying && audioRef.current.paused) {
			playStop();
			setIsPlaying(true);
		} else {
			pauseSong();
			setIsPlaying(false);
		}
	};

	return (
		<>
			<div className="maincontainer">
				<div className="container">
					<audio ref={audioRef}></audio>
					{songs.map((element, index) => {
						return (
							<button
								onClick={() => {
									buttonAction(element, index);
								}}
								className="item"
								key={element.id}>
								<span className="content-A">{element.id}</span>
								<span className="content-B">
									{element.name}
								</span>
							</button>
						);
					})}
				</div>
				<FooterAndButtons
					ref={audioRef}
					playicon="icon-play"
					skipfowardicon="icon-skip-foward"
					skipbackicon="icon-skip-back"
					selectIndexSong={selectIndexSong}
					songsIndex={songsIndex}
					setSongsIndex={setSongsIndex}
					playStop={playStop}
					setIsPlaying={setIsPlaying}
					isPlaying={isPlaying}
					songs={songs}
				/>
			</div>
		</>
	);
};

export default AudioLists;
