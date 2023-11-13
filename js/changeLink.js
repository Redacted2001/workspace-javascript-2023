//$('body').hide().fadein(4000);
//console.log("I am here");

$('h1').click(function(){
    $(this).text("hide image");
    $('img').hide();
    $('body').children('p').slideToggle();
});

//jQuery .each function

//update img link
$('img').each(function(){
    var path = $(this).attr('src');
    var newpath = "img/"+ path;
    $(this).attr("src",newpath);
    console.log(newpath);
});

//update links to google
$('a').each(function(){
    $("a").attr("herf","https://www.google.com/");
    $(this).css("text-decoration","line-through");
});