var get=function(url){
	uni.request({
		url,
		success:(res)=>{
			console.log("res="+res)
			return res.data;
			
		},
		fail: (res) => {
			return res.errMsg;
		}
	})
}

export default {
	get
}