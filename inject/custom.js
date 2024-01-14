// 点击code标签实现复制
function copyCode() {
  // 监听code标签的点击事件
  document.querySelector('code').addEventListener('click', function() {
    // 选中code标签
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(this);
    selection.removeAllRanges();
    selection.addRange(range);
    // 复制到剪贴板
    document.execCommand('copy');
    // 取消选中
    selection.removeAllRanges();
    // 提示
    alert('复制成功');
  });
}
copyCode();
