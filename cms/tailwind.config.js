/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#3BB77E',
        secondaryColor: '#FDC040',
        blueColor: '#2F57EF',
        greenColor: '#3BB77E',
        culturedColor: '#F5F7F9',
        lightSliverColor: '#D7D8D9',
        orangeColor: '#FF8036',
        orangeOpacityColor: '#FF9F6B',
        linenColor: '#FFEDE4',
        headingColor: '#192335',
        bodyColor: '#6B7385',
        borderColor: '#E6E3F1',
        borderPrimaryColor: '#A2D2C9',
        headingOpacityColor: '#19233550',
        whiteColor: '#FFFFFF',
        grayLightColor: '#F6F6F6',
        blackOpacityColor: 'rgba(0, 0, 0, 0.04)',
        primaryOpacityColor: '#DEF9EC',
        secondaryOpacityColor: 'rgba(253, 192, 64, 0.2)',
        dangerColor: '#FF0003',
        greenOpacityColor: '#DEF9EC',
        pinkOpacityColor: '#FDE0E9',
        peachCreamColor: '#FEEFEA',
        blushApricotColor: '#FFF3EB',
        softPinkColor: '#FFF3FF',
        frostedGreenColor: '#F2FCE4',
        paleLemonColor: '#FFFCEB',
        yellowColor: '#FDC040',
        mintGreenColor: '#BCE3C9',
        pinkColor: '#F74B81',
        darkPrimaryColor: '#29A56C',
        badgeColor: '#F4F6FA',
        successColor: '#3EB75E',
        dangerColor: '#FF0003',
        darkDangerColor: '#CC0003',
        warningColor: '#FF8F3C',
        successOpacityColor: '#DEF9EC',
        dangerOpacityColor: '#FF000310',
        warningOpacityColor: '#FF8F3C10',
        bgDarkPrimaryColor: '#222736',
        bgDarkSecondaryColor: '#2F3446',
        bgDarkCardColor: '#2a3042',
        bgActiveColor: '#383E50',
        bgLightPrimaryColor: '#f8f9fa',
        bgSidebarActiveColor: 'rgba(59, 183, 126, 0.2)'
      },
      backgroundColor: {
        overlayColor: 'rgba(0, 0, 0, .8)',
        bgModalColor: '#0006'
      },
      borderColor: {
        borderDarkColor: '#383e50'
      },
      boxShadow: {
        shadow01: '0px 6px 34px rgba(215, 216, 222, 0.4)',
        shadow02: '0 16px 16px 0 rgba(129,104,145,0.06)',
        shadow03: '0 14px 48px 0 rgba(215,216,222,0.44)',
        shadow04: '0 12px 22px 0 rgba(214, 191, 242, 0.28)',
        shadow05: '0px 15px 30px -2px rgba(0,0,0,0.1)',
        shadow06: '5px 5px 15px rgba(0, 0, 0, 0.05)',
        shadow07: '5px 5px 15px rgba(0, 0, 0, 0.15)'
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            '--tw-prose-bullets': theme('colors.headingColor'),
            ul: {
              li: {
                margin: '0px'
              }
            },
            li: {
              p: {
                margin: '0px'
              }
            },
            p: {
              lineHeight: '1.5',
              margin: '0px',
              paddingBottom: '8px'
            },
            h1: {
              color: theme('colors.headingColor'),
              marginTop: '0px',
              marginBottom: '16px'
            },
            h2: {
              color: theme('colors.headingColor'),
              marginTop: '0px',
              marginBottom: '16px'
            },
            strong: {
              fontWeight: '800',
              color: theme('colors.headingColor')
            }
          }
        }
      })
    }
  },
  daisyui: {
    themes: []
  },
  plugins: [require('daisyui'), require('tailwindcss-primeui'), require('@tailwindcss/typography')]
}
