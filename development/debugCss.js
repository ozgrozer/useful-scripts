javascript: (function () {
  var elementStyle = document.createElement('style');
  elementStyle.id = 'debugCss';
  elementStyle.innerHTML = '* { background-color: rgba(0, 0, 0, .05) !important; outline: 1px solid #fff !important; }';
  var elementStyleSelector = document.getElementById('debugCss');
  elementStyleSelector === null ? document.head.appendChild(elementStyle) : elementStyleSelector.parentNode.removeChild(elementStyleSelector);
})();
