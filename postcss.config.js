module.export = {
  plugins:{
    autoprefixer:{},
    "postcss-px-to-viewport":{
      unitToConvert: 'px',
      viewportWidth:375,//视窗的宽度，对应的是我们设计稿的宽度（750）
      viewportHeight:667, //视窗的高度，对应的是设计稿的高度
      unitPrecision:5,//指定'px'转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit:'vw',//指定需要转成的视窗单位
      fontViewportUnit: 'vw',
      selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'],//指定不需要转换的类
      minPixelValue:1,//小于或等于'1px'不转换为视窗单位
      mediaQuery:false,//允许媒体查询中使用'px’
      exclude:[/TabBar/]
    },
  }
}