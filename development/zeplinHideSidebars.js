javascript: (function () {
  var elementStyle = document.createElement('style');
  elementStyle.id = 'debugCss';
  elementStyle.innerHTML = 'header, .projectSidebarRoot, .screenSidebar, .supportButton, .widgets { display: none; } main { height: calc(100vh); }';
  var elementStyleSelector = document.getElementById('debugCss');
  elementStyleSelector === null ? document.head.appendChild(elementStyle) : elementStyleSelector.parentNode.removeChild(elementStyleSelector);
})();
