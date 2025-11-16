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
    name: 'Yad2 Recommerce',
    position: 'Shopify Tech Product Manager',
    url: 'https://yad2.co.il/market/',
    startDate: '2023-09-31',
    endDate: '2025-12-01',
    summary: 'Developed a C2C experience with AI-aided taxonomy system for product uploading and searching, leading to a 10K monthly revenue increase from C2C shopping and business ads.',
    highlights: [
      'Taxonomy system development - allow users to easily (AI-aided) upload and find products.',
      'End to end product strategy - C2C shopping and business ads increase revenue by ₪10K/month.',
      'Managing tickets and Documentation using Atlassian tools, Jira & Confluence.',
      'Creating custom users’ journeys to increase seekers seller engagements 7% lift in communications.',
    ],
  },
  {
    name: 'Adita Jewelry',
    position: 'Site Unification and Organization',
    url: 'https://aditagold.com',
    startDate: '2023-04-01',
    endDate: '2023-09-31',
    summary: 'Unified 3 sites (WooCommerce & Shopify) into a unified system, improving operational efficiency. Managed marketing events and analysis, boosting distribution by 15%. Oversaw multiple brands: local men and women, and a global US-focused site.',
    highlights: [
      'Built a custom user UI for product customization.',
      'Unified 3 sites (WooCommerce & Shopify) into a single system.',
      'Improved analytics and marketing events management.',
    ],
  },
  {
    name: 'Edikted Fashion',
    position: 'E-commerce Site Manager',
    url: 'https://edikted.com',
    startDate: '2022-09-01',
    endDate: '2023-03-31',
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
    startDate: '2021-03-01',
    endDate: '2022-08-30',
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
    endDate: '2021-03-01',
    summary: 'Products page management, competitors inspections, and introduction to Magento 2.0. Later on site management, theme updates, campaign handling, and APIs with internal systems.',
    highlights: [
      'Managed product pages and conducted competitor inspections.',
      'Introduced Magento 2.0 to the site.',
      'Handled site management, theme updates, campaigns, and APIs with internal systems.',
    ],
  },
];

export default work;
