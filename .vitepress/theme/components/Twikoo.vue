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
        envId: 'https://tw.cuirx.de/', // 请替换为您自己的Twikoo服务地址
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