javascript: (function () {
  var urlDocument = document.URL;
  var elementA = document.createElement('a');
  elementA.href = urlDocument;
  var elementAHostname = elementA.hostname;
  var validHostnames = ['youtube.com', 'www.youtube.com', 'm.youtube.com'];
  validHostnames.indexOf(elementAHostname) !== -1 ? window.location.href = 'http://keepvid.com/?url=' + encodeURIComponent(urlDocument) : window.alert('This bookmarklet only works in YouTube pages.');
})();
