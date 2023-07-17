export const personal = {
  userInfo: {
    name: '朱华浩(Zhu, Hua-Hao)',
    school: '2011/9 同济大学 本科 软件工程',
    phone: '13818813680',
    email: 'zhuhuahao@gmail.com',
  },
  skillInfo: {
    title: '技术背景: ',
    list: [
      '熟悉HTML5/CSS3/Less/Stylus',
      '熟悉Javascript/ES6/TypeScript',
      '熟悉React',
      '熟悉Node/Koa/PM2',
      '熟悉Webpack/Gulp',
      '熟悉Git/Git Flow/StandardVersion',
      '熟悉Eslint/Tslint',
      '熟悉Jest',
    ],
  },
  workInfo: {
    title: '工作经验: ',
    list: [
      {
        company: '美团点评',
        time: '2017/6-至今',
        position: '高级前端工程师',
        description: [
          '美团餐饮SaaS营销',
          '点评商业化活动',
          '点评用户增长',
          '点评社区',
          '点评M站/小程序/快应用',
        ],
      },
      {
        company: '广联达',
        time: '2015/6-2017/6',
        position: '高级测试工程师',
        description: ['广联云功能测试', '自动化测试'],
      },
      {
        company: '惠普',
        time: '2011/9-2015/6',
        position: '测试工程师',
        description: ['惠普中国ShoppingMall功能测试'],
      },
    ],
  },
  projectInfo: {
    title: '项目简介: ',
    list: [
      {
        name: '美团餐饮SaaS营销',
        time: '2020/10-至今',
        description: '主R业务和小程序装修项目管理',
        detail: `业务模块主要负责扫码点餐长列表模块，以及小程序装修团队中的ScrumMaster。`,
      },
      {
        name: '点评商业活动',
        time: '2020/7-2020/10',
        description: '主R业务和基础功能组件研发',
        detail: `商业化定制活动中，会产生大量重复劳动，因此将常用模块抽成公共组件减少时间消耗，提高生产效率。
                在此之上，抽出基础功能组件提供给其他业务方使用。`,
      },
      {
        name: '点评用户增长',
        time: '2019/8-2020/7',
        description: '主R唤起和综合链接研发',
        detail: `一直以来点评用户增长处于瓶颈期，产品希望控制站外唤起行为和统一唤起规则。
                唤起组件通过参数配置，允许业务方实现多方式唤起。
                于此同时综合链接又能提供给无法自主研发又有唤起需求的运营和产品。
                最后，唤起组件提供统一的数据解析和日志上报，即满足运营和产品的数据需求又完善生产环境排查功能。`,
      },
      {
        name: '点评社区',
        time: '2019/4-2020/12',
        description: '主R社区功能研发',
        detail: `点评社区PC站和M站处于用户活跃区域，产品希望点评App入口提前，以此增加点评UGC内容产出。
                App社区采用点评自研容器Picasso开发，拥有类原生页面的功能体验。`,
      },
      {
        name: '点评M站/小程序/快应用',
        time: '2017/6-2020/7',
        description: '主R商户列表等长列表页面研发',
        detail: `为了满足产品对M站搜索列表页的SEO需求，并提高用户产品体验。
            基于点评自研SSR框架更新长列表页面。
            与此同时，小程序/快应用成为新的流量入口，在完成迭代功能之际，同步优化长列表性能，提高秒开率。`,
      },
    ],
  },
}
