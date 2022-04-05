import Snake from './Snake'
import Food from './Food'
import ScorePanel from './ScorePanel'
import OverPanel from './OverPanel'

// 游戏控制器，控制其他所有类
class GameControl {
  snake: Snake
  food: Food
  scorePanel: ScorePanel
  overPanel: OverPanel
  // 表示蛇的移动方向（按键的方向）
  direction: string = 'ArrowRight'
  // 判断是否存活
  isLive: boolean = false
  // 初始移动速度
  speed: number
  // 每级加速
  accelerate: number
  constructor(speed: number = 300, accelerate: number = 30) {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel()
    this.overPanel = new OverPanel()
    this.speed = speed
    this.accelerate = accelerate
    this.init()
  }

  // 游戏的初始化方法
  init() {
    // 随机生成食物坐标
    this.food.change()
    // 绑定键盘事件
    document.addEventListener('keydown', this.keyDownHandler.bind(this))
    this.run()
  }

  // 键盘按下的响应函数
  keyDownHandler(e: KeyboardEvent) {
    //   if(e.key)
    this.direction = e.key
  }

  // 控制蛇移动的方法
  run() {
    this.isLive = true
    let X = this.snake.X
    let Y = this.snake.Y

    // 判断蛇的移动方向
    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        Y -= 10
        break
      case 'ArrowDown':
      case 'Down':
        Y += 10
        break
      case 'ArrowLeft':
      case 'Left':
        X -= 10
        break
      case 'ArrowRight':
      case 'Right':
        X += 10
        break
      default:
        break
    }

    // 检查蛇是否吃到食物
    this.checkEat(X, Y)

    // 修改蛇的X值和Y值
    try {
      this.snake.X = X
      this.snake.Y = Y
    } catch (e: any) {
      this.isLive = false
      this.overPanel.hideOverPanel(false)
    }

    this.isLive &&
      setTimeout(
        this.run.bind(this),
        this.speed - (this.scorePanel.level - 1) * this.accelerate
      )
  }

  // 检查蛇是否吃到食物
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      // 重置食物位置
      this.food.change()
      // 增加分数
      this.scorePanel.addScore()
      // 蛇增加一节
      this.snake.addBody()
    }
  }
}

export default GameControl
