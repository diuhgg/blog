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
    
  </Layout>
</template>


<!-- <template>
  <ThemeAsync.Layout>
    <template #post-after>
      <Twikoo />
    </template>
  </ThemeAsync.Layout>
</template> -->


<style>
.home-comment-container {
  position: relative;
  margin-top: 64px;
  padding: 0 24px;
}

@media (min-width: 640px) {
  .home-comment-container {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .home-comment-container {
    padding: 0 64px;
  }
}

.home-comment-container .comment-container {
  margin: 0 auto;
  max-width: 1152px;
}

.twikoo .el-loading-spinner .circular {
  margin-left: auto;
  margin-right: auto;
}
</style>