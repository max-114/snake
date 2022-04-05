class Snake {
  // 表示蛇的元素
  head: HTMLElement
  // 蛇的身体（包括蛇头）
  bodies: HTMLCollection
  // 蛇的容器
  elment: HTMLElement
  constructor() {
    this.elment = document.getElementById('snake')!
    this.head = document.querySelector('#snake>div')!
    this.bodies = this.elment.getElementsByTagName('div')
  }

  // 获取坐标
  get X() {
    return this.head.offsetLeft
  }
  get Y() {
    return this.head.offsetTop
  }
  // 设置蛇头坐标
  set X(value) {
    if (this.X == value) return
    if (value < 0 || value > 290) {
      throw new Error('蛇撞墙了！')
    }

    // 控制蛇掉头，如果第一节身体与蛇头新位置重合则判定为掉头
    if (
      this.bodies[1] &&
      (this.bodies[1] as HTMLElement).offsetLeft === value
    ) {
      if (value > this.X) value = this.X - 10
      else value = this.X + 10
    }

    this.moveBody()
    this.head.style.left = value + 'px'
    this.checkHeadBody()
  }
  set Y(value) {
    if (this.Y == value) return
    if (value < 0 || value > 290) {
      throw new Error('蛇撞墙了！')
    }

    // 控制蛇掉头
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      if (value > this.Y) value = this.Y - 10
      else value = this.Y + 10
    }

    this.moveBody()
    this.head.style.top = value + 'px'
    this.checkHeadBody()
  }
  // 蛇增加身体
  addBody() {
    this.elment.insertAdjacentHTML('beforeend', '<div></div>')
  }

  // 移动身体
  moveBody() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      // 获取前一节身体位置
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop

      // 将值设为当前身体位置
      ;(this.bodies[i] as HTMLElement).style.left = X + 'px'
      ;(this.bodies[i] as HTMLElement).style.top = Y + 'px'
    }
  }

  // 检查头和身体是否相撞
  checkHeadBody() {
    for (let i = 1; i < this.bodies.length; i++) {
      let body = this.bodies[i] as HTMLElement
      if (this.X === body.offsetLeft && this.Y === body.offsetTop) {
        throw new Error('撞到自己了~~')
      }
    }
  }
}

export default Snake
