## 项目样式调用和编写说明

目录结构

```bash
├── _basic.scss                # 项目基础样式
├── _color.scss                # 常用background、text设置
├── _layout.scss               # 框架布局样式
├── _mixin.scss                # scss混合文件
├── _normalize.scss            # 浏览器样式初始化
├── _nprogress.scss            # 加载条样式
├── _text.scss                 # 文本样式：文本对齐方式，文本常用大小
├── _transition.scss           # css动画
├── _var.scss                  # scss变量配置文件
├── element-variables.scss     # element-ui自定义主题配置
└── style.scss                 # 项目样式文件入口
```

#### flex 布局样式

```bash
/**
 * flex布局样式设置justify-content和align-items
 * 引入此样式，需先引入flex-row或者flex-column
 * flex-start-start ,flex-start-end, flex-start-center
 * flex-end-start, flex-end-end, flex-end-center
 * flex-center-start, flex-center-end, flex-center-center
 * flex-between-start, flex-between-end, flex-between-center
 * flex-around-start, flex-around-end, flex-around-center
 */
```

#### margin padding 留白设置

```bash
/**
 * margin padding 留白设置，单位rem
 * @return mt10,mr10,mb10,ml10
 * @return pt10,pr10,pb10,pl10
 * 最小10，最大100, 10=5px
 */
```

#### 文本样式

```bash
// 自定义text样式，分primary,success,warning,danger,info,gray
// text-primary等
// 文本对齐样式，text-left   text-center    text-right
```

#### 背景样式

```bash
// 自定义backgroundColor样式，分white, primary, success, warning, danger, info
// bg-primary等
```

#### 公用 css 设置

```css
// 元素不可用，不可选择、不可点击
.disabled {
  user-select: none;
  pointer-events: none;
}

// 图片自适应
.img-responsive {
  display: inline-block;
  vertical-align: middle;
  max-width: 100%;
  max-height: 100%;
}

// 初始化表格宽度为100%
.table {
  width: 100%;
  border-collapse: collapse;
}
```

#### 页面顶部查询操作栏

```css
.pages-thead {
  display: flex;
  align-items: center;
  padding: 10px 0;
  .item-xs {
    width: 100px;
  }
  .item-sm {
    width: 150px;
  }
  .item-md {
    width: 200px;
  }
  .item-lg {
    width: 250px;
  }
  > .thead-aside {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
```
