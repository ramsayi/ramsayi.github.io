// 选择类名为category-lists的元素
var categoryLists = document.querySelector('.category-lists');
// 将子元素清除
categoryLists.innerHTML = '';
// 创建自定义元素
var customElement = document.createElement('div');
// 添加类名
customElement.className = 'category-list';
// 添加内容
customElement.innerHTML = '<a href="https://www.baidu.com" target="_blank">百度</a>';
// 将自定义的元素添加到categoryLists中
categoryLists.appendChild(customElement);