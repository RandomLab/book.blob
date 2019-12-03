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
    },
    handleEvent: {
       hyphenopolyEnd: function (e) {
         window.PagedPolyfill.preview();
       }
     }

};

console.log("preprocess");

/* do things on the HTML doc before pagedjs */

function image_container(){ // juste add class on image_container for style
  var images = document.querySelectorAll("img");
  for(var i = 0; i < images.length ;  i++){
    //console.log(images[i].parentElement.tagName.localeCompare("P"));
    if(images[i].parentElement.tagName.localeCompare("P") == 0){
      var para = images[i].parentElement;
      //console.log(para)
      var fig = document.createElement('figure');
      fig.innerHTML = para.innerHTML;
      fig.classList.add("image_container");
      console.log(fig)
      var next = para.nextElementSibling;
      if(next){
        if (next.tagName.localeCompare("FIGCAPTION") == 0){
          fig.appendChild(next);
        }
      }
      para.parentElement.replaceChild(fig, para);
      var next = fig.nextElementSibling;
      //console.log(next);
      if(next){
        if(next.tagName.localeCompare("P") != -1 && next.innerText == "" && next.children.length == 0){
            fig.parentElement.removeChild(next);
            //console.log("remove")
        }
      }
    }else{
      var secondImage = images[i]
      if(secondImage.previousElementSibling.tagName.localeCompare("FIGURE") == 0){
        var next = false;
        if(secondImage.nextElementSibling.tagName.localeCompare("FIGCAPTION") == 0){
          next = secondImage.nextElementSibling;
        }
        fig = secondImage.previousElementSibling;
        fig.appendChild(secondImage);
        if(next){
          fig.appendChild(next);
        }
      }
    }
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
  //veuves();
});
