import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';
export const HelpIcon = (props: SvgProps) => (
	<Svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none" {...props}>
		<Rect width={29} height={29} x={0.5} y={0.5} fill="#fff" rx={14.5} />
		<Path
			fill="#1B1B1B"
			d="M15 7.5c-4.136 0-7.5 3.364-7.5 7.5v3.107c0 .768.673 1.393 1.5 1.393h.75a.75.75 0 0 0 .75-.75v-3.857a.75.75 0 0 0-.75-.75h-.681C9.486 11.24 11.983 9 15 9s5.514 2.24 5.931 5.143h-.681a.75.75 0 0 0-.75.75V19.5c0 .827-.673 1.5-1.5 1.5h-1.5v-.75h-3v2.25H18c1.654 0 3-1.346 3-3 .827 0 1.5-.625 1.5-1.393V15c0-4.136-3.364-7.5-7.5-7.5Z"
		/>
		<Rect width={29} height={29} x={0.5} y={0.5} stroke="#fff" rx={14.5} />
	</Svg>
);
