<template>
	<view class="box">
		<view class="user-info">
			<image class="user-img" mode="aspectFill" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202007%2F25%2F20200725214229_RsyfK.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614409358&t=2ad53cbc9722ed804c714e8bcc4a9df1"></image>
			<view>王刚</view>
		</view>
		<view class="list">
			<view class="item">
				<view>我的会员</view>
				<view><image class="icon" src="../../static/images/icon/icon.png" mode=""></image></view>
			</view>
			<view class="item">
				<view>我的金币</view>
				<view><image class="icon" src="../../static/images/icon/icon.png" mode=""></image></view>
			</view>
			<view class="item">
				<view>看过的书籍</view>
				<view><image class="icon" src="../../static/images/icon/icon.png" mode=""></image></view>
			</view>
			<view class="item">
				<view>意见反馈</view>
				<view><image class="icon" src="../../static/images/icon/icon.png" mode=""></image></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.box{
		padding:5vw;
	}
	.user-info{
		width:90vw;
		padding:10px 0;
		border-radius: 4px;
		box-shadow: 3px 3px 3px 3px #ccc;
		display: flex;
		align-items: center;
		font-size:30px ;
	}
.user-img{
	width:70px;
	height:70px;
	margin:10px 20px;
	border-radius: 50%;
}
.item{
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 25px;
	color: #666;
	padding:10px;
	border-bottom: 1px solid #ddd;
}
.icon{
	width: 30px;
	height: 30px;
}
.list{
	margin-top:30px;
}
</style>
