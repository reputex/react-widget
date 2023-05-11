import * as React from "react";
import { SVGProps } from "react";
const SvgRectangleTop = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={80} height={20} fill="none" {...props}>
		<rect width={80} height={20} fill="#61626A" rx={6} />
	</svg>
);
export default SvgRectangleTop;
