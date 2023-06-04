<template>
	<view class="content">
		<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="scroll">
			<SCROLL_LIST :list="list"></SCROLL_LIST>
		</van-list>
	</view>
</template>

<script>
	import SCROLL_LIST from '../../components/scroll_list.vue';
	export default {
		components: {
			SCROLL_LIST
		},
		data() {
			return {
				list: [],
				loading: false,
				finished: false,
				page: 0,
				randowCover: [{
						height: 1022,
						url: "https://diancan-1252107261.cos.accelerate.myqcloud.com/lvyou/1681137308518-2617780.jpg",
						width: 680
					},
					{
						height: 1020,
						url: "https://diancan-1252107261.cos.accelerate.myqcloud.com/lvyou/1681136773059-7591456.jpg",
						width: 680
					},
					{
						height: 439,
						url: "https://diancan-1252107261.cos.accelerate.myqcloud.com/lvyou/1681414489667-1857859.webp",
						width: 658
					},
					{
						height: 987,
						url: "https://diancan-1252107261.cos.accelerate.myqcloud.com/lvyou/1681414681433-8026142.webp",
						width: 658
					},
					{
						height: 439,
						url: "https://diancan-1252107261.cos.accelerate.myqcloud.com/lvyou/1681414962370-1756328.webp",
						width: 658
					},
					{
						height: 922,
						url: "https://diancan-1252107261.cos.accelerate.myqcloud.com/lvyou/1681415314424-6656583.webp",
						width: 658
					},
					{
						height: 438,
						url: "https://diancan-1252107261.cos.accelerate.myqcloud.com/lvyou/1681416540793-2016563.webp",
						width: 658
					},
					{
						height: 987,
						url: "https://diancan-1252107261.cos.accelerate.myqcloud.com/lvyou/1681416932790-6781442.webp",
						width: 658
					}

				],
				randowName: [
					'供了两种形式的压缩包，在下载下来的压缩包内可以看到以下目录和文件，这些文件按照类别放到了不同的目',
					'并且提供了压缩与未压缩两种版本',
					'上面展示的就是 Bootstrap 的基本文件结构：预编译文件可以直接使用到任何 web 项目中',
					'我们提供了编译好的 CSS 和 JS (bootstrap.*) 文件，还有经过压缩的 CSS 和 JS ',
					'Bootstrap 源码包含了预先编译的 CSS、JavaScript 和图标字体文件，并且还有 LESS',
					'编译 CSS 和 JavaScript 文件',
					'并且对外提供了一些方便的方法用于编译整个框架',
					'使用以下给出的这份超级简单的 HTML 模版，或者修改这些实例。我们强烈建议你对这些实例按照自己的需求进行修改，而不要简单的复制、粘贴'
				]
			}
		},
		onLoad() {

		},
		methods: {
			scroll() {
				// 数据全部加载完成
				if (this.page >= 10) {
					return this.finished = true;
				}
				this.loading = true;

				const scroll_list = []
				let item = {}
				this.page++;

				for (let i = 0; i < 8; i++) {
					// 随机数
					const randow = Math.floor(Math.random() * this.randowCover.length)
					console.log('randow', randow);
					item = {
						src: this.randowCover[randow],
						name: this.randowName[randow]
					}
					scroll_list.push(item);
				}

				console.log('scroll_list', scroll_list);
				this.list = [...this.list, ...scroll_list];
				// 加载状态结束
				this.loading = false;
				console.log('list', this.list)
			},
		}
	}
</script>

<style>

</style>
