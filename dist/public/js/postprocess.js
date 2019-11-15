function show() {
  pagedjs();
}

function image_container(){
  images = document.querySelectorAll("p img");
  for(var i = 0; i < images.length ;  i++){
    image = images[i]
    image.parentElement.classList.add("image_container");
  }
}

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

function footnote(){
  $(".pagedjs_page_content").each(function(i, page){
      notes = page.getElementsByClassName("note");
      console.log(notes);
      for (var j = notes.length-1; j > -1 ; j--){
          console.log(notes[j])
          if (j < notes.length-1){
              notes[j].style.top = notes[j+1].offsetTop - notes[j+1].offsetHeight;
          }
      }
  });
}

image_container();
show();
