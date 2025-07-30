---
title: VitePress集成Twikoo评论
date: 2025-07-29 15:07:00
cover: [https://tc.cuirx.de/i/2025/07/30/qvp35o.webp]

categories: 随记
---


前置：[部署Twikoo云端](https://twikoo.js.org/backend.html)

1.安装Twikoo

```shell [pnpm]
pnpm install twikoo
```

2.初始化Twikoo

```typescript [.vitepress\theme\components\Twikoo.vue]
<template>
  <div id="twikoo"></div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

const initTwikoo = async () => {
  // 判断是否在浏览器环境中
  if (typeof window !== 'undefined') {
    try {
      const twikoo = await import('twikoo')
      console.log('Twikoo loaded successfully')
      await twikoo.init({
        envId: 'https://tw.xxx.com/', // 请替换为您自己的Twikoo服务地址
        el: '#twikoo'
      })
      console.log('Twikoo initialized successfully')
    } catch (err) {
      console.error('Twikoo initialization failed:', err)
    }
  }
}

// 监听路由刷新评论
watch(route, () => {
  initTwikoo()
})

// 组件挂载时初始化
onMounted(() => {
  initTwikoo()
})
</script>
```

3.插入layout插槽

```typescript [.vitepress\theme\components\Layout.vue]
<script setup lang="ts">
import ThemeAsync from 'vitepress-theme-async'//这里是我用的主题，默认主题为import DefaultTheme from 'vitepress/theme'
import Twikoo from './Twikoo.vue' //评论组件

const { Layout } = ThemeAsync
</script>

<template>
  <Layout>
    <template #post-after> //同上，默认为#doc-after
      <div class="post-after">
        <Twikoo></Twikoo>
      </div>
    </template>
    <template #links-after>
      <div class="post-after">
        <Twikoo></Twikoo>
      </div>
    </template>
    
  </Layout>
</template>

```

4.导入布局

``` typescript [.vitepress\theme\index.ts]
import Layout from './Layout.vue'
export default {
    ...ThemeAsync,
    Layout,
}
```