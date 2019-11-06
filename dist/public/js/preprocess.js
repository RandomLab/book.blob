
console.log("preprocess");

function pagedjs() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "js/paged.polyfill.js";
  document.getElementsByTagName("head")[0].appendChild(script);
}
