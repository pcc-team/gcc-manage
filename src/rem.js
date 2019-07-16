// 设置 rem 函数
(function setRem() {
  const baseSize = 32
  // 当前页面宽度相对于 1366 宽的缩放比例，可根据自己需要修改。
  // const scale = document.documentElement.clientWidth / 1366
  const scale = window.screen.width / 1366
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize = baseSize * scale + 'px'
})()