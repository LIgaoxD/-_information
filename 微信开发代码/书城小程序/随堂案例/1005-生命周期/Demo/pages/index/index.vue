<template>
	<view class="content">
       <hello></hello>
	</view>
</template>

<script>
	import hello from "../../components/hello.vue"
	export default {
		onLoad(){
			console.log('Page Load')
		},
		onShow(){
			console.log('Page Show')
		},
		onReady(){
			console.log('Page Ready')
		},
		components:{
			hello
		}
		
	}
</script>

<style>
	
</style>
