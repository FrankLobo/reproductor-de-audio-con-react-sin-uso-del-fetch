import React, { useEffect, useRef, useState } from "react";
import FooterAndButtons from "./footerybotones.jsx";

const AudioLists = () => {
	const [songs, setSongs] = useState([]);

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/sound/songs", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				if (!response.ok) throw new Error();
				return response.json();
			})
			.then((data) => {
				setSongs(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

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
								key={index}>
								<span className="content-A">{index + 1}</span>
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
