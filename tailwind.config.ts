import type { Config } from 'tailwindcss';


const BaseColors = {
  white: '#E8E8F8', // trắng pha tím nhạt, dịu hơn trắng tinh

  red100: '#4B1A1D',
  red200: '#6E2529',
  red300: '#932D32',
  red400: '#BF3A3F',
  red500: '#E25056',
  red600: '#FF6B72',

  violet100: '#1B163D',
  violet200: '#2C2375',
  violet300: '#3F32B0',
  violet400: '#5A45D3',
  violet500: '#7A64F0',
  violet600: '#9B8BFF',

  green100: '#0B3D3A',
  green200: '#166656',
  green300: '#1D8B75',
  green400: '#25B094',
  green500: '#37E4B5',
  green600: '#5FFFF1',

  yellow100: '#4A4530',
  yellow200: '#6E683E',
  yellow300: '#9C934F',
  yellow400: '#CFC85E',
  yellow500: '#F5EA72',
  yellow600: '#FFF996',

  orange100: '#3E2D1B',
  orange200: '#644625',
  orange300: '#926433',
  orange400: '#C79A4F',
  orange500: '#FFCC66',
  orange600: '#FFE799',

  blue100: '#0A1C44',
  blue200: '#132B70',
  blue300: '#1B40A1',
  blue400: '#2B5BCD',
  blue500: '#3D75F5',
  blue600: '#5B94FF',

  brand100: '#0F233F',
  brand200: '#1E3A6D',
  brand300: '#2C529A',
  brand400: '#3B70C6',
  brand500: '#4A8EFD',
  brand600: '#5AA9FF',
  brand700: '#72BFFF',

  gray50: '#12121E',
  gray100: '#1B1B2F',
  gray150: '#22223B',
  gray200: '#2E2E4D',
  gray300: '#464660',
  gray400: '#5F5F80',
  gray500: '#8B8BAA',
  gray600: '#B2B2CC',
  gray700: '#D3D3E5',
};

const colorsConfig = {
  transparent: 'rgba(0,0,0,0)',
  circleButtonBackground: '#1B1B2F', // nền button tối tím than
  circleButtonColor: '#72BFFF', // màu sáng neon

  bgOnboard: '#12121E',
  bgProgressInActive: '#22223B',
  bgVerifyCode: '#1E3A6D',
  bgOtherContact: '#E25056',

  borderNeutralDark: BaseColors.gray300,
  borderNeutralLight: BaseColors.gray50,
  borderSoftNeutral: BaseColors.gray150,
  borderNeutralDisable: BaseColors.gray200,
  borderPrimary: BaseColors.brand500,
  borderDanger: BaseColors.red500,

  fgBase: BaseColors.gray700,
  fgWarning: BaseColors.orange500,
  fgInProgress: BaseColors.blue500,
  fgTenant: BaseColors.yellow500,
  fgSuccess: BaseColors.green500,
  fgDanger: BaseColors.red500,
  fgPrimary: BaseColors.brand500,
  fgSupplier: BaseColors.violet500,
  fgHyperlink: '#72BFFF',

  fgNeutralDisable: BaseColors.gray400,
  fgNeutralSubtle: BaseColors.gray500,
  fgNeutralNormal: BaseColors.gray600,
  fgNeutralEmphasis: BaseColors.gray700,
  fgNeutralHighEmphasis: BaseColors.white,

  bgBase: BaseColors.gray50,

  bgWarningTonalDefault: BaseColors.orange200,
  bgWarningTonalHover: BaseColors.orange300,
  bgWarningTonalFocus: BaseColors.orange400,

  bgWarningSolidDefault: BaseColors.orange500,
  bgWarningSolidHover: BaseColors.orange600,
  bgWarningSolidFocus: BaseColors.orange100,

  bgSuccessTonalDefault: BaseColors.green200,
  bgSuccessTonalHover: BaseColors.green300,
  bgSuccessTonalFocus: BaseColors.green400,

  bgSuccessSolidDefault: BaseColors.green500,
  bgSuccessSolidHover: BaseColors.green600,
  bgSuccessSolidFocus: BaseColors.green100,

  bgDangerTonalDefault: BaseColors.red200,
  bgDangerTonalHover: BaseColors.red300,
  bgDangerTonalFocus: BaseColors.red400,

  bgDangerSolidDefault: BaseColors.red500,
  bgDangerSolidHover: BaseColors.red600,
  bgDangerSolidFocus: BaseColors.red100,

  bgPrimaryTonalDefault: BaseColors.brand200,
  bgPrimaryTonalHover: BaseColors.brand300,
  bgPrimaryTonalFocus: BaseColors.brand400,

  bgPrimarySolidDefault: BaseColors.brand500,
  bgPrimarySolidHover: BaseColors.brand600,
  bgPrimarySolidFocus: BaseColors.brand100,

  bgPrimaryHighContrast: BaseColors.brand700,

  bgPrimaryDisable: BaseColors.brand300,

  bgNeutralTonalDefault: BaseColors.gray100,
  bgNeutralTonalHover: BaseColors.gray150,
  bgNeutralSkeleton: BaseColors.gray200,
  bgNeutralTonalFocus: BaseColors.gray300,
  bgNeutralTonalDisable: BaseColors.gray400,
  bgNeutralDisable: BaseColors.gray200,
  bgNeutralTonalSkeleton: BaseColors.gray150,
  bgNeutralSolidDefault: BaseColors.gray100,

  bgOverlayDark: 'rgba(18,18,30, 0.9)', // overlay tối sâu, màu tím than
  bgOverlayDarkish: 'rgba(18,18,30, 0.75)',
  bgOverlayLight: 'rgba(18,18,30, 0.4)',
  bgOverlaySemiTransparent: 'rgba(18,18,30, 0.6)',

  bgInProgressTonalDefault: BaseColors.blue200,
  bgInProgressTonalFocus: BaseColors.blue300,

  shadowNeutral: 'rgba(0,0,0,0.8)',
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
       keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        neonFlicker: {
          "0%, 19%, 21%, 23%, 100%": { opacity: "1", textShadow: "0 0 8px rgba(255,255,255,0.9), 0 0 20px rgba(127,0,255,0.7)" },
          "20%, 22%": { opacity: ".6", textShadow: "0 0 4px rgba(255,255,255,0.6)" }
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
          "100%": { transform: "translateY(0px)" }
        }
      },
      animation: {
        shimmer: "shimmer 1.8s linear infinite",
        neonFlicker: "neonFlicker 3.5s ease-in-out infinite",
        float: "float 4s ease-in-out infinite"
      },
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
