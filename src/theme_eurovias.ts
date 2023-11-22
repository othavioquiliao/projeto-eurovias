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
		'--theme-rounded-base': '6px',
		'--theme-rounded-container': '2px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '255 255 255',
		'--on-success': '255 255 255',
		'--on-warning': '255 255 255',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #F6D32D
		'--color-primary-50': '254 248 224', // #fef8e0
		'--color-primary-100': '253 246 213', // #fdf6d5
		'--color-primary-200': '253 244 203', // #fdf4cb
		'--color-primary-300': '251 237 171', // #fbedab
		'--color-primary-400': '249 224 108', // #f9e06c
		'--color-primary-500': '246 211 45', // #F6D32D
		'--color-primary-600': '221 190 41', // #ddbe29
		'--color-primary-700': '185 158 34', // #b99e22
		'--color-primary-800': '148 127 27', // #947f1b
		'--color-primary-900': '121 103 22', // #796716
		// secondary | #5e5c64
		'--color-secondary-50': '231 231 232', // #e7e7e8
		'--color-secondary-100': '223 222 224', // #dfdee0
		'--color-secondary-200': '215 214 216', // #d7d6d8
		'--color-secondary-300': '191 190 193', // #bfbec1
		'--color-secondary-400': '142 141 147', // #8e8d93
		'--color-secondary-500': '94 92 100', // #5e5c64
		'--color-secondary-600': '85 83 90', // #55535a
		'--color-secondary-700': '71 69 75', // #47454b
		'--color-secondary-800': '56 55 60', // #38373c
		'--color-secondary-900': '46 45 49', // #2e2d31
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
		// error | #a51d2d
		'--color-error-50': '242 221 224', // #f2dde0
		'--color-error-100': '237 210 213', // #edd2d5
		'--color-error-200': '233 199 203', // #e9c7cb
		'--color-error-300': '219 165 171', // #dba5ab
		'--color-error-400': '192 97 108', // #c0616c
		'--color-error-500': '165 29 45', // #a51d2d
		'--color-error-600': '149 26 41', // #951a29
		'--color-error-700': '124 22 34', // #7c1622
		'--color-error-800': '99 17 27', // #63111b
		'--color-error-900': '81 14 22', // #510e16
		// surface | #484848
		'--color-surface-50': '228 228 228', // #e4e4e4
		'--color-surface-100': '218 218 218', // #dadada
		'--color-surface-200': '209 209 209', // #d1d1d1
		'--color-surface-300': '182 182 182', // #b6b6b6
		'--color-surface-400': '127 127 127', // #7f7f7f
		'--color-surface-500': '72 72 72', // #484848
		'--color-surface-600': '65 65 65', // #414141
		'--color-surface-700': '54 54 54', // #363636
		'--color-surface-800': '43 43 43', // #2b2b2b
		'--color-surface-900': '35 35 35' // #232323
	}
};
