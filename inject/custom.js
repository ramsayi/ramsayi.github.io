// 代码点击就可以复制
;(function () {
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
})()

// // 点击宽屏
// ;(function () {
//   // 获取#rightside-config-show
//   const rightsideConfigShow = document.querySelector('#rightside-config-show')

//   // 创建按钮元素
//   const button = document.createElement('button')
//   button.id = 'show-wide-content'
//   button.textContent = '超宽'

//   // 将按钮添加到#rightside-config-show中
//   rightsideConfigShow.appendChild(button)

//   // 获取#show-wide-content
//   const showWideContent = document.querySelector('#show-wide-content')

//   // 定义点击事件处理函数
//   function showWideContentHandler() {
//     const asideContent = document.querySelector('#aside-content')
//     const contentInner = document.querySelector('#content-inner')

//     // 设置动画
//     asideContent.style.transition = 'width 1s ease-in-out'
//     contentInner.style.transition = 'max-width 1s ease-in-out'

//     if (asideContent.style.width === '600px') {
//       // 恢复默认样式
//       asideContent.style.width = ''
//       contentInner.style.maxWidth = ''
//     } else {
//       // 设置新样式
//       asideContent.style.width = '600px'
//       contentInner.style.maxWidth = '1920px'
//     }
//   }

//   // 为#show-wide-content添加点击事件监听器
//   showWideContent.addEventListener('click', showWideContentHandler)
// })()
