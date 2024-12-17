const texts = [
  '7:00   起床洗漱',
  '7:30   吃早餐',
  '8:00   出门上班',
  '9:00   到达公司',
  '12:00  下班和同事吃午餐',
  '12:30  中午休息',
  '13:00  开始工作',
  '18:00  下班回家',
  '19:00  做饭吃晚餐',
  '20:00  跑步一小时',
  '21:30  娱乐休闲',
  '22:30  洗漱睡觉',
  '......'
]
Page({
  data: {
    text: '',
    canAdd: true,
    canRemove: false
  },
  extraLine: [],
  add() {
    this.extraLine.push(texts[this.extraLine.length % 12])
    this.setData({
      text: this.extraLine.join('\n'),
      canAdd: this.extraLine.length < 12,
      canRemove: this.extraLine.length > 0
    })
  },
  remove() {
    if (this.extraLine.length > 0) {
      this.extraLine.pop()
      this.setData({
        text: this.extraLine.join('\n'),
        canAdd: this.extraLine.length < 12,
        canRemove: this.extraLine.length > 0,
      })
    }
  }
})