Page({
	onReady: function(e) {
		for(var i=0;i<this.data.musicArray.length;i++){
			this.data.audioCtx[i] = wx.createAudioContext(this.data.musicArray[i].id)
		}
	},
	data: {
		playId: '',//当前播放音乐id
		audioCtx:[],//audio控件对象
		musicArray: [{
			name: "神曲1",
			id:"myAudio1",
			musicSrc: "../music/music.mp3",
			imgSrc: "../img/img.jpg",
			author: "张老师"
		}, {
			name: "神曲2",
			id:"myAudio2",
			musicSrc: "../music/music.mp3",
			imgSrc: "../img/img.jpg",
			author: "刘老师"
		}, {
			name: "神曲3",
			id:"myAudio3",
			musicSrc: "../music/music.mp3",
			imgSrc: "../img/img.jpg",
			author: "唐老师"
		}, {
			name: "神曲4",
			id:"myAudio4",
			musicSrc: "../music/music.mp3",
			imgSrc: "../img/img.jpg",
			author: "王老师"
		}, {
			name: "神曲5",
			id:"myAudio5",
			musicSrc: "../music/music.mp3",
			imgSrc: "../img/img.jpg",
			author: "李老师"
		}, {
			name: "神曲6",
			id:"myAudio6",
			musicSrc: "../music/music.mp3",
			imgSrc: "../img/img.jpg",
			author: "张老师"
		}, {
			name: "神曲7",
			id:"myAudio7",
			musicSrc: "../music/music.mp3",
			imgSrc: "../img/img.jpg",
			author: "谢老师"
		}, {
			name: "神曲8",
			id:"myAudio8",
			musicSrc: "../music/music.mp3",
			imgSrc: "../img/img.jpg",
			author: "颜老师"
		}, {
			name: "神曲9",
			id:"myAudio9",
			musicSrc: "../music/music.mp3",
			imgSrc: "../img/img.jpg",
			author: "欧阳老师"
		}, {
			name: "神曲10",
			id:"myAudio10",
			musicSrc: "../music/music.mp3",
			imgSrc: "../img/img.jpg",
			author: "郭老师"
		}]
	},
	// 点击播放时,暂停正在播放的音乐
	play:function (e){
		let id=e.currentTarget.dataset.flag
		for(var i=0;i<this.data.audioCtx.length;i++){
			if( this.data.playId==this.data.audioCtx[i].audioId){
				this.data.audioCtx[i].pause()
				this.data.playId=id
				return;
			}
		}
		this.data.playId=id
	}
})
