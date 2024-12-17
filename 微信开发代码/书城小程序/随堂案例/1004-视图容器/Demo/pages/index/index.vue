<template>
	<view class="content">
		<view>
			<view class="title">可滚动容器</view>
			<scroll-view scroll-y="true" class="scroll-Y" >
				<view style="background:red" class="scroll-view-item">A</view>
				<view style="background:green" class="scroll-view-item">B</view>
				<view style="background:yellow" class="scroll-view-item">C</view>
			</scroll-view>
		</view>
		<view>
			<view class="title">可滑动容器</view>
			<swiper class="swiper" >
				<swiper-item>
					<view style="background:red" class="swiper-item">A</view>
				</swiper-item>
				<swiper-item>
					<view style="background:green" class="swiper-item ">B</view>
				</swiper-item>
				<swiper-item>
					<view style="background:yellow" class="swiper-item ">C</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		components: {

		}
	}
</script>

<style>
.title{
	text-align: center;
	font-size:30px
}
.scroll-Y,.swiper,.swiper-item{
	width: 100%;
	height: 100px;
}
.scroll-view-item{
	width:100%;
	height:60px
}

</style>
