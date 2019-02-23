# vue-ts-webpack4

> `webpack4` + `ts` + `vue` + `element-ui`

#### 安装教程

```bash
# Clone project
git clone https://github.com/WenHaoHuang/webpack-template.git

# Install dependencies
npm install

# Serve with hot reload at localhost
npm run dev

# Build for production with minification
npm run build

# Build for production and view the bundle analyzer report
npm run build --report
```

#### 技术选型

| 技术类型     | 技术栈     | 版本      |
| ------------ | ---------- | --------- |
| 开发构件工具 | webpack    | >= 4.28.0 |
| js 语言      | typescript | >= 3.1.0  |
| css 语言     | scss       | >= 4.8.0  |
| 代码规范     | tslint     | >= 5.8.0  |
| 代码规范     | eslint     | >= 5.11.0 |
| mvvc 框架    | vue.js     | 2.5.21    |

#### 目录结构

```bash
├── .cache                             # webpack运行产生的cache
├── .vscode                            # vscode工作区设置，统一编码风格
├── build                              # webpack配置文件目录
|   ├── build.js                       # 构件入口文件
|   ├── utils.js                       # 公共处理函数
|   ├── webpack.base.conf.js           # 基础配置，dev和build公用
|   ├── webpack.config.js              # 配置文件
|   ├── webpack.dev.conf.js            # 开发配置
|   └── webpack.prod.conf.js           # 构件配置
├── doc                                # 项目开发文档目录
├── src                                # 源代码目录
|   ├── ajax                           # ajax请求封装，采用axios
|   ├── assets                         # 项目资源文件目录
|   |   ├── img                        # 图片资源目录
|   |   |   └── logo.png               # 项目logo
|   |   └── font                       # 自定义字体文件，使用iconfont管理项目字体图标
|   ├── components                     # 项目私有组件目录
|   |   ├── Breadcrumb                 # 页面面包屑导航组件
|   |   ├── MenuBar                    # 菜单组件
|   |   ├── SnTable                    # element-ui二次封装的菜单组件
|   |   └── TopBar                     # 页面topBar设置
|   ├── mixins                         # mixins目录
|   ├── router                         # 路由配置目录
|   |   ├── configManage.ts            # 配置管理路由表
|   |   ├── default.ts                 # 初始化路由表
|   |   ├── error.ts                   # 404等错误展示路由表
|   |   ├── index.ts                   # 路由入口、路由跳转逻辑处理
|   ├── styles                         # 公共样式文件
|   |   ├── _basic.scss                # 项目基础样式
|   |   ├── _color.scss                # 常用background、text设置
|   |   ├── _layout.scss               # 框架布局样式
|   |   ├── _mixin.scss                # scss混合文件
|   |   ├── _normalize.scss            # 浏览器样式初始化
|   |   ├── _nprogress.scss            # 加载条样式
|   |   ├── _text.scss                 # 文本样式：文本对齐方式，文本常用大小
|   |   ├── _transition.scss           # css动画
|   |   ├── _var.scss                  # scss变量配置文件
|   |   ├── element-variables.scss     # element-ui自定义主题配置
|   |   └── style.scss                 # 项目样式文件入口
|   ├── util                           # 公用方法封装
|   ├── views                          # 视图文件目录
|   |   ├── config                     # 视图 - 配置管理
|   |   |   ├── type                   # 视图 - 节点类型、关系类型管理
|   |   |   └── relation               # 视图 - 节点、节点关系管理
|   |   ├── Layout                     # 框架布局目录
|   |   |   ├── layout.vue             # 框架布局组件
|   |   |   └── pages.vue              # 框架布局子组件
|   |   └── 404.vue                    # 错误视图展示
|   |   └── Login.vue                  # 登录入口
|   ├── App.vue                        # vue 入口文件
|   ├── main.ts                        # 项目启动入口文件
|   ├── shims-tool.d.ts                # ts文件识别
|   ├── shims-tsx.d.ts                 # ts文件识别
|   ├── shims-vue.d.ts                 # ts文件识别
|   └── template.html                  # html 模板文件
├── static                             # 不构建直接打包的静态资源文件
|   ├── favicon.ico                    # favicon.ico
|   └── .gitkeep                       # 保证空目录能正常提交git
├── .babelrc                           # babel-loader配置
├── .editorconfig                      # 编辑器规范配置
├── .gitignore                         # git忽略配置
├── .postcssrc.js                      # postcss 配置
├── package.json                       # npm包管理
├── README.md                          # 项目介绍文档
├── tsconfig.json                      # 用来编译这个项目的根文件和编译ts选项
└── tslint.json                        # tslint配置
```
