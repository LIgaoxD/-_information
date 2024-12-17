<template>
	<view class="box">
		<view class="item" v-for="item in list" @click="handle(item.title)">
			<view class="info">
				<view class="title">{{item.title}}</view>
				<view class="lab">{{item.label}}</view>
			</view>
			<image :src="item.imgPath"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[{
						title:"青春",
						label:"校园爱情",
						imgPath:"https://img14.360buyimg.com/n0/jfs/t1/73966/15/3682/259162/5d1d95aaE4501d809/7559173c99988b77.jpg"
					},{
						title:"小说",
						label:"世界名著",
						imgPath:"https://img14.360buyimg.com/n0/jfs/t1/143688/17/18523/607547/5fd9c499E38f25bee/4c76363feeffcd8a.jpg"
					},{
						title:"文学",
						label:"文学理论",
						imgPath:"https://img14.360buyimg.com/n0/jfs/t1/131859/30/15703/621629/5faba484E5d161b27/4f59411770063e43.png"
					},{
						title:"艺术",
						label:"音乐/美术",
						imgPath:"https://img14.360buyimg.com/n0/jfs/t1/11445/1/7804/391728/5c652750Eba956e6d/87f6da89cde11058.jpg"
					},
					{
						title:"动漫",
						label:"大师画集",
						imgPath:"https://img14.360buyimg.com/n0/jfs/t1/134777/21/5604/284765/5f226ce6E313af7bf/a69d6b0b59e8eecd.jpg"
					},{
						title:"生活",
						label:"茶/养花",
						imgPath:"https://img14.360buyimg.com/n0/jfs/t1/120311/15/348/334636/5eb4a768E05832d8d/670a444565bfd7c9.jpg"
					},{
						title:"育儿/成长",
						label:"准父母读物",
						imgPath:"https://img14.360buyimg.com/n0/jfs/t1/136216/29/10430/288533/5f685fbaE24ca385c/127c1e8c10ea809f.jpg"
					},{
						title:"保健",
						label:"食疗/健身",
						imgPath:"https://img14.360buyimg.com/n0/jfs/t16690/232/297355677/472123/1dfb8000/5a693cd8N39e33d83.jpg"
					},{
						title:"婚恋",
						label:"恋爱/婚姻",
						imgPath:"https://img14.360buyimg.com/n0/jfs/t1/75389/37/6816/102685/5d4ec638E1dbdd4f7/428ccc3001ed1414.jpg"
					},{
						title:"旅游",
						label:"自然名胜",
						imgPath:"https://img14.360buyimg.com/n0/g8/M03/04/05/rBEHZ1A8RTcIAAAAAAFds-3VXc4AAA0OAE29LAAAV3L216.jpg"
					},{
						title:"娱乐时尚",
						label:"游戏/明星",
						imgPath:"https://img14.360buyimg.com/n0/jfs/t1/144221/37/7213/226947/5f4c5feeEf4edaac4/2c3268cf7cff2966.jpg"
					}
				]
			}
		},
		methods:{
			handle(value){
				uni.navigateTo({
					url: '/pages/list/list?title='+value,
				});
			}
		}
	}
</script>

<style scoped>
.box{
	display: flex;
	/* justify-content: space-around; */
	flex-wrap: wrap;
}
.item{
	width: 45%;
	background-color: #f8f8f8;
	margin:5px 2.5%;
	display: flex;
	justify-content: space-around;
}
image{
	width: 70px;
	height: 70px;
	margin:5px;
}
.title{
	margin:15px 0;
}
.lab{
	margin:15px 0;
	font-size: 14px;
	color: #aaa;
}
</style>
