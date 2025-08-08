import type { Config } from 'tailwindcss';


const BaseColors = {
  white: '#FFFFFF',

  red100: '#FFE1E7',
  red200: '#FFC8D6',
  red300: '#FF9CB3',
  red400: '#FF2E68',
  red500: '#E1024F',
  red600: '#D1003F',

  violet100: '#E5E9FA',
  violet200: '#CFD5F6',
  violet300: '#9398E6',
  violet400: '#7977DB',
  violet500: '#695ECD',
  violet600: '#5A4EB4',

  green100: '#E0F8E9',
  green200: '#C3EFD4',
  green300: '#95E0B3',
  green400: '#5FC98A',
  green500: '#40C174',
  green600: '#30A65F',

  yellow100: '#FFF9EB',
  yellow200: '#FFEEC6',
  yellow300: '#FFDB88',
  yellow400: '#FFCC67',
  yellow500: '#FFBF41',
  yellow600: '#F8B83A',

  orange100: '#FFEDD5',
  orange200: '#FED8AA',
  orange300: '#FEBB73',
  orange400: '#FC943B',
  orange500: '#FA781A',
  orange600: '#EB5A0B',

  blue100: '#DFEAFA',
  blue200: '#C6DAF7',
  blue300: '#9FC2F1',
  blue400: '#71A1E9',
  blue500: '#4A7CE0',
  blue600: '#3B64D5',

  brand100: '#E1F8F5',
  brand200: '#D1F0ED',
  brand300: '#B9E8E4',
  brand400: '#33BBB2',
  brand500: '#00AA9F',
  brand600: '#0AA095',
  brand700: '#38DBD0',

  gray50: '#F2F5F7',
  gray100: '#E7EAED',
  gray150: '#E6E6E6',
  gray200: '#D8DCDF',
  gray300: '#B9BEC0',
  gray400: '#999999',
  gray500: '#646464',
  gray600: '#3D3D3D',
  gray700: '#202020',
};

