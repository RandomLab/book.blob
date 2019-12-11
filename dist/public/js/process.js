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
        if($(page).hasClass("pagedjs_right_page")){
          console.log($(page))
          var num_left_page = $(page).attr("data-page-number")-1;
          console.log(num_left_page);
          var left_page = $("#page-"+num_left_page.toString());
          console.log(left_page);
          new_note = $("<span class=note></span>")

          while($(page).find(".notes").height() > $(page).find(".pagedjs_area").height()+lineheight){
            //console.log($(page).find(".notes").children(":first"));
            words = $(page).find(".notes").children(":first").text().split(" ");
            var word_to_move = words[0];
            $(page).find(".notes").children(":first").text(words.slice(1).join(" "));
            //console.log(word_to_move);

            new_note_text = new_note.text() + word_to_move + " "
            new_note.text(new_note_text)
          }
          console.log(new_note)
          if(left_page.find(".notes").length > 0){
            left_page.find(".notes").append(new_note);
          }else{
            left_page.find(".subchapter").append("<span class=notes>"+new_note[0].outerHTML+"</span>")
          }
        }
      }
    }
    /* in the case where the heigh of the page_content is manually changed
    margin_bottom_height = $(page).parent().parent().find(".pagedjs_margin-bottom").height()
    if (margin_bottom_height > 60){
      console.log(margin_bottom_height);
      $(page).find(".notes").css("bottom", 60-margin_bottom_height);
    }*/
}

function image_pleine_page(page){
  if($(page).find("figure").length>0){
    fig = $(page).find("figure")
    if(fig[0].nextElementSibling == null && fig[0].previousElementSibling == null ){
      fig.addClass("full-page");
    }
  }
}

function image_sur_grille(page,breakToken){
  var images = $(page).find("img");
  for(var i = 0; i < images.length ; i++){
    console.log(breakToken);
    console.log(images[i]);
    images[i].style.height = (Math.round(images[i].height / lineheight)*lineheight) + "px";
  }
}
