import ThemeAsync from 'vitepress-theme-async';
import Layout from './components/Layout.vue';
import 'virtual:group-icons.css';
import './style/code.scss';



export default {
    ...ThemeAsync,
    Layout,
    // 自定义主题配置
    themeConfig: {
        
        // 注册评论组件
        components: {
        Twikoo: () => import('./components/Twikoo.vue'),
        },
    },
}
    


