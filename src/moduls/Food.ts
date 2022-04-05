// 定义食物类Food
class Food {
  // 定义一个属性表示食物对应的元素
  foodEl: HTMLElement
  constructor() {
    // 获取页面中的Food元素
    this.foodEl = document.getElementById('food')!
  }

  // 获取食物X轴坐标
  get X() {
    return this.foodEl.offsetLeft
  }
  // 获取食物Y轴坐标
  get Y() {
    return this.foodEl.offsetTop
  }
  // 修改食物位置
  change() {
    let left = Math.round(Math.random() * 29) * 10
    let top = Math.round(Math.random() * 29) * 10
    this.foodEl.style.left = left + 'px'
    this.foodEl.style.top = top + 'px'
  }
}

export default Food
