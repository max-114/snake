import ScorePanel from './ScorePanel'
class ConfigPanel {
  speed = localStorage.getItem('speed')
    ? Number(localStorage.getItem('speed'))
    : 300
  accelerate = this.speed / 10
  configContanerEl: HTMLElement
  resetRecordEl: HTMLElement
  speedEl: HTMLElement
  speedUpEl: HTMLElement
  speedDownEl: HTMLElement
  closEl: HTMLElement
  scorePanel: ScorePanel
  constructor() {
    this.configContanerEl = document.getElementById('config-contaner')!
    this.resetRecordEl = document.getElementById('reset-record')!
    this.speedEl = document.getElementById('speed')!
    this.speedUpEl = document.getElementById('speed-up')!
    this.speedDownEl = document.getElementById('speed-down')!
    this.closEl = document.getElementById('close-config')!
    this.scorePanel = new ScorePanel()!
    this.init()
  }
  init() {
    this.speedEl.innerHTML = `speed:${this.speed}`
    // 重置记录
    this.resetRecordEl.addEventListener('click', () => {
      localStorage.setItem('snakeRecord', '0')
    })
    // 增加初始速度
    this.speedUpEl.addEventListener('click', e => {
      this.speedChangeHandler(e, 'up')
    })
    // 降低初始速度
    this.speedDownEl.addEventListener('click', e => {
      console.log('object')
      this.speedChangeHandler(e, 'down')
    })
    // 关闭设置面板
    this.closEl.addEventListener('click', () => {
      this.hideConfigPanel(true)
    })
  }

  hideConfigPanel(hidden: boolean) {
    this.configContanerEl.style.visibility = hidden ? 'hidden' : 'visible'
    if (hidden) {
      // something
    }
  }

  speedChangeHandler(e: MouseEvent, type: string) {
    const change = type == 'up' ? -30 : 30
    this.speed += change
    this.accelerate = this.speed / 10
    this.speedEl.innerHTML = `speed:${this.speed}`
  }
}

export default ConfigPanel
