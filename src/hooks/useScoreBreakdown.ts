import scoreBreakdown, { ScoreBreakdown } from "../api/scoreBreakdown";
import { useEffect, useState } from "react";

const useScoreBreakdown = (
	address: string,
	enableFlag: boolean,
	apiAccessKey: string,
	apiSecret: string
): {
	dataScoreBreakDown?: ScoreBreakdown;
	statusScoreBreakDown: "error" | "success" | "loading";
} => {
	const [dataScoreBreakDown, setDataScoreBreakDown] = useState<ScoreBreakdown>();
	const [statusScoreBreakDown, setStatusScoreBreakDown] = useState<
		"error" | "success" | "loading"
	>("loading");
	useEffect(() => {
		scoreBreakdown(address, apiAccessKey, apiSecret)
			.then((resp) => {
				setDataScoreBreakDown(resp);
				setStatusScoreBreakDown("success");
			})
			.catch((_) => {
				setStatusScoreBreakDown("error");
			});
	}, [address, enableFlag]);

	return { dataScoreBreakDown, statusScoreBreakDown };
};

export default useScoreBreakdown;
