/*config Hyphenopoly*/
var Hyphenopoly = {
    require: {
        "fr": "FORCEHYPHENOPOLY"
    },
    setup: {
      dontHyphenate: {
        h6: true,
        cite: true,
        figcaption: true
      },
      minWordLength: 12
    },
    paths: {
         patterndir: "./js/hyphens/patterns/",
         maindir: "./js/hyphens/"
     },
    selectors: {
        ".hyphenate": {
            minWordLength: 12
        }
    }
};

console.log("preprocess");

/* do things on the HTML doc before pagedjs */

function image_container(){ // juste add class on image_container for style
  images = document.querySelectorAll("p img");
  for(var i = 0; i < images.length ;  i++){
    image = images[i]
    image.parentElement.classList.add("image_container");
  }
}

function hard_justify(){
  $(".author").each(function(i, span){
    var inject = '';
    //console.log(span)
    var letters = span.innerText
    //console.log(letters)
    for(var j=0; j<letters.length;j++){
        inject += '<span class=char_"'+(j)+'" aria-hidden="true">'+letters[j]+'</span>';
    }
    span.innerHTML = inject;
  });
}

function veuves(){
  $("p").each(function(i, para){
      //console.log(para);
      para.innerHTML = para.innerHTML.replace(/(.*) (.*)/g,"$1&nbsp;$2");
  });
}

$(document).ready(function(){
  image_container();
  hard_justify();
  veuves();
});
