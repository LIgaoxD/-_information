<template>
	<view class="content">
		<form @submit="formSubmit" @reset="formReset">
			<view>
				<view class="title">switch</view>
				<view>
					<switch name="switch" />
				</view>
			</view>
			<view>
				<view class="title">radio</view>
				<radio-group name="radio">
					<label>
						<radio value="radio1" /><text>选项一</text>
					</label>
					<label>
						<radio value="radio2" /><text>选项二</text>
					</label>
				</radio-group>
			</view>
			<view>
				<view class="title">checkbox</view>
				<checkbox-group name="checkbox">
					<label>
						<checkbox value="checkbox1" /><text>选项一</text>
					</label>
					<label>
						<checkbox value="checkbox2" /><text>选项二</text>
					</label>
				</checkbox-group>
			</view>
			<view>
				<view class="title">slider</view>
				<slider value="50" name="slider" show-value></slider>
			</view>
			<view>
				<view class="title">input</view>
				<input name="input" placeholder="这是一个输入框" />
			</view>
			<view>
				<button form-type="submit">Submit</button>
				<button type="default" form-type="reset">Reset</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var formdata = e.detail.value
				uni.showModal({
					content: '表单数据内容：' + JSON.stringify(formdata),
					showCancel: false
				});
			},
			formReset: function(e) {
				console.log('清空数据')
			}
		}
	}
</script>

<style>
	.title {
		text-align: center;
		font-size: 20px;
	}
</style>
