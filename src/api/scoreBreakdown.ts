import axios from "axios";

export interface ScoreBreakdown {
	success: boolean;
	data: {
		address: string;
		reputeXScore: number;
		customScore: number;
		blacklisted: boolean;
		lastUpdated: string;
	};
	message: string;
	error: string;
}

export const BASE_URL = "https://api.reputex.io/v1";

const scoreBreakdown = async (
	address: string,
	apiAccessKey: string,
	apiSecret: string
): Promise<ScoreBreakdown> => {
	const response = await axios.get(
		`${BASE_URL}/score/breakdown/${address}?compactBreakdown=true`,
		{
			headers: {
				"x-api-key": apiAccessKey,
				"x-api-secret": apiSecret,
				Accept: "application/json",
			},
		}
	);
	const { data } = response;
	return data;
};

export default scoreBreakdown;