const colorsConfig = {
  transparent: 'rgba(0,0,0,0)',
  circleButtonBackground: '#E1E1EF',
  circleButtonColor: '#44427D',
  bgOnboard: '#E8F3F1',
  bgProgressInActive: '#ECECEC',
  bgVerifyCode: '#EFF9F9',
  bgOtherContact: '#EF3F47',
  /**
   * Semantic Colors
   */
  /* border color */
  borderNeutralDark: BaseColors.gray200,
  borderNeutralLight: BaseColors.gray50,
  borderSoftNeutral: BaseColors.gray100,
  borderNeutralDisable: BaseColors.gray300,
  borderPrimary: BaseColors.brand500,
  borderDanger: BaseColors.red500,

  /* foreground color: used for text, icon */
  fgBase: BaseColors.white,
  fgWarning: BaseColors.orange500,
  fgInProgress: BaseColors.blue500,
  fgTenant: BaseColors.yellow500,
  fgSuccess: BaseColors.green500,
  fgDanger: BaseColors.red500,
  fgPrimary: BaseColors.brand500,
  fgSupplier: BaseColors.violet500,
  fgHyperlink: '#0D42FF',

  fgNeutralDisable: BaseColors.gray300,
  fgNeutralSubtle: BaseColors.gray400,
  fgNeutralNormal: BaseColors.gray500,
  fgNeutralEmphasis: BaseColors.gray600,
  fgNeutralHighEmphasis: BaseColors.gray700,

  /* background color: specially for link button */

  bgBase: BaseColors.white,

  /* warning */
  bgWarningTonalDefault: BaseColors.orange100,
  bgWarningTonalHover: BaseColors.orange200,
  bgWarningTonalFocus: BaseColors.orange300,

  bgWarningSolidDefault: BaseColors.orange500,
  bgWarningSolidHover: BaseColors.orange400,
  bgWarningSolidFocus: BaseColors.orange600,


  /* success */
  bgSuccessTonalDefault: BaseColors.green100,
  bgSuccessTonalHover: BaseColors.green200,
  bgSuccessTonalFocus: BaseColors.green300,

  bgSuccessSolidDefault: BaseColors.green500,
  bgSuccessSolidHover: BaseColors.green400,
  bgSuccessSolidFocus: BaseColors.green600,

  /* danger */
  bgDangerTonalDefault: BaseColors.red100,
  bgDangerTonalHover: BaseColors.red200,
  bgDangerTonalFocus: BaseColors.red300,

  bgDangerSolidDefault: BaseColors.red500,
  bgDangerSolidHover: BaseColors.red400,
  bgDangerSolidFocus: BaseColors.red600,

  /* primary */
  bgPrimaryTonalDefault: BaseColors.brand100,
  bgPrimaryTonalHover: BaseColors.brand200,
  bgPrimaryTonalFocus: BaseColors.brand300,

  bgPrimarySolidDefault: BaseColors.brand500,
  bgPrimarySolidHover: BaseColors.brand400,
  bgPrimarySolidFocus: BaseColors.brand600,

  bgPrimaryHighContrast: BaseColors.brand700,

  bgPrimaryDisable: BaseColors.brand300,

  /* neutral */
  bgNeutralTonalDefault: BaseColors.gray50,
  bgNeutralTonalHover: BaseColors.gray100,
  bgNeutralSkeleton: BaseColors.gray150,
  bgNeutralTonalFocus: BaseColors.gray200,
  bgNeutralTonalDisable: BaseColors.gray400,
  bgNeutralDisable: BaseColors.gray200,
  bgNeutralTonalSkeleton: BaseColors.gray100,
  bgNeutralSolidDefault: BaseColors.gray100,

  /* overlay */
  bgOverlayDark: 'rgba(0, 0, 0, 0.6)',
  bgOverlayDarkish: 'rgba(0, 0, 0, 0.7)',
  bgOverlayLight: 'rgba(0, 0, 0, 0.2)',
  bgOverlaySemiTransparent: 'rgba(0, 0, 0, 0.40)',

  bgInProgressTonalDefault: BaseColors.blue100,
  bgInProgressTonalFocus: BaseColors.blue300,

  shadowNeutral: '#00000080',
};

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/common/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/core/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        ...BaseColors,
        ...colorsConfig,
        default: {
          primary: '#3498db',
          'primary-5': '#e6f0fb',
          'primary-10': '#cce2f7',
          'primary-20': '#99c5ef',
          'primary-30': '#66a8e7',
          'primary-40': '#339be0',
          'primary-50': '#007bff',
          'primary-60': '#006ed1',
          'primary-70': '#0058ac',
          'primary-80': '#004184',
          'primary-90': '#002b5d',
          'primary-100': '#001437',
          secondary: '#6c757d',
          'secondary-10': '#f2f2f2',
          'secondary-20': '#e6e6e6',
          'secondary-30': '#bfbfbf',
          'secondary-40': '#999999',
          'secondary-50': '#6c757d',
          'secondary-60': '#4d5560',
          'secondary-70': '#33383d',
          'secondary-80': '#1a1e21',
          'secondary-90': '#000000',
          'secondary-100': '#000000',
          neutral: '#6c757d',
          'neutral-10': '#f2f2f2',
          'neutral-20': '#e6e6e6',
          'neutral-30': '#bfbfbf',
          'neutral-40': '#999999',
          'neutral-50': '#6c757d',
          'neutral-60': '#4d5560',
          'neutral-70': '#33383d',
          'neutral-80': '#1a1e21',
          'neutral-90': '#000000',
          'neutral-100': '#000000',
          success: '#28a745',
          'success-10': '#e6f5e2',
          'success-20': '#ccebcc',
          'success-30': '#99d699',
          'success-40': '#66c266',
          'success-50': '#28a745',
          'success-60': '#1f8f3b',
          'success-70': '#196c2e',
          'success-80': '#114921',
          'success-90': '#0a260f',
          'success-100': '#051205',
          warning: '#ffc107',
          'warning-10': '#fff8e5',
          'warning-20': '#ffedcc',
          'warning-30': '#ffd699',
          'warning-40': '#ffcc66',
          'warning-50': '#ffc107',
          'warning-60': '#e6a100',
          'warning-70': '#bf8c00',
          'warning-80': '#996600',
          'warning-90': '#735000',
          'warning-100': '#4d3300',
          info: '#17a2b8',
          'info-10': '#e5f7fa',
          'info-20': '#ccf0f5',
          'info-30': '#99e0eb',
          'info-40': '#66d0e1',
          'info-50': '#17a2b8',
          'info-60': '#148ea3',
          'info-70': '#107280',
          'info-80': '#0c5966',
          'info-90': '#083d4d',
          'info-100': '#041f26',
          error: '#dc3545',
          'error-10': '#f7e6e9',
          'error-20': '#f0ccd3',
          'error-30': '#e199a7',
          'error-40': '#d2667b',
          'error-50': '#dc3545',
          'error-60': '#c62a3e',
          'error-70': '#a62334',
          'error-80': '#821c29',
          'error-90': '#5c141e',
          'error-100': '#330a10',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
