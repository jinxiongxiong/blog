 
module.exports = {
    title: '松子的blog',
    description: '脑袋空空',
    theme: 'reco',
    author: "松子",
    locales: {
      "/": {
        lang: "zh-CN",
      },
    },
    base: '/blog/',
    themeConfig: {
      subSider:"auto",
      logo: "/banban.jpg",
      type:"blog",
      authorAvatar: "/banban.jpg",
      nav: [
        { text: "首页", link: "/" },
        {
          text: "松子的blog",
          items: [
            { text: "暂时什么都没有", link: "https://juejin.cn/user/233526039432445" },
            { text: "Github", link: "https://github.com/jinxiongxiong" }
          ]
        }
      ],
      blogConfig: {
        category: {
          location: 2, // 在导航栏菜单中所占的位置，默认2
          text: "博客", // 默认文案 “分类”
        },
        tag: {
          location: 4, // 在导航栏菜单中所占的位置，默认4
          text: "Tag", // 默认文案 “标签”
        },
      }, 

 
      // sidebar: [
      //   {
      //     title: "欢迎学习",
      //     path: "/",
      //     collapsable: false,  // 是否折叠
      //     children: [{ title: "博客简介", path: "/" }],
      //   },
      //   {
      //     title: "基础篇",
      //     path: "/blogs/1",
      //     collapsable: true,
      //     children: [
      //       { title: "第一篇", path: "/blogs/1" },
      //       { title: "第二篇", path: "/blogs/2" },
      //     ]
      //   } 
      // ] 
    },
    plugins: [
      [
        "sakura",//樱花效果
        {
          num: 20, // 默认数量
          show: true, //  是否显示
          zIndex: -1, // 层级
          img: {
            replace: false, // false 默认图 true 换图 需要填写httpUrl地址
          },
        },
      ],
      [
        "cursor-effects",
        {
          size: 4, // size of the particle, default: 2
          shape: "star", // ['star' | 'circle'], // shape of the particle, default: 'star'
          zIndex: 999999999, // z-index property of the canvas, default: 999999999
        },
      ], 
      [
        "@vuepress-reco/vuepress-plugin-bgm-player",
        { 
            audios: [
              // 网络文件示例
              {
                name: '麦芒',
                artist: '十个勤天',
                url: 'https://m701.music.126.net/20240222180110/8e7352887632a5576932243569ffd512/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28475248630/e1fe/fdcf/a5be/c7377a53bb2acaf6c66a6e2c0f15b0f9.m4a',
                cover: '/wheat1.png'
              },
              {
                name: '想去海边',
                artist: '夏日入侵企划',
                url: 'https://m701.music.126.net/20240222181312/bacfa4adbb620ce80d2623a74247e0a9/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14096442783/cd19/054b/9769/cb5915feeef693edc0e1e467eb3708da.m4a',
                cover: '/sea.png' 
              }
            ] , 
            // 自动缩小
            autoShrink:true ,
            // 悬浮窗模式，吸边
            shrinkMode: 'float' ,
            // 悬浮窗位置
            floatStyle:{ bottom: '10px', 'z-index': '999999' },

          }
 
      ], 
      [
        "dynamic-title",{
          showIcon: "https://www.zpzpup.com/assets/image/favicon.ico",
          showText: "欢迎回来 O(∩_∩)O~",
          hideIcon: "https://www.zpzpup.com/assets/image/favicon.ico",
          hideText: "失联中。。。快回来~",
          recoverTime: 200
        }
      ] 
    ],


  }
  