<template>
	<view class="bg" :style="'background-color:'+bgColor+';color:'+fontColor">
		<scroll-view @click="handleClick" class="scroll" scroll-y="true" lower-threshold="100" @scrolltolower="loadMore">
			<view v-for="item in list">
				<text :style="'font-size:'+chapterSize+'px'" class="chapter">{{item.chapter}}</text><br />
				<text :style="'font-size:'+contentSize+'px'">{{item.content}}</text>
			</view>
		</scroll-view>
		<view class="model" v-show="show">
			<view class="box">
				<view style="flex:1;text-align: center;">字体大小：</view>
				<view style="display: flex;flex:2">
					<button class="btn" @click="changeFont('-')">-</button>
					<button class="btn" @click="changeFont('+')">+</button>
				</view>
			</view>
			<view class="box">
				<view style="flex:1;text-align: center;">主题：</view>
				<view style="display: flex;flex:3;justify-content: space-around;">
					<view class="color-btn" @click="changeColor('black')" style="background-color: #666;"></view>
					<view class="color-btn" @click="changeColor('yellow')" style="background-color: #FFDEAD;"></view>
				</view>
			</view>
			<!-- #ifndef H5 -->
			<view class="box">
				<view style="flex:1;text-align: center;">亮度：</view>
				<slider style="flex:3" :value="screenBrightness*100" @change="sliderChange" />
			</view>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			uni.setNavigationBarTitle({
				title: "福尔摩斯侦探集"
			})
			// #ifndef H5
			uni.getScreenBrightness({
				success: (res) => {
					this.screenBrightness = res.value
				}
			})
			// #endif
		},
		created() {
			this.getBook(this.index);
		},
		data() {
			return {
				contentSize: 23,
				chapterSize: 28,
				bgColor:"#FFDEAD",
				fontColor:"#000",
				show: false,
				index: 1,
				list: [],
				// #ifndef H5
				screenBrightness: 0,
				// #endif
			}
		},
		methods: {
			changeColor(value){
				switch (value){
					case "yellow":
					this.bgColor="#FFDEAD";
					this.fontColor="#000";
					break;
					case "black":
					this.bgColor="#666";
					this.fontColor="#ccc";
					break;
					default:
					break;
				}
			},
			changeFont(value) {
				if (value == "-") {
					if (this.contentSize > 12) {
						this.contentSize = this.contentSize - 2
						this.chapterSize = this.chapterSize - 2
					}
				} else {
					if (this.contentSize < 38) {
						this.contentSize = this.contentSize + 2
						this.chapterSize = this.chapterSize + 2
					}
				}
			},
			// #ifndef H5
			sliderChange(e) {
				this.screenBrightness = e.detail.value / 100
				uni.setScreenBrightness({
					value: this.screenBrightness,
					success: (res) => {
						console.log(res)
					}
				})
			},
			// #endif
			handleClick() {
				this.show = !this.show
			},

			getBook(id) {
				var url= "/book/getBook.php?id="+id;
				this.$request(url, {}).then(res => {
					var chapter = res.chapter.replace(/\s/, " ").replace(/\n/, " ")
					var content = res.content.replace(/\s/, " ").replace(/\n/, " ")
					var item = {
						chapter,
						content
					}
					this.list.push(item)
				})

			},
			loadMore() {
				this.index++;
				this.getBook(this.index);
			}
		}
	}
</script>

<style scoped>
	.bg {
		height: 100vh;
		padding: 0 5px 0 10px;
	}
	.scroll {
		height: 100%;
	}
	.chapter {
		font-size: 28px;
		font-weight: bold;
	}
	.model {
		z-index: 2;
		padding: 10px 0;
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		background: #fff;
		color: #000;
	}
	slider {
		width: 200px;
	}
	.box {
		display: flex;
		margin: 10px 0;
		align-items: center;
	}
	.btn {
		width: 70px;
		height: 30px;
		line-height: 30px;
	}
	.color-btn{
		width:40px;
		height:40px;
		border-radius: 50%;
	}
</style>
