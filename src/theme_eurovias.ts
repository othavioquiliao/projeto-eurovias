// You can also use the generator at https://skeleton.dev/docs/generator to create these values for you
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';
export const theme_eurovias: CustomThemeConfig = {
	name: 'theme_eurovias',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '8px',
		'--theme-rounded-container': '2px',
		'--theme-border-base': '0px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '255 255 255',
		'--on-success': '255 255 255',
		'--on-warning': '255 255 255',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #ffbf00
		'--color-primary-50': '255 245 217', // #fff5d9
		'--color-primary-100': '255 242 204', // #fff2cc
		'--color-primary-200': '255 239 191', // #ffefbf
		'--color-primary-300': '255 229 153', // #ffe599
		'--color-primary-400': '255 210 77', // #ffd24d
		'--color-primary-500': '255 191 0', // #ffbf00
		'--color-primary-600': '230 172 0', // #e6ac00
		'--color-primary-700': '191 143 0', // #bf8f00
		'--color-primary-800': '153 115 0', // #997300
		'--color-primary-900': '125 94 0', // #7d5e00
		// secondary | #484848
		'--color-secondary-50': '228 228 228', // #e4e4e4
		'--color-secondary-100': '218 218 218', // #dadada
		'--color-secondary-200': '209 209 209', // #d1d1d1
		'--color-secondary-300': '182 182 182', // #b6b6b6
		'--color-secondary-400': '127 127 127', // #7f7f7f
		'--color-secondary-500': '72 72 72', // #484848
		'--color-secondary-600': '65 65 65', // #414141
		'--color-secondary-700': '54 54 54', // #363636
		'--color-secondary-800': '43 43 43', // #2b2b2b
		'--color-secondary-900': '35 35 35', // #232323
		// tertiary | #242424
		'--color-tertiary-50': '222 222 222', // #dedede
		'--color-tertiary-100': '211 211 211', // #d3d3d3
		'--color-tertiary-200': '200 200 200', // #c8c8c8
		'--color-tertiary-300': '167 167 167', // #a7a7a7
		'--color-tertiary-400': '102 102 102', // #666666
		'--color-tertiary-500': '36 36 36', // #242424
		'--color-tertiary-600': '32 32 32', // #202020
		'--color-tertiary-700': '27 27 27', // #1b1b1b
		'--color-tertiary-800': '22 22 22', // #161616
		'--color-tertiary-900': '18 18 18', // #121212
		// success | #0c7b05
		'--color-success-50': '219 235 218', // #dbebda
		'--color-success-100': '206 229 205', // #cee5cd
		'--color-success-200': '194 222 193', // #c2dec1
		'--color-success-300': '158 202 155', // #9eca9b
		'--color-success-400': '85 163 80', // #55a350
		'--color-success-500': '12 123 5', // #0c7b05
		'--color-success-600': '11 111 5', // #0b6f05
		'--color-success-700': '9 92 4', // #095c04
		'--color-success-800': '7 74 3', // #074a03
		'--color-success-900': '6 60 2', // #063c02
		// warning | #c64600
		'--color-warning-50': '246 227 217', // #f6e3d9
		'--color-warning-100': '244 218 204', // #f4dacc
		'--color-warning-200': '241 209 191', // #f1d1bf
		'--color-warning-300': '232 181 153', // #e8b599
		'--color-warning-400': '215 126 77', // #d77e4d
		'--color-warning-500': '198 70 0', // #c64600
		'--color-warning-600': '178 63 0', // #b23f00
		'--color-warning-700': '149 53 0', // #953500
		'--color-warning-800': '119 42 0', // #772a00
		'--color-warning-900': '97 34 0', // #612200
		// error | #800000
		'--color-error-50': '236 217 217', // #ecd9d9
		'--color-error-100': '230 204 204', // #e6cccc
		'--color-error-200': '223 191 191', // #dfbfbf
		'--color-error-300': '204 153 153', // #cc9999
		'--color-error-400': '166 77 77', // #a64d4d
		'--color-error-500': '128 0 0', // #800000
		'--color-error-600': '115 0 0', // #730000
		'--color-error-700': '96 0 0', // #600000
		'--color-error-800': '77 0 0', // #4d0000
		'--color-error-900': '63 0 0', // #3f0000
		// surface | #363636
		'--color-surface-50': '225 225 225', // #e1e1e1
		'--color-surface-100': '215 215 215', // #d7d7d7
		'--color-surface-200': '205 205 205', // #cdcdcd
		'--color-surface-300': '175 175 175', // #afafaf
		'--color-surface-400': '114 114 114', // #727272
		'--color-surface-500': '54 54 54', // #363636
		'--color-surface-600': '49 49 49', // #313131
		'--color-surface-700': '41 41 41', // #292929
		'--color-surface-800': '32 32 32', // #202020
		'--color-surface-900': '26 26 26' // #1a1a1a
	}
};
