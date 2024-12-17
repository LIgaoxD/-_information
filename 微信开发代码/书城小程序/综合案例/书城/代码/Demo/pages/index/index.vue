<template>
	<view>
		<swiper class="swiper" indicator-color="#fff" indicator-active-color="#DAA520" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item  v-for="(item,index) in swiperPath">
				<view class="swiper-item" >
					<image mode="aspectFill" class="swiper-img" :src="item.src" ></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="hot-box">
			<view class="hot-title">
				热门推荐
			</view>
			<view class="hot-list">
				<view class="item" v-for="item in list">
					<book :book="item"></book>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	import get from "../../utils/get.js";
	import book from "../../components/book.vue";
	export default {
		components:{
			book
		},
		created() {
			var url= "/book/getList.php";
			this.$request(url, {}).then(res => {
				this.list= res
			})
		},
		data() {
			return{
				swiperPath:[{
					src:"../../static/images/swiper/swiper1.jpg",
				},{
					src:"../../static/images/swiper/swiper2.jpg",
				},{
					src:"../../static/images/swiper/swiper3.jpg",
				}],
				list:[]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>	
	.swiper{
		width: 100%;
		height: 120px;
	}
	.swiper-item{
		width: 100%;
		height: 120px;
	}
	.swiper-img{
		width: 100%;
		height: 120px;
	}
	.hot-title{
		font-size: 35px;
		font-weight: bold;
		font-family:"隶书";
		margin-top:10px;
		padding: 2px 10px;
		border-bottom:5px solid #DAA520;
	}
</style>
