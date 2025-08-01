import { defineConfig } from 'vitepress-theme-async/config';
import links from '../links';
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons';



export default defineConfig({


	//代码高亮
	markdown: {
		config(md) {
			md.use(groupIconMdPlugin)
		},
	},
	vite: {
		plugins: [
			groupIconVitePlugin()
		],
	},



	head: [
		[
			'script',
			{
				defer: '',
				src: 'https://um.cuirx.de/script.js', 'data-website-id': '5aa08c41-f75d-4f02-ac4a-0fcf8ac38196'
			},

		],
	],
	titleTemplate: 'Cuirx Blog',
	srcDir: './',
	themeConfig: {
		// 导航栏
		topBars: [
			{ title: '主页', url: '/' },
			{ title: '分类', url: '/categories' },
			{ title: '友链', url: '/links' },
			{ title: '归档', url: '/archives' },
			{ title: '关于', url: '/about' },
			{
				title: '其他',
				children: [
					{ title: '主站', url: 'https://cuirx.de' },
					{ title: '访问统计', url: 'https://um.cuirx.de/share/GzkdFrvPbwgF9TIK/cuirx.me' },
					{ title: '三角洲改枪码', url: 'https://sjz.cuirx.de' },
				],
			}
		],
		// 404
		notFound: {
			text: '从前有座山，山里有座庙，庙里有个页面，现在找不到...',
		},

		// 关闭页面切换动画
		pageLoading: false,
		// 关闭主题切换动画
		themeLoading: false,

		// 用户信息
		user: {
			name: 'cuirx',
			firstName: '',
			lastName: '',
			email: 'cuirx@cuirx.de',
			domain: 'https://cuirx.de',
			avatar: 'https://tc.cuirx.de/i/2025/07/24/ujrcee.webp',
			describe: '一个前端程序猿，喜欢写代码，喜欢写文章，喜欢写博客。',
			ruleText: '暂不接受个人博客以外的友链申请。'

		},
		// 网站图标
		favicon: {
			logo: '/logo.png',
			icon16: '/favicon.svg',
			//con32: '/favicon.svg',
			visibilitychange: true,
		},


		// 背景
		banner: {
			type: 'video',
			bgurl: '/1.mp4',
			bannerTitle: 'Hello word',
			bannerText: '',
			// ...  
		},

		// 关于
		about: {
			title: "如果一切都是镜花水月，那就让这万物走向终结。如果一切皆是命中注定，那就让这世界消失殆尽。",
			introduction: "大家好，我是 <strong>cuirx</strong>，很高兴您能在浩瀚如烟的互联网世界里发现这个博客，更感谢您能够饶有兴致地浏览这个页面。建立这个 Blog 是出于兴趣爱好，我将在此分会分享一些学习笔记，可能还会分享少许图片、视频以及其他有趣东西的链接。",
			blog: `<ul class="trm-list"> <li>程序：Vitepress </li> <li>主题：vitepress-theme-async </li> </ul>`,
			privacy: "本网站不会追踪访客行为，且不要求访客提供任何敏感信息（比如真实姓名、身份证号码、手机号等），因而也不存在任何隐私泄漏问题。访客参与评论，必须遵守法律法规和基本道德规范，文明礼貌。严禁发布任何有关淫秽、反动、暴力、博彩、恐吓、低俗的内容或违法信息，在尊重言论自由的同时请保持和平与理性。请勿对他人采取不友好的评论或其它过激行为。",
		},
		// 友情链接
		links: links,
		// 侧边栏
		sidebar: {
			typedTextPrefix: '',
			typedText: ['行百里者半九十', '好记性不如烂笔头'],


			// 社交图标
			social: [
				{
					name: 'GitHub',
					url: 'https://cuirx.me/',
					icon: `<svg t="1753363556710" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8745" width="200" height="200"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" p-id="8746"></path></svg>`,
				},
				{
					name: 'QQ',
					url: 'https://cuirx.me/',
					icon: `<svg t="1753363571510" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8907" width="200" height="200"><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" p-id="8908"></path></svg>`,
				},
				{
					name: '微信',
					url: 'https://cuirx.me/',
					icon: `<svg t="1753363591489" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9069" width="200" height="200"><path d="M690.1 377.4c5.9 0 11.8 0.2 17.6 0.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6 5.5 3.9 9.1 10.3 9.1 17.6 0 2.4-0.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-0.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-0.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4 0.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-0.1 17.8-0.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8z m-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1z m-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1z" p-id="9070"></path><path d="M866.7 792.7c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-0.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7 2.4 0 4.7-0.9 6.4-2.6 1.7-1.7 2.6-4 2.6-6.4 0-2.2-0.9-4.4-1.4-6.6-0.3-1.2-7.6-28.3-12.2-45.3-0.5-1.9-0.9-3.8-0.9-5.7 0.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9z m179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c-0.1 19.8-16.2 35.9-36 35.9z" p-id="9071"></path></svg>`,
				},
				{
					name: 'bilibili',
					url: 'https://cuirx.me/',
					icon: `<svg t="1753363731641" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10491" width="200" height="200"><path d="M777.514667 131.669333a53.333333 53.333333 0 0 1 0 75.434667L728.746667 255.829333h49.92A160 160 0 0 1 938.666667 415.872v320a160 160 0 0 1-160 160H245.333333A160 160 0 0 1 85.333333 735.872v-320a160 160 0 0 1 160-160h49.749334L246.4 207.146667a53.333333 53.333333 0 0 1 75.392-75.434667l113.152 113.152c3.370667 3.370667 6.186667 7.04 8.448 10.965333h137.088c2.261333-3.925333 5.12-7.68 8.490667-11.008l113.109333-113.152a53.333333 53.333333 0 0 1 75.434667 0z m1.152 231.253334H245.333333a53.333333 53.333333 0 0 0-53.205333 49.365333l-0.128 4.010667v320c0 28.117333 21.76 51.114667 49.365333 53.162666l3.968 0.170667h533.333334a53.333333 53.333333 0 0 0 53.205333-49.365333l0.128-3.968v-320c0-29.44-23.893333-53.333333-53.333333-53.333334z m-426.666667 106.666666c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z m320 0c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z" p-id="10492"></path></svg>`,
				},
			],
			info: [
				{
					key: '职业',
					val: '修仙'
				},

				{
					key: '实力',
					val: '化神大圆满'
				},

			],
		},



		// 页脚
		footer: {

			powered: {
				enable: true
			},
			liveTime: {
				enable: true,
				startTime: '2024/10/01'
			}
		},





		page: {
			archives: '/archives',
			categories: '/categories',
			tags: '/tags',
		},

		// 过期提醒
		noticeOutdate: {
			enable: true,
			style: 'simple',
			limitDay: 7,
			position: 'top',
		},


		rightside: {
			readmode: true,
			aside: true,
		},
		// 目录
		outline: {
			level: [2, 6],
		},



	},
});
