import GameControl from '../moduls/GameControl'
import ConfigPanel from '../moduls/ConfigPanel'

class MenuPanel {
  startEl: HTMLElement
  setEl: HTMLElement
  config: ConfigPanel
  gameControl: GameControl | null
  constructor() {
    this.startEl = document.getElementById('start')!
    this.setEl = document.getElementById('settings')!
    this.config = new ConfigPanel()
    this.gameControl = null
    this.init()
  }
  init() {
    this.startEl.addEventListener('click', this.playHandler.bind(this))
    this.setEl.addEventListener('click', this.setHandler.bind(this))
  }

  playHandler() {
    if (this.gameControl) return
    this.gameControl = new GameControl(
      this.config.speed,
      this.config.accelerate
    )
  }

  setHandler() {
    if (this.gameControl !== null) {
      if (this.gameControl.isLive) return
    }
    this.config.hideConfigPanel(false)
  }
}

export default MenuPanel
