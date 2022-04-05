// 定义表示记分牌的类
class ScorePanel {
  record = 0
  score = 0
  level = 1
  recordEle: HTMLElement
  scoreEle: HTMLElement
  levelEle: HTMLElement
  maxLevel: number
  upScore: number
  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.recordEle = document.getElementById('record')!
    this.scoreEle = document.getElementById('score')!
    this.levelEle = document.getElementById('level')!
    this.maxLevel = maxLevel
    this.upScore = upScore
    this.init()
  }

  init() {
    this.record = localStorage.getItem('snakeRecord')
      ? Number(localStorage.getItem('snakeRecord'))
      : 0
    // 初始化记录
    this.recordEle.innerHTML = this.record + ''
  }
  // 加分
  addScore() {
    this.scoreEle.innerHTML = ++this.score + ''
    if (this.score > (this.record as number)) {
      this.upDateRocord()
    }
    if (this.score % this.upScore === 0) {
      this.levelUp()
    }
  }
  // 升级
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + ''
    }
  }

  upDateRocord() {
    this.record = this.score
    this.recordEle.innerHTML = this.record + ''
    localStorage.setItem('snakeRecord', this.record + '')
  }
}
export default ScorePanel
