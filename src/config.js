module.exports = {
  siteTitle: 'Rajat Vaidhya',
  siteDescription:
    'Rajat Vaidhya is a Web Developer, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Rajat Vaidhya, rajatvaidhya, Mern Stack Developer, web developer, javascript, jabalpur, GFG',
  siteUrl: 'https://rajatvaidhya.netlify.app/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Rajat Vaidhya',
  location: 'Jabalpur, India',
  email: 'rajatvaidhya@gmail.com',
  github: 'https://github.com/rajatvaidhya',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/rajatvaidhya',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/rajat-vaidhya-102928215/',
    },
    {
      name: 'Leetcode',
      url: 'https://leetcode.com/rajatvaidhya/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/rajat_vaidhya',
    }
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
