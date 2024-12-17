<template>
	<view class="box">
		<view @click="handleClick" class="item" v-for="item in list" >
			<image mode="aspectFit" :src="item.imgPath" ></image>
			<view class="item-name">
				{{item.name}}
			</view>
		</view>
		<navigator url="/pages/classify/classify" open-type="switchTab" class="add-box">
			<view class="add" >添加书籍</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		onShow() {
			var url= "/book/getBookshelf.php";
			this.$request(url, {}).then(res => {
				this.list= res
				console.log(this.list)
			})
		},
		data() {
			return {
				list:[]
			}
		},
		methods:{
			handleClick(){
				uni.navigateTo({
					url:"/pages/read/read"
				})
			}		
		}
	}
</script>

<style scoped>
.box{
	display: flex;
	flex-wrap: wrap;
	padding:40px 10px;
	
}
.item{
	margin:1%;
	width: 31%;
}
image{
	width:30vw;
	height:30vw;
}
.item-name{
	text-align: center;
	margin:0 auto;
}
.add-box{
	margin:2% 5% 10% 5%;
	width: 23%;
	background-color: #eee;
	display: flex;
	justify-content: center;
	align-items: center;
}
.add{
	color: #007AFF;
}
</style>
