import React, { forwardRef } from "react";
import { FaPlay } from "react-icons/fa";
import { IoPlaySkipForward } from "react-icons/io5";
import { IoPlaySkipBack } from "react-icons/io5";
import { CgPlayPauseO } from "react-icons/cg";

const FooterAndButtons = (props, ref) => {
	let skipBack = () => {
		if (props.songs[props.songsIndex - 1] !== undefined) {
			props.selectIndexSong(props.songsIndex - 1);
			props.playStop();
			props.setSongsIndex(props.songsIndex - 1);
			props.setIsPlaying(true);
		} else if (props.songs[props.songsIndex - 1] === undefined) {
			props.selectIndexSong(props.songs.length - 1);
			props.playStop();
			props.setSongsIndex(props.songs.length - 1);
			props.setIsPlaying(false);
		}
	};
	let skipForward = () => {
		if (props.songs[props.songsIndex + 1] !== undefined) {
			props.selectIndexSong(props.songsIndex + 1);
			props.playStop();
			props.setSongsIndex(props.songsIndex + 1);
		} else if (props.songs[props.songsIndex + 1] === undefined) {
			props.selectIndexSong(0);
			props.playStop();
			props.setSongsIndex(0);
		}
	};
	return (
		<>
			<div className="footer">
				<button
					className={props.skipbackicon}
					onClick={() => skipBack()}>
					<IoPlaySkipBack />
				</button>
				<button
					className={props.playicon}
					onClick={() => {
						if (!props.isPlaying && ref.current.paused) {
							ref.current.play();
							props.setIsPlaying(true);
						} else {
							ref.current.pause();
							props.setIsPlaying(false);
						}
					}}>
					{!props.isPlaying ? <FaPlay /> : <CgPlayPauseO />}
				</button>
				<button
					className={props.skipfowardicon}
					onClick={() => skipForward()}>
					<IoPlaySkipForward />
				</button>
			</div>
		</>
	);
};
export default forwardRef(FooterAndButtons);
