##目录介绍
:--resources --------- 打包资源文件
:--src --------------- 项目主路径
    app -------------- 项目入口
    assets ----------- 静态资源文件
    components ------- 组件堆放目录
        cont-list ---- 首页行情的列表组件
        information-list ---- 快讯列表组件
        news-list ---- 新闻列表
        scroll-bar --- 首页行情下部的横向滚动组件
    mocks ------------ 新闻列表渲染
    models ----------- models堆放目录
    pages ------------ 页面堆放目录
        home --------- 首页页面
        information -- 快讯和新闻页面
        information-cont -- 快讯详情
        new-cont ----- 新闻详情
        usercenter --- 用户中心
        tabs --------- 切换交换页面做tab下面的调度页面
    providers -------- api各种数据的使用对方文件目录
        api ---------- 都是接口对方地址
        fn ----------- 公用方法
        ...     原项目目录
    theme ------------ 全局css样式
    index.html
    manifest.json
    service-worker.js
:--www --------------- 静态资源文件

##icion介绍

主要还是要使用命令行去建立页面和路径ionic会自动添加需要的东西，在每个页面的modus要想使用ionic的组建需要在页面moudles引入ionic的组建

安卓和ios的打包地址：
https://ionicframework.com/docs/intro/deploying/

cli命令
https://ionicframework.com/docs/cli/commands.html
