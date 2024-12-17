<template>
  <view class="content">
    <view class="text">这是另一个页面</view>
    <button @click="back">返回首页</button>
  </view>
</template>

<script>
  export default {
    methods: {
      back(){
        uni.navigateBack();
      }
    },
    onLoad(option) {
      console.log('id: ', option.id);
      console.log('name: ', option.name);
    }
  }
</script>
<style>
  .content {
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	justify-content: center;
  }
  .text {
  	height: 200rpx;
  	text-align: center;
  	margin-top: 200rpx;
  	margin-left: auto;
  	margin-right: auto;
  	margin-bottom: 50rpx;
    font-size: 36px;
    font-weight: bold;
  }
</style>
