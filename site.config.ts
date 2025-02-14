import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  // rootNotionPageId: 'niviki-com-t-do-t-i-ch-nh-10f5e54221eb4b059bc5b5305da949ba',
  rootNotionPageId: 'Ahihitemplate-667c6cb5914c4c0c9d3ba91c6f85c5f9',
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'DUONGDUC.COM - RESEARCH PROJECTS',
  domain: 'duongduc1811.com',
  author: 'Duong Duc',

  // open graph metadata (optional)
  description: 'As a place for Duong Duc to share his research projects',

  // social usernames (optional)
  // twitter: 'khoa_nvk',
  // github: 'transitive-bullshit',
  linkedin: 'duc-duong-451991167',
  
  //facebook: 'https://www.facebook.com/groups/nocodevietnam',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  //youtube: 'channel/UCI6GDuK41kD9T8icFp8d7Aw', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    // '/hoa-don-dien-tu-voi-blockchain-p1/': '/9dd30a7b68af4b40a8ad3d6d9cb845f0',
    // '/giai-phap-hoa-don-dien-tu-voi-blockchain-phan-2-the-mvp': '/9dd30a7b68af4b40a8ad3d6d9cb845f0',
    // '/phong-van-business-analyst-ba-ky-su-phan-1': '/60ebc3f1d53646119f703fe5d13df633'
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Blog',
      pageId: '59432e1a0cdf4effbb402701deff00a9'
    },    
    {
      title: 'NoCode VN',
      pageId: '93331fa2964045248502bd314019c917'
    },    
    {
      title: 'Khoá học',
      pageId: '8e761b9e7d1b4db1ae76bbc1e4f9aa1f'
    },    
    {
      title: 'Research',
      pageId: 'Researchs-acaf946c8c3442aca357b499f7728d5a?pvs=4'
    }
  ]
})
