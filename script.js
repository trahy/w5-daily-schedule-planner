// set current date
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

    // if time is before current hour = past, equivalent = present, after = future
    if (otherHour < curHour) {
      $(this).addClass("past");
    } else if (otherHour === curHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}

// when save button 'clicked', store key = planHour and value = planText
$('.saveBtn').on('click', function () {
  var planText = $(this).siblings(".description").val();
  var planHour = $(this).siblings(".hour").text();

  // store in local storage
  localStorage.setItem(planHour, planText);
});

// when plan is set, function 'gets' the 'stored' information and remain displayed
function saveItem() {

  $(".hour").each(function() {
      var planHour = $(this).text();
      var planText = localStorage.getItem(planHour);

      if(planText !== null) {
          $(this).siblings(".description").val(planText);
      }
  });
}