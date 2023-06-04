<template>
	<div class="scroll_list">
		<div class="left content">
			<div class="item" v-for="(item, index) in leftItems" :key="index">
				<div class="cover">
					<img :src="item.src.url" alt="">
				</div>
				<div class="name">{{item.name}}</div>
				<div class="explain">
					<van-button type="primary">主要按钮</van-button>
					<van-button type="info">信息按钮</van-button>
				</div>
			</div>
		</div>
		<div class="right content">
			<div class="item" v-for="(item, index) in rightItem" :key="index">
				<div class="cover">
					<img :src="item.src.url" alt="">
				</div>
				<div class="name">{{item.name}}</div>
				<div class="explain">
					<van-button type="primary">主要按钮</van-button>
					<van-button type="info">信息按钮</van-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				leftItems: [],
				rightItem: [],
				leftHeight: 0,
				rightHeight: 0
			}
		},
		watch: {
			'list'(newVal, oldVal) {
				console.log('newVal', newVal);
				this.leftItems = [],
				this.rightItem = [],
				this.leftHeight = 0,
				this.rightHeight = 0
				if(newVal.length > 0) {
					newVal.forEach(item => {
						if(this.leftHeight <= this.rightHeight) {
							this.leftItems.push(item)
							this.leftHeight += Number(this.handleImageLoad(item.src.width, item.src.height))
						} else {
							this.rightItem.push(item)
							this.rightHeight += Number(this.handleImageLoad(item.src.width, item.src.height))
						}
					})
				}
			}
		},
		methods: {
			// 计算图片在不同尺寸下的视图层高度
			handleImageLoad(imgWidth, imgHeight) {
				// 获取HTML的fnot-size尺寸
				const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
				const screenWidth = window.innerWidth; // 屏幕宽度
				const itemPaddig = 5; // 每个item元素之间的padding
				const itemMargin = 10; // 元素之间的间隙
				const columnCount = 2; // 有多少列
				// scroll_list 容器的宽度
				const containerWidth = screenWidth - (itemPaddig + itemMargin) * (columnCount - 1) - itemPaddig * 2; 
				const itemWidth = Math.floor(containerWidth / 2); // 每列的宽度
				const imageRatio = imgHeight / imgWidth; // 图片高宽比
				const itemImgHeight = itemWidth * imageRatio; // 图片在视图层的高度
				return itemImgHeight.toFixed(0)
			}
		}
		
	}
</script>

<style lang="less" scoped>
	.scroll_list {
		display: flex;
		justify-content: space-between;
		.content {
			width: 49%;
		}
		.item {
			box-shadow: 0 0 10rpx rgba(0,0,0,.2);
			margin-bottom: 10px;
			padding: 5px;
			.cover {
				img {
					width: 100%;
				}
			}
			.name {
				font-size: 14px;
				font-weight: bold;
				line-height: 36rpx;
				margin: 10px 0;
			}
			.explain {
				margin-top: 10px;
				display: flex;
				justify-content: space-between;
				.van-button {
					padding: 0 10px;
					height: 32px;
				}
			}
		}
	}
</style>