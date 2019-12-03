
console.log("postprocess");

function interface(){
  var pages = document.querySelectorAll(".pagedjs_area");
  for(var i = 0; i < pages.length ;  i++){
    page = pages[i]
    var chars = page.innerText.length;
    var mots = page.innerText.split(" ").length;
    var span = document.createElement("span");
    span.innerText = chars + " chars ; " + mots + " mots ";
    span.classList.add("interface");
    page.appendChild(span)
  }
}
