<template>
	<view>
		<view v-for="item in list">
			<book :book="item"></book>
		</view>
	</view>
</template>

<script>
	import book from "../../components/book.vue"
	export default {
		onLoad(option) {
			uni.setNavigationBarTitle({
			    title: option.title
			});
			var url= "/book/getList.php";
			this.$request(url, {}).then(res => {
				this.list=res
			})
		},
		components:{
			book
		},
		data() {
			return {
				list:[]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
