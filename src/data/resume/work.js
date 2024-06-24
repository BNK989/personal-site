/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'UB Nanosatellite Program',
    position: 'Co-founder, Program Manager',
    url: 'https://ubnl.space/',
    startDate: '2010-10-01',
    endDate: '2012-06-01',
    highlights: [
      'Coauthored grant to build a multi-spectral imaging satellite as part of the AFRL University Nanosatellite Program.',
      'Lead a team of 60 students through satellite development life cycle. Served as a technical expert, acquired intimate working knowledge of satellite subsystems.  Solicited funding through NASA, AFOSR, and several corporate sponsors.',
    ],
  },
  {
    name: 'Adita Jewelry',
    position: 'Product Manager & Sites Development',
    url: 'https://aditagold.co.il',
    startDate: '2023-02-01',
    endDate: '2023-12-31',
    summary: 'Build a custom user UI to add product customization (self-taught). Unified 3 sites (WooCommerce & Shopify) into a unified system, improving operational efficiency. Managed marketing events and analysis, boosting distribution by 15%. Oversaw multiple brands: local men and women, and a global US-focused site.',
    highlights: [
      'Built a custom user UI for product customization.',
      'Unified 3 sites (WooCommerce & Shopify) into a single system.',
      'Boosted distribution by 15% through marketing events and analysis.',
      'Oversaw multiple brands, including local and global sites.',
    ],
  },
  {
    name: 'Edikted Fashion',
    position: 'E-commerce Site Manager',
    url: 'https://edikted.com',
    startDate: '2021-08-01',
    endDate: '2023-01-31',
    summary: 'Managing Theme updates and version developments. Site development including cross-sale items component and product page upgrades. B2B Partners communications and integration - supported Nordstrom integrations. Inventory and distribution center communications - reduced US delivery time by avg 3 days.',
    highlights: [
      'Managed theme updates and version developments.',
      'Developed site features including cross-sale items component and product page upgrades.',
      'Supported B2B partners communications and integration, including Nordstrom.',
      'Reduced US delivery time by an average of 3 days through improved inventory and distribution center communications.',
    ],
  },
  {
    name: 'Goodlife',
    position: 'E-commerce Product Manager',
    url: 'https://goodlife.co.il',
    startDate: '2020-03-01',
    endDate: '2023-01-30',
    summary: 'Managing brand launch - coordinating with both physical and digital campaigns. Technical Magento 2.0 site setup, heading the theme development plus all connected assets. Process building and optimizations - initializing product management and processes.',
    highlights: [
      'Set up Magento 2.0 site, including theme development and connected assets.',
      'Initialized product management and process optimizations.',
      'Coordinated brand launch with physical and digital campaigns.',
    ],
  },
  {
    name: 'ALM Appliances',
    position: 'E-commerce Site Manager',
    url: 'https://ubnl.space/',
    startDate: '2018-05-01',
    endDate: '2023-01-01',
    summary: 'Products page management, competitors inspections, and introduction to Magento 2.0. Later on site management, theme updates, campaign handling, and APIs with internal systems.',
    highlights: [
      'Managed product pages and conducted competitor inspections.',
      'Introduced Magento 2.0 to the site.',
      'Handled site management, theme updates, campaigns, and APIs with internal systems.',
    ],
  },
];

export default work;
