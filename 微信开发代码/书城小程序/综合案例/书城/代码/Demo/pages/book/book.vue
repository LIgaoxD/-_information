<template>
	<view class="box">
		<view class="book-info">
			<image :src="book.imgPath" mode=""></image>
			<view class="info">
				<view class="book-name">
					{{book.name}}
				</view>
				<view class="book-author">作者：{{book.author}}</view>
				<view class="add" @click="handleClick(book.id)">添加到书架</view>
			</view>
			
		</view>
		<view class="book-introduce">
			{{book.introduce}}
		</view>
	</view>
</template>

<script>
	import get from "../../utils/get.js"
	export default {
		onLoad(option) {
			var url= "/book/getBookInfo.php?id="+option.id;
			this.$request(url, {}).then(res => {
				this.book= res
			})
		},
		data() {
			return {
				book:{}
			}
		},
		methods: {
			handleClick(value){
				var url= "/book/addBook.php?id="+value;
				this.$request(url, {}).then(res => {
					uni.showToast({
						title:res,
						icon:"none"
					})
				})
			}
		}
	}
</script>

<style scoped>
.box{
	background-color: #f6f6f6;
	width: 100vw;
	height: 110vh;
}
.book-info{
	background-color: #fff;
	display: flex;
	padding: 20px 10px;
}
image{
	width:200px;
	height: 200px;
}
.info{
	position: relative;
}
.book-name{
	font-size: 27px;
	font-weight: bold;
	margin:10px 0;
}
.book-author{
	font-size: 18px;
}
.add{
	position: absolute;
	bottom: 30px;
	color: #ee4000;
}
.book-introduce{
	font-size: 15px;
}
</style>
