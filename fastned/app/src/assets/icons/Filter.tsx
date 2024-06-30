import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';
export const FilterIcon = (props: SvgProps) => (
	<Svg xmlns="http://www.w3.org/2000/svg" width={42} height={42} fill="none" {...props}>
		<Circle cx={21} cy={21} r={21} fill="#1B1B1B" />
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M19.353 26.238h-6.33"
		/>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M28.978 26.238a2.52 2.52 0 1 1-5.04 0 2.52 2.52 0 0 1 5.04 0Z"
			clipRule="evenodd"
		/>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M22.647 15.98h6.331"
		/>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M13.022 15.98a2.52 2.52 0 1 0 5.039 0 2.52 2.52 0 0 0-5.039 0Z"
			clipRule="evenodd"
		/>
	</Svg>
);
