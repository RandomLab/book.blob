/*config Paged*/
class MyHandler extends Paged.Handler {
  constructor(chunker, polisher, caller) {
    super(chunker, polisher, caller);
  }
  beforeParsed(content){
    //console.log(content)
  }
  beforePageLayout(page){
    //console.log(page);
  }

  afterPageLayout(pageElement, page, breakToken) {
    footnote(pageElement)
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
    /* in the case where the heigh of the page_content is manually changed
    margin_bottom_height = $(page).parent().parent().find(".pagedjs_margin-bottom").height()
    if (margin_bottom_height > 60){
      console.log(margin_bottom_height);
      $(page).find(".notes").css("bottom", 60-margin_bottom_height);
    }*/
}
