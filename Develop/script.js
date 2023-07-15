// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// set current
$("#currentDay").text(dayjs().format('dddd, D MMMM YYYY'));

// call functions
timeBlock();
saveItem();

// determines past, current or future hour time blocks
function timeBlock() {

  // gets current hour
  var curHour = dayjs().hour();

  // splits time-block class and creates new var under new id
  $(".time-block").each(function () {
    var otherHour = parseInt($(this).attr("id"));

    // 
    if (otherHour < curHour) {
      $(this).addClass("past");
    } else if (otherHour === curHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}
