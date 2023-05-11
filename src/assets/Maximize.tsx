import * as React from "react";
import { SVGProps } from "react";
const SvgMaximize = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="none" {...props}>
		<path
			fill="#fff"
			fillOpacity={0.64}
			d="M16.632 21.383H3.564A3.564 3.564 0 0 1 0 17.82V4.751a3.564 3.564 0 0 1 3.564-3.563h4.752a1.188 1.188 0 1 1 0 2.376H3.564A1.188 1.188 0 0 0 2.376 4.75V17.82a1.188 1.188 0 0 0 1.188 1.188h13.068a1.188 1.188 0 0 0 1.188-1.188v-4.752a1.188 1.188 0 0 1 2.376 0v4.752a3.564 3.564 0 0 1-3.564 3.564Z"
		/>
		<path
			fill="#fff"
			fillOpacity={0.64}
			d="M20.194 0h-7.127a1.188 1.188 0 1 0 0 2.376h4.264L6.283 13.412a1.187 1.187 0 0 0 0 1.687 1.187 1.187 0 0 0 1.687 0L19.006 4.051v4.265a1.188 1.188 0 1 0 2.376 0V1.188A1.188 1.188 0 0 0 20.194 0Z"
		/>
	</svg>
);
export default SvgMaximize;
