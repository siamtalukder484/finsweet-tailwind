tailwind.config = {
    theme: {
      extend: {
        screens: {
          'xs': '400px',
          'sm': '576px',
          'md': '768px',
          'lg': '992px',
          'xl': '1200px',
          '2xl': '1400px',
          '3xl': '1600px',
        },
        colors: {
          primary: '#FFD2A4',
          navbg: '#0D0D0D',
          navbtn: '#1C1D28',
          subheading: '#161722',
          serviceitembg: '#FFF5EB',
          watchbg: '#F5F2F0',
        },
        maxWidth: {
            'container': '1280px',
        },
        fontFamily: {
            robotocondenced: "Roboto Condensed, sans-serif",
        },
        backgroundImage: {
          'banner': "url('images/banner.jpg')",
          overlay: 'linear-gradient(40deg, #060606 16.68%, rgba(0, 0, 0, 0.02) 96.44%);',
          textgradiant: "linear-gradient(110deg, #A54E2B -53.83%, #DC9853 62.61%);",
          visitbg: "url('./images/visit.jpg')"
        },
        fontSize: {
          bannerheading: '64px',
        }
      }
    }
  }
