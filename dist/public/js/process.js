/*config Paged*/
class MyHandler extends Paged.Handler {
  constructor(chunker, polisher, caller) {
    super(chunker, polisher, caller);
  }
  beforeParsed(content){
    //console.log(content)
  }
  beforePageLayout(page){
    //specific_size();
  }

  afterPageLayout(pageElement, page, breakToken) {
    footnote(pageElement);
    image_pleine_page(pageElement);
    image_sur_grille(pageElement,breakToken);
    section_auteurs(pageElement);
    section_introduction(pageElement);
    //console.log(pageElement);
    //console.log(page);
  }

  afterRendered(pages){
  }

}
Paged.registerHandlers(MyHandler);
/*end config Paged*/

function footnote(page){
    $(page).find(".note").wrapAll("<div class='notes'/>");
    //console.log($(page).find(".notes"));
    var chap = $(page).find(".subchapter").attr("data-id")
    if(chap){
      if($(page).find(".notes").height() > $(page).find(".pagedjs_area").height()){

        // passage de la page de droite à celle de gauche
        if($(page).hasClass("pagedjs_right_page")){
          var num_left_page = $(page).attr("data-page-number")-1;
          var left_page = $("#page-"+num_left_page.toString());
          var new_note = $("<span class='note'></span>")
          var i = 0;

          while($(page).find(".notes").height() > $(page).find(".pagedjs_area").height()+lineheight){
            //console.log($(page).find(".notes").children(":first"));
            var first_note = $(page).find(".notes").children()[i]
            var words = $(first_note).text().split(" ");
            var word_to_move = words[0];
            $(first_note).text(words.slice(1).join(" "));
            //console.log(word_to_move);

            var new_note_text = new_note.text() + word_to_move + " "
            new_note.text(new_note_text)

            if (words.length == 1){
              i ++;
              $(notesOverflow).append("<span class='note'></span>")
            }
          }
          //console.log(new_note)
          if(left_page.find(".notes").length > 0){
            left_page.find(".notes").append(new_note);
          }else{
            left_page.find(".subchapter").append("<span class=notes>"+new_note[0].outerHTML+"</span>")
          }
          $(left_page).find(".note").each(function(){
            first_word = $(this).text().split(" ")[0];
            if (/\d{1,2}/.test(first_word)){
              $(this).html($(this).html().replace(first_word+" ", ""));
              $(this).attr("data-count",first_word);
            }
          });
        }

        // mise en overflow des notes en trop sur la page de gauche
        if($(page).hasClass("pagedjs_left_page") && $(page).find(".notes").height() > $(page).find(".pagedjs_area").height()+lineheight){
          var notesOverflow = $("<span class='notesOverflow'></span>");

          $(notesOverflow).append("<span class='note'></span>")
          var i = 0;

          while($(page).find(".notes").height() > $(page).find(".pagedjs_area").height()+lineheight){
            var first_note = $(page).find(".notes").children()[i];
            var words = $(first_note).text().split(" ");
            var word_to_move = words[0];
            $(first_note).text(words.slice(1).join(" "));
            //console.log($(notesOverflow).children()[i]);
            var notesOverflow_text = $(notesOverflow.children()[i]).text() + word_to_move + " ";
            $(notesOverflow.children()[i]).text(notesOverflow_text);
            if (words.length == 1){
              i ++;
              $(notesOverflow).append("<span class='note'></span>");
            }
          }
          $(page).find(".subchapter").append(notesOverflow);
        }
      }
    }
    $(page).find(".note").each(function(){
      first_word = $(this).text().split(" ")[0];
      if (/\d{1,2}/.test(first_word)){
        $(this).html($(this).html().replace(first_word+" ", ""));
        $(this).attr("data-count",first_word);
      }
    });
    /* in the case where the heigh of the page_content is manually changed
    margin_bottom_height = $(page).parent().parent().find(".pagedjs_margin-bottom").height()
    if (margin_bottom_height > 60){
      console.log(margin_bottom_height);
      $(page).find(".notes").css("bottom", 60-margin_bottom_height);
    }*/
}

function image_pleine_page(page){
  console.log(page)
  if($(page).find("figure").length>0){
    var ratio_page = $(page).find(".pagedjs_page_content")[0].offsetHeight / $(page).find(".pagedjs_page_content")[0].offsetWidth
    var fig = $(page).find("figure")
    if(fig[0].nextElementSibling == null && fig[0].previousElementSibling == null ){
      fig.addClass("full-page");
      var img = $(fig).find("img")[0]
      var ratio_img = img.height / img.width
      if (ratio_img > ratio_page){
        $(img).addClass("tooHeight");
      }
    }
  }
}

function image_sur_grille(page,breakToken){
  var images = $(page).find("img");
  if ($(images).parent().hasClass("full-page") == false){
    for(var i = 0; i < images.length ; i++){
      console.log(breakToken);
      console.log(images[i]);
      images[i].style.height = (Math.round(images[i].height / lineheight)*lineheight) + "px";
    }
  }
}

function section_introduction(page){
  if($(page).find(".subchapter")[0]){
    if($(page).find(".subchapter")[0].classList.contains("interview")){
     $(page).find("hr").nextAll().wrapAll("<div class='introduction'></div>")
    }
  }
}

function section_auteurs(page){
  $(page).find(".author").wrapAll("<div class='authors'></div>")
}
