import { defineConfig } from 'vocs'

 
export default defineConfig({
  title: 'BetrWeather',
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Example',
      link: '/example',
    },
  ],
  topNav: [ 
    { text: 'Privacy', link: '/privacy' }, 
    { text: 'License', link: '/license' }, 
    { text: 'Copyright', link: '/copyright' }, 
  ],
})
