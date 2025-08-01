---
title: VitePress美化代码块
date: 2025-07-29 17:32:00
cover: [https://tc.cuirx.de/i/2025/07/30/snt1fz.webp]

categories: 随记
---


### 1.使用插件

```shell
pnpm add vitepress-plugin-group-icons
```


### 2.新建custom.css

::: code-group
``` typescript [.vitepress\theme\custom.css]
:root {
  /* MacOS窗口按钮颜色 */
  --mac-red: #ff5f58;
  --mac-yellow: #ffbd2e;
  --mac-green: #18c550;
  /* 标题栏尺寸 - 略微减小标题栏高度 */
  --titlebar-height: 20px;
  --button-size: 13px;
  --button-spacing: 8px;
  /* 新增：圆点顶部间距，控制与标题栏的空隙 */
  --dot-top-margin: 12px;
}

/* 基础代码块容器 - 仅对顶级代码块生效 */
.vp-doc > div[class*="language-"],
.vp-doc section > div[class*="language-"] {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  margin: 1.5rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* 标题栏背景 - 高度减小 */
.vp-doc > div[class*="language-"]::before,
.vp-doc section > div[class*="language-"]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: var(--titlebar-height);
  background-color: #f7f6f3;
  z-index: 1;
}

/* MacOS窗口按钮 - 调整垂直位置减小空隙 */
.vp-doc > div[class*="language-"]::after,
.vp-doc section > div[class*="language-"]::after {
  content: "";
  position: absolute;
  top: var(--dot-top-margin); /* 使用固定顶部间距替代居中计算 */
  left: 14px;
  width: var(--button-size);
  height: var(--button-size);
  border-radius: 50%;
  background-color: var(--mac-red);
  box-shadow: 
    calc(var(--button-size) + var(--button-spacing)) 0 0 var(--mac-yellow),
    calc(2 * (var(--button-size) + var(--button-spacing))) 0 0 var(--mac-green);
  z-index: 2;
}

/* 代码内容区域调整 - 适应减小的标题栏 */
div[class*="language-"] pre {
  padding: 1.5rem 1rem 1rem 1rem !important;
  padding-top: calc(var(--titlebar-height) + 0.8rem) !important;
  border: none !important;
  border-radius: 0 !important;
}

/* 代码组样式 */
.vp-code-group {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.vp-code-group .tabs {
  padding-top: var(--titlebar-height) !important;
}

/* 代码组窗口按钮 - 调整垂直位置 */
.vp-code-group::before {
  content: "";
  position: absolute;
  top: var(--dot-top-margin);
  left: 14px;
  width: var(--button-size);
  height: var(--button-size);
  border-radius: 50%;
  background-color: var(--mac-red);
  box-shadow: 
    calc(var(--button-size) + var(--button-spacing)) 0 0 var(--mac-yellow),
    calc(2 * (var(--button-size) + var(--button-spacing))) 0 0 var(--mac-green);
  z-index: 10;
}

/* 代码组内的代码块 - 隐藏重复的圆点 */
.vp-code-group div[class*="language-"] {
  box-shadow: none;
  margin: 0;
}

.vp-code-group div[class*="language-"]::before,
.vp-code-group div[class*="language-"]::after {
  display: none !important;
}

/* 适配图标插件 */
.vp-code-block-title {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}

.vp-code-block-title-bar {
  position: relative;
  padding-top: var(--titlebar-height) !important;
  padding-left: 60px !important;
}

/* 带图标的代码块按钮 - 调整垂直位置 */
.vp-code-block-title-bar::before {
  content: "";
  position: absolute;
  top: var(--dot-top-margin);
  left: 14px;
  width: var(--button-size);
  height: var(--button-size);
  border-radius: 50%;
  background-color: var(--mac-red);
  box-shadow: 
    calc(var(--button-size) + var(--button-spacing)) 0 0 var(--mac-yellow),
    calc(2 * (var(--button-size) + var(--button-spacing))) 0 0 var(--mac-green);
  z-index: 100;
}



/* 深色模式适配 */
@media (prefers-color-scheme: dark) {
  div[class*="language-"]::before,
  .vp-code-group::before {
    background-color: #1e1e1e;
  }
}

```
:::
### 3.导入到主题配置
::: code-group
```typescript [.vitepress\theme\index.ts]
import './custom.css'
```
:::
### 4.效果

![image-20250730201244237](https://tc.cuirx.de/i/2025/07/30/xdh8ku-2.webp)
![image-20250730201443266](https://tc.cuirx.de/i/2025/07/30/xdhxi2-2.webp)