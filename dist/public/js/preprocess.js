image_container();

function image_container(){
  images = document.querySelectorAll("p img");
  for(var i = 0; i < images.length ;  i++){
    image = images[i]
    image.parentElement.classList.add("image_container");
  }
}

console.log("preprocess");

function pagedjs() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "js/paged.polyfill.js";
  document.getElementsByTagName("head")[0].appendChild(script);
}
