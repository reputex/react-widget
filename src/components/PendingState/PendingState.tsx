import React from "react";
import RectangleTop from "../../assets/RectangleTop";
import RectangleLeft from "../../assets/RectangleLeft";
import RectangleMiddle from "../../assets/RectangleMiddle";
import RectangleRight from "../../assets/RectangleRight";
import CircleRight from "../../assets/CircleRight";
import Line from "../../assets/Line";
import "../../tailwind.css";

import { motion, AnimatePresence } from "framer-motion";

const PendingState = ({ bodyMessage, mode }: { bodyMessage: string; mode: boolean }) => {
	const modeColor = mode ? "bg-[#1C1E29]" : "bg-white";
	const textColor = mode ? "text-white" : "text-black";
	const lineColor = mode ? "#fff" : "black";

	return (
		<AnimatePresence>
			<motion.div className="flex justify-center items-center h-screen">
				<motion.div className="rounded-lg bg-gradient-to-r from-[#00FFFF] via-[#8A76FF] to-[#FF00FF] w-[354px] h-[284px]">
					<motion.div
						className={`flex flex-col relative rounded-md w-[350px] h-[280px] px-4 py-3 mx-auto my-0.5 ${modeColor} ${textColor} `}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<div className="flex w-[180px] h-[55px] m-5 ml-2 rounded-[106px] bg-[#C5C5C5] text-white">
							<motion.div
								className="p-2"
								animate={{ scale: [1, 1.2, 1] }}
								transition={{
									duration: 1,
									ease: "easeInOut",
									times: [0, 0.5, 1],
									repeat: Infinity,
									repeatType: "loop",
									delay: 0.2,
								}}
							>
								<CircleRight className="" />
							</motion.div>

							<motion.div
								className="p-4"
								animate={{ scale: [1, 1.2, 1] }}
								transition={{
									duration: 1,
									ease: "easeInOut",
									times: [0, 0.5, 1],
									repeat: Infinity,
									repeatType: "loop",
									delay: 0.2,
								}}
							>
								<RectangleTop className="w-[80px]" />
							</motion.div>
						</div>

						<Line className="w-[170px] ml-4" stroke={lineColor} />

						{/* address display */}
						<div>
							<p className="whitespace-normal truncate p-5 ">{bodyMessage}</p>
						</div>

						<div className="flex ml-4">
							<motion.div
								className="p-2"
								animate={{ scale: [1, 1.2, 1] }}
								transition={{
									duration: 1,
									ease: "easeInOut",
									times: [0, 0.5, 1],
									repeat: Infinity,
									repeatType: "loop",
								}}
							>
								<RectangleLeft />
							</motion.div>

							<motion.div
								className="p-2"
								animate={{ scale: [1, 1.2, 1] }}
								transition={{
									duration: 1,
									ease: "easeInOut",
									times: [0, 0.5, 1],
									repeat: Infinity,
									repeatType: "loop",
									delay: 0.2,
								}}
							>
								<RectangleMiddle />
							</motion.div>

							<motion.div
								className="p-2"
								animate={{ scale: [1, 1.2, 1] }}
								transition={{
									duration: 1,
									ease: "easeInOut",
									times: [0, 0.5, 1],
									repeat: Infinity,
									repeatType: "loop",
									delay: 0.4,
								}}
							>
								<RectangleRight />
							</motion.div>
						</div>
					</motion.div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
};

export default PendingState;
