/**
 * PIXIU落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '/images/starter/logo/logo.svg', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '/images/starter/logo/logo-white.svg', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: 'Connect Web3 Safely, Smoothly & Stably!', // 英雄区文字
  STARTER_HERO_TITLE_2: 'Next-gen social ecosystem', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: 'Telegram Us!', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:
    'https://t.me/cloudclubchina', // 英雄区按钮
  STARTER_HERO_BUTTON_1_ICON: '/images/starter/install.svg', // 英雄区按钮1的图标，不需要则留空
  STARTER_HERO_BUTTON_2_TEXT: 'Get Started', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: '/download', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '/images/starter/install.svg', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  STARTER_HERO_PREVIEW_IMAGE: '/images/starter/hero/hero-image.png', // 产品预览图 ，默认读取public目录下图片
  STARTER_HERO_BANNER_IMAGE: '', // hero区下方的全宽图

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: '',
  STARTER_NAV_BUTTON_1_URL: '/',

  STARTER_NAV_BUTTON_2_TEXT: 'Connect Wallet',
  STARTER_NAV_BUTTON_2_URL: '/connect',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: 'Features', // 特性
  STARTER_FEATURE_TEXT_1: 'What We Can Do?', // 特性
  STARTER_FEATURE_TEXT_2:
    'A future to connect', // 特性

  STARTER_FEATURE_1_TITLE_1: 'Airdrop', // 特性1
  STARTER_FEATURE_1_TEXT_1: 'Pixiu have implemented a fair way to distribute community rewards, which motivates ordinary users to participate in community building.', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: 'Details', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: '/airdrop', // 特性1

  STARTER_FEATURE_2_TITLE_1: 'Live Space', // 特性2
  STARTER_FEATURE_2_TEXT_1: "Pixiu use various methods to expand people's horizons based on textual information, so that users can better understand and motivate each other.", // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: 'Details', // 特性2
  STARTER_FEATURE_2_BUTTON_URL: '/live_space', // 特性2

  STARTER_FEATURE_3_TITLE_1: 'Gift NFT', // 特性3
  STARTER_FEATURE_3_TEXT_1: "Pixiu have changed the way NFTs are used, which is to use a more practical approach to positively impact user interactions with tokens, and to guide users to participate in the token creation process through co creation mechanisms.", // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: 'Details', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: '/gift_nft', // 特性3

  STARTER_FEATURE_4_TITLE_1: 'Pixiu-Eco', // 特性4
  STARTER_FEATURE_4_TEXT_1: "We have created an API and used it to involve more users in content creation. These interfaces cover various aspects such as chatbots and setting-up robots.", // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: 'Details', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: '/pixiu-eco', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: 'What We Will Be?',
  STARTER_ABOUT_TEXT:
    'Learn more about the future plans, in-app economy and Pixiu’s vision for more ethical social media. Take a peek at our plan!',
  STARTER_ABOUT_BUTTON_TEXT: 'View Whitebook',
  STARTER_ABOUT_BUTTON_URL: 'https://docs.pixiu.us/',
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: '7000+',
  STARTER_ABOUT_TIPS_2: 'Daily Active Users',
  STARTER_ABOUT_TIPS_3: 'Join with Creative Communities',

  // 首页价格区块
  STARTER_PRICING_ENABLE: false, // 价格区块开关
  STARTER_PRICING_TITLE: '价格表',
  STARTER_PRICING_TEXT_1: '很棒的定价计划',
  STARTER_PRICING_TEXT_2:
    '我们制定了灵活的付费模式，您可以按需选择。（NotionNext免费开源，这里仅演示产品订阅付费功能，请勿下单购买！）',

  STARTER_PRICING_1_TITLE: '入门版',
  STARTER_PRICING_1_PRICE: '19.9',
  STARTER_PRICING_1_PRICE_CURRENCY: '$',
  STARTER_PRICING_1_PRICE_PERIOD: '每月',
  STARTER_PRICING_1_HEADER: '功能点',
  STARTER_PRICING_1_FEATURES: '所有的主题,免费更新,帮助手册', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_1_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/c1a38a65-362e-44c5-8065-733fee39eb54',

  STARTER_PRICING_2_TAG: '推荐',
  STARTER_PRICING_2_TITLE: '基础版',
  STARTER_PRICING_2_PRICE: '39.9',
  STARTER_PRICING_2_PRICE_CURRENCY: '$',
  STARTER_PRICING_2_PRICE_PERIOD: '每月',
  STARTER_PRICING_2_HEADER: '功能点',
  STARTER_PRICING_2_FEATURES: '包含入门版,项目源码,内部社群,技术咨询,SEO优化', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_2_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/590ad70a-c3b7-4caf-94ec-9ca27bde06d4',

  STARTER_PRICING_3_TITLE: '高级版',
  STARTER_PRICING_3_PRICE: '59.9',
  STARTER_PRICING_3_PRICE_CURRENCY: '$',
  STARTER_PRICING_3_PRICE_PERIOD: '每月',
  STARTER_PRICING_3_HEADER: '功能点',
  STARTER_PRICING_3_FEATURES: '包含基础版,功能定制开发', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_3_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/df924d66-09dc-42a4-a632-a6b0c5cc4f28',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: 'Feedbacks',
  STARTER_TESTIMONIALS_TEXT_1: "How We Appraised Ourself?",
  STARTER_TESTIMONIALS_TEXT_2: 'The community members are saying',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '感谢大佬的方法。之前尝试过Super、Potion等国外的第三方平台，实现效果一般，个性化程度远不如这个方法，已经用起来了！ ',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Ryan_G',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Ryan`Log 站长',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://blog.gaoran.xyz/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '很喜欢这个主题，本代码小白用三天台风假期搭建出来了，还根据大佬的教程弄了自定义域名，十分感谢，已请喝咖啡~',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Asenkits',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '阿森的百宝袋 站长',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '呜呜呜，经过一个下午的努力，终于把博客部署好啦，非常感谢Tangly1024大佬的框架和教程，这是我有生之年用过的最好用的博客框架┭┮﹏┭┮。从今之后，我就可以在自己的博客里bb啦，( •̀ ω •́ )y ',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6c096b44-beb9-48ee-8f92-1efdde47f3a3%2F338962f1-d352-49c7-9a1b-746e35a7005c%2Fhf.png?table=block&id=ce5a48a9-d77a-4843-a3d9-a78cd4f794ce&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'DWIND',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '且听风吟 站长',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'PIXIU offers a bright future, with significant benefits for users who invest now. One of the key advantages is that ad revenue generated on the platform is used to buy back the token, creating a continuous demand cycle.',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Disheng',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Invester',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '灰常感谢大佬的博客项目，能将博客和notion结合起来，这一直是我挺期待的博客模式。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fafb21381-f51b-4fd0-9998-800dbeb64dbe%2Favatar.png?table=block&id=195935d2-0d8d-49fc-bd81-1db42ee50840&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'AnJhon',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Anjhon`s Blog 站长',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: '用好久了，太感谢了',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4f391d7-7d65-4c05-a82c-c6e2c40f06e4%2Fa2a7641a26b367608c6ef28ce9b7e983_(2).png?table=block&id=a386eb0e-4c07-4b18-9ece-bba4e79ce21c&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'LUCEN',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'LUCEN考验辅导 站长',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://www.lucenczz.top/'
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: '',
  STARTER_FAQ_TEXT_1: 'Why Pixiu?',
  STARTER_FAQ_TEXT_2: 'The reason you choose us',

  STARTER_FAQ_1_QUESTION: 'Open & Embracing',
  STARTER_FAQ_1_ANSWER:
    'Everyone is welcome. No whitelists or hoops to jump through, just create our first or connect wallet without any added complexities. Sign up for starting Pixiu!',

  STARTER_FAQ_2_QUESTION: 'Fair & Unobstructed',
  STARTER_FAQ_2_ANSWER:
    'Everyone get reward fairly. Gamified and farming-resistant reward mechanisms ensure the right people earn Pixiu points and future token rewards for their contributions.',

  STARTER_FAQ_3_QUESTION: 'Live & Various',
  STARTER_FAQ_3_ANSWER:
    'Everyone can showcase their own charm. Utilize diverse methods on the platform to achieve personal brand growth from 0 to 1.',

  STARTER_FAQ_4_QUESTION: 'Wide & Creative',
  STARTER_FAQ_4_ANSWER:
    'Everyone’s contributing content. The rich plugin mechanisms on the platform ultimately form a complete ecosystem (Pixiu-Eco) , providing a one-stop solution for realizing the value of ideas.',

  // 团队成员区块
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: 'Operation Team',
  STARTER_TEAM_TEXT_1: 'Who We are?',
  STARTER_TEAM_TEXT_2: 'Banded together to make effect',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-00.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Kevin Ji (0xCatKing)',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Founder'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-01.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Ada Ferner',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Co-founder'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-02.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Jason Wang',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Co-founder'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-03.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Robin Jia',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Co-founder'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: 'Our Blog',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: 'What’s New?',
  STARTER_BLOG_TEXT_2:
    'Track our latest exciting developments here!',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: "Nominate influential members to the community, then we will proactively invite them to join Pixiu.",
  STARTER_CONTACT_TEXT: 'Make Us Bigger',
  STARTER_CONTACT_LOCATION_TITLE: '6666+',
  STARTER_CONTACT_LOCATION_TEXT: 'Individual Address',
  STARTER_CONTACT_EMAIL_TITLE: '666+',
  STARTER_CONTACT_EMAIL_TEXT: 'Communities',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/database-for-noteforms-kggxdi', // 基于NoteForm创建，将留言数据存在Notion中

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: true, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: 'Next-gen Social Ecosystem',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: 'About',
      LINK_GROUP: [
        { TITLE: 'Pixiu Milestone', URL: '/milestone' },
        { TITLE: 'Pixiu Vision', URL: '/vision' }
      ]
    },
    {
      TITLE: 'Brand',
      LINK_GROUP: [
        {
          TITLE: 'Brand Partners',
          URL: '/partner'
        },
        {
          TITLE: 'Brand Kit',
          URL: '/brand_kit'
        }
      ]
    },
    {
      TITLE: 'Legacy Notice',
      LINK_GROUP: [
        {
          TITLE: 'Privacy Policy',
          URL: 'https://docs.pixiu.us/privacy_policy/'
        },
        {
          TITLE: 'Terms of Service',
          URL: 'https://docs.pixiu.us/terms/'
        }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: 'Hotiest',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: 'Copyright © 2024 Pixiu. All rights reserved.',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '',

  // 404页面的提示语
  STARTER_404_TITLE: '404 ERROR',
  STARTER_404_TEXT: 'Oooops! The page does not exist, it may have been moved or deleted.',
  STARTER_404_BACK: 'Back Home',

  // 页面底部的行动呼吁模块
  STARTER_CTA_ENABLE: true,
  STARTER_CTA_TITLE: 'What are you waiting for?',
  STARTER_CTA_TITLE_2: 'Don’t hesitate anymore!',
  STARTER_CTA_DESCRIOTN:
    'Go and experiencing the exciting journey now!',
  STARTER_CTA_BUTTON: true, // 是否显示按钮
  STARTER_CTA_BUTTON_URL:
    'https://pixiu.us/downloads',
  STARTER_CTA_BUTTON_TEXT: 'Start Pixiu!',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://pixiu.us', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
