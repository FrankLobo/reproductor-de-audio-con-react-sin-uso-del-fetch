import React, { useState, useRef } from "react";
import { props } from "prop-types";
import { FaPlay } from "react-icons/fa";
import { IoPlaySkipForward } from "react-icons/io5";
import { IoPlaySkipBack } from "react-icons/io5";
import { CgPlayPauseO } from "react-icons/cg";
export const FooterAndButtons = () => {
	return (
		<>
			<div className="footer">
				<button className="icon-skip-back">
					<IoPlaySkipBack />
				</button>
				<button
					className="icon-play"
					// onClick={props.setIsPlaying(!props.setIsPlaying())}
				>
					{/* {props.setIsPlaying ? <CgPlayPauseO /> : <FaPlay />} */}
				</button>
				<button className="icon-skip-foward">
					<IoPlaySkipForward />
				</button>
			</div>
		</>
	);
};
{
	/* <button className="icon-paused">
					<CgPlayPauseO />
				</button> */
}

// {/* <button
// 	className="icon-play"
// 	onClick={() => props.setPlaying(!props.playing)}>
// 	<FaPlay />
// </button> */}
