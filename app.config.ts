export default defineAppConfig({
  docus: {
    title: 'PricingOps Docs',
    description: 'Build scaleable pricing plans using our no-code editor.',
    image: 'https://pricingops.ai/homepage/assets/screenshot.png',
    socials: {
      twitter: 'pricingops',
      github: 'pricingops/docs',
    },
    aside: {
      level: 0,
      exclude: []
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: []
    },
    footer: {
      iconLinks: [
        {
          href: 'https://bhanu.io',
          icon: 'IconNuxtLabs'
        }
      ]
    }
  }
})
