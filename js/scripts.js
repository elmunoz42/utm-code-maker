//business logic

function utmCodeMaker(url, source, medium, name, term, content) {

  var params = [];
  var code = url + "?utm_source=" + source;

  if (medium){
    params.push("utm_medium=" + medium);
  }
  if (name){
    params.push("utm_name=" +name);
  }
  if (term){
    params.push("utm_term=" +term);
  }
  if (content){
    params.push("utm_content=" +content);
  }
  for (var i = 0; i < params.length; i++) {
    code = code + "&" + params[i];

  }

  return code;
}

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

// NOTE: ADD YOUR DATABASE/CRM API SAVING METHOD HERE //

//

// user interface logic
$(document).ready(function() {

  ///submit event///
  $("form#order-form").submit(function(event) {
    event.preventDefault();

    ///Input///
    var webPage=$("#web-page").val();
    var campaignSource=$("#campaign-source").val();
    var campaignMedium=$("#campaign-medium").val();
    var campaignName=$("#campaign-name").val();
    var campaignTerm=$("#campaign-term").val();
    var campaignContent=$("#campaign-content").val();
    var utmCode=utmCodeMaker(webPage, campaignSource, campaignMedium, campaignName, campaignTerm, campaignContent);

    // Output
    $("#output").text(utmCode);


  });
});
