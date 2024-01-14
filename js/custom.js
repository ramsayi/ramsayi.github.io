// 监听所有code标签的点击事件
document.addEventListener('click', function (e) {
  console.log(e.target.tagName)
  if (e.target.tagName === 'CODE') {
    // 获取code标签的文本内容
    const text = e.target.innerText
    // 创建textarea元素
    const textarea = document.createElement('textarea')
    // 设置textarea的内容为code标签的文本内容
    textarea.value = text
    // 将textarea元素插入到body中
    document.body.appendChild(textarea)
    // 选中textarea元素中的内容
    textarea.select()
    // 执行复制命令
    document.execCommand('copy')
    // 移除textarea元素
    document.body.removeChild(textarea)
  }
})

// 监听路由是包含/categories，包含就执行
if (location.pathname.includes('/categories')) {
  // 获取category-lists元素
  const categoryLists = document.querySelector('.category-lists')
  // 自定义要插入的html
  const html = `
    <a href="https://www.baidu.com" target="_blank">百度一下</a>
    <a href="https://www.google.com" target="_blank">谷歌一下</a>
  `
  // 为category-lists添加子元素
  categoryLists.innerHTML = html + categoryLists.innerHTML
}