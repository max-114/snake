class OverPanel {
  overEle: HTMLElement
  restartEle: HTMLElement
  quitEle: HTMLElement
  constructor() {
    this.overEle = document.getElementById('game-over')!
    this.restartEle = document.getElementById('restart')!
    this.quitEle = document.getElementById('quit')!
    this.init()
  }
  init() {
    this.hideOverPanel(true)
    // quit按钮事件
    this.quitEle.addEventListener('click', () => {
      window.close()
    })
    // restart按钮事件
    this.restartEle.addEventListener('click', this.restartHandler)
  }

  // 控制失败界面的显示
  hideOverPanel(hidden: boolean) {
    this.overEle.style.visibility = hidden ? 'hidden' : 'visible'
  }

  restartHandler() {
    window.location.reload()
  }
}

export default OverPanel
