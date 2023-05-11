import * as React from "react";
import { SVGProps } from "react";
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
		<rect width={24} height={24} fill="#24212B" rx={12} />
		<path
			fill="#9B9797"
			d="M12 10.89 15.89 7 17 8.11 13.11 12 17 15.89 15.89 17 12 13.11 8.11 17 7 15.89 10.89 12 7 8.11 8.11 7 12 10.89Z"
		/>
	</svg>
);
export default SvgClose;
