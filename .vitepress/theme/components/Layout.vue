<script setup lang="ts">
import ThemeAsync from 'vitepress-theme-async'
import Twikoo from './Twikoo.vue' //评论组件

const { Layout } = ThemeAsync
</script>




<template>
  <Layout>
    <template #post-after>
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
