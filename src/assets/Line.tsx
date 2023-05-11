import * as React from "react";
import { SVGProps } from "react";
const SvgLine = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={248} height={2} fill="none" {...props}>
		<path stroke={props.color} strokeWidth={1.057} d="M0 1.472h247.306" opacity={0.2} />
	</svg>
);
export default SvgLine;
