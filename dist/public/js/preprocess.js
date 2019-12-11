/*config Hyphenopoly*/
var Hyphenopoly = {
    require: {
        "fr": "FORCEHYPHENOPOLY"
    },
    setup: {
      exceptions: {
          "global": "Gulbirra, Kelvin, Solaris, Jupiter",
      },
      dontHyphenate: {
        h2: true,
        h6: true,
        cite: true,
        figcaption: true
      },
      selectors: {
        ".hyphenate":{
          minWordLength: 7,
          orphanControl: 2
        }
      }
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
const lineheight = 18;
/* do things on the HTML doc before pagedjs */

function image_container(){ // met les images dans des balises figure pour intégrer les légendes.
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
    $(span).wrap("<div class='authors'></div>");
  });
}

function veuves(){
  $("p").each(function(i, para){
      //console.log(para);
      para.innerHTML = para.innerHTML.replace(/(.*) (.*)/g,"$1&nbsp;$2");
  });
}

function no_hyphen_last_word(){
  $("p").each(function(i, para){
    lastw = para.innerHTML.split(" ").slice(-1)[0];
    nlastw = lastw.replace(/\u00AD/g, '');
    para.innerHTML = para.innerHTML.replace(lastw, nlastw);
  });
}

$(document).ready(function(){
  image_container();
  hard_justify();
  $( 'p:empty' ).remove();
  //no_hyphen_last_word();
  //veuves();
});
