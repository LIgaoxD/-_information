<template>
	<view class="content">
		<view class="title">学生成绩查询</view>
		<view class="box">
			<view >学生选择:</view>
			<picker class="picker-box" @change="bindPickerChange" :value="index" :range="array">
				<view >{{array[index]}}</view>
			</picker>
		</view>
		<view class="grade-box">
			<view class="grade">
				数学:{{stu.math}}
			</view>
			<view class="grade">
				语文:{{stu.chinese}}
			</view>
			<view class="grade">
				英语:{{stu.english}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.req("小明")
		},
		data() {
			return {
				array:['小明','小红','小华','张三','李四','刘能'],
				index:0,
				stu:{math:0,chinese:0,english:0}
			}
		},
		methods: {
			bindPickerChange(e){
				this.index=e.detail.value
				this.req(this.array[e.detail.value])
			},
			req(value){
				uni.request({
					url:"https://www.zhonghuiqh.com/uni.php?name="+value,
					success: (res) => {
						this.stu=res.data
					}
				})
			}
		}
	}
</script>

<style>
	.title {
		text-align: center;
		font-size: 30px;
		margin:10px 0;
	}
	.box{
		margin:10px 0px;
		display: flex;
		justify-content: center;
		font-size: 25px;
	}
	.picker-box{
		color: blue;
	}
	.grade-box{
		font-size: 20px;
		margin:50px;
		border: #333333 1px dashed;
		padding: 10px;
	}
</style>
