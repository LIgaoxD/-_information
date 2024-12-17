<template>
	<view class="content">
		<view class="item" v-for="(value,index) in iconType" :key="index">
			<icon :type="value" size="26" />
			<text>{{value}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iconType: ['success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear']
			}
		}
	}
</script>

<style>
	.title {
		text-align: center;
		font-size: 30px
	}

	.scroll-Y,
	.swiper,
	.swiper-item {
		width: 100%;
		height: 100px;
	}

	.scroll-view-item {
		width: 100%;
		height: 60px
	}
</style>
