//add date and time
$("p#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
//save button function
$(".saveBtn").on("click", function(){
    var userInput = $(this).siblings("textarea").val();
    var hour = $(this).siblings("textarea").attr("id");
    localStorage.setItem(hour, userInput);
});
//add color class for past, future and present
var time = parseInt(moment().format("H"));
for(let i = 0; i < 24; i++) {
    let $textarea = $("textarea#" + i);
    if (time === i){
        $textarea.addClass("present");
    } else if (time < i){
        $textarea.addClass("future");
    }   else{
        $textarea.addClass("past");
    }
}
//save to local storage by time slot
$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#13").val(localStorage.getItem("13"));
$("#14").val(localStorage.getItem("14"));
$("#15").val(localStorage.getItem("15"));
$("#16").val(localStorage.getItem("16"));
$("#17").val(localStorage.getItem("17"));



