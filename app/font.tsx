import localFont from '@next/font/local';

const euclid = localFont({
	src: [
		// MARK: Light
		{
			path: './_fonts/EuclidTriangle-Light-WebXL.woff2',
			weight: '300',
			style: 'light',
		},
		{
			path: './_fonts/EuclidTriangle-LightItalic-WebXL.woff2',
			weight: '300',
			style: 'italic',
		},
		// MARK: Regular
		{
			path: './_fonts/EuclidTriangle-Regular-WebXL.woff2',
			weight: '400',
			style: 'light',
		},
		{
			path: './_fonts/EuclidTriangle-RegularItalic-WebXL.woff2',
			weight: '400',
			style: 'italic',
		},
		// MARK: Medium
		{
			path: './_fonts/EuclidTriangle-Medium-WebXL.woff2',
			weight: '500',
			style: 'light',
		},
		{
			path: './_fonts/EuclidTriangle-MediumItalic-WebXL.woff2',
			weight: '500',
			style: 'italic',
		},
		// MARK: Semibold
		{
			path: './_fonts/EuclidTriangle-Semibold-WebXL.woff2',
			weight: '600',
			style: 'light',
		},
		{
			path: './_fonts/EuclidTriangle-SemiboldItalic-WebXL.woff2',
			weight: '600',
			style: 'italic',
		},
		// MARK: Bold
		{
			path: './_fonts/EuclidTriangle-Bold-WebXL.woff2',
			weight: '700',
			style: 'light',
		},
		{
			path: './_fonts/EuclidTriangle-BoldItalic-WebXL.woff2',
			weight: '700',
			style: 'italic',
		},
	],
});

export default euclid