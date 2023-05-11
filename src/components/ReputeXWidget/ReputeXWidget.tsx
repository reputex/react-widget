import React from "react";
import ParentWidget from "../ParentWidget/ParentWidget";

const ReputeXWidget = ({
	userAddress,
	apiAccessKey,
	apiSecret,
	visibility,
	mode,
}: {
	userAddress: string;
	apiAccessKey: string;
	apiSecret: string;
	visibility: boolean;
	mode: boolean;
}) => {
	return (
		<div className="text-left">
			<ParentWidget
				userAddress={userAddress}
				apiAccessKey={apiAccessKey}
				apiSecret={apiSecret}
				visibility={visibility}
				mode={mode}
			/>
		</div>
	);
};

export default ReputeXWidget;
