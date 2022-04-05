import './style/index.less'

import OverPanel from './moduls/OverPanel'
import MenuPanel from './moduls/MenuPanel'

new OverPanel()

// 暂时解决记录刷新问题
const recordEl = document.getElementById('record')!
recordEl.innerHTML = localStorage.getItem('snakeRecord')!

const menuPanel = new MenuPanel()
