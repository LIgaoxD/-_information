<template>
	<view class="box" @click="handleClick(book.id)">
		<image :src="book.imgPath" mode=""></image>
		<view class="info-box">
			<view class="name">{{book.name}}</view>
			<view class="introduce">{{book.introduce}}</view>
			<view class="author">{{book.author}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['book'],
		data() {
			return {
				
			};
		},
		methods:{
			handleClick(value){
				uni.navigateTo({
					url:"/pages/book/book?id="+value
				})
			}
		}
	}
</script>

<style scoped>
.box{
	margin:10px;
	padding-bottom:10px;
	display: flex;
	justify-content: space-around;
	border-bottom:1px solid #aaa;
	box-sizing: border-box;
}
image{
	width: 120px;
	height: 120px;
	flex-shrink:0;
}
.info-box{
	position: relative;
}
.introduce{
	width: 220px;
	line-height:20px;
	height:40px;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	word-wrap: break-word;
	color: #999;
}
.name{
	font-size: 20px;
	font-weight: bold;
	margin: 5px 0;
}
.author{
	font-size: 16px;
	position:absolute;
	bottom: 0;
	left: 0;
}
</style>
