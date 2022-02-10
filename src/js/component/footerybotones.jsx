import React from "react";
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
				<button className="icon-play">
					<FaPlay />
				</button>
				{/* <button className="icon-paused">
					<CgPlayPauseO />
				</button> */}
				<button className="icon-skip-foward">
					<IoPlaySkipForward />
				</button>
			</div>
		</>
	);
};
