var config = {
  apiKey: "AIzaSyA6GpaXKRQ6JiwqeLGL7H16Z3BqAUR-yOo",
  authDomain: "logicproject-a9968.firebaseapp.com",
  databaseURL: "https://logicproject-a9968.firebaseio.com",
  projectId: "logicproject-a9968",
  storageBucket: "logicproject-a9968.appspot.com",
  messagingSenderId: "731850213115"
};
firebase.initializeApp(config);
var database = firebase.database();
// database.ref().on("value", function(snapshot) {

$("button").on("click", function(event) {
  event.preventDefault();
  var empName = $("#name")
    .val()
    .trim();
  var empRole = $("#role")
    .val()
    .trim();
  var empDate = $("#date")
    .val()
    .trim();
  var empMonthsWorked;
  var empRate = $("#rate")
    .val()
    .trim();
  var empTotalBill;

  console.log(empName);
  var newTRow = $("<tr>").append(
    $("<td>").text(empName),
    $("<td>").text(empRole),
    $("<td>").text(empDate),
    $("<td>").text(empMonthsWorked),
    $("<td>").text(empRate),
    $("<td>").text(empTotalBill)
  );

  $("#tbody").append(newTRow);
  $("#name").val("");
  $("#role").val("");
  $("#date").val("");
  $("#rate").val("");

  // store data in firebase

  database.ref().set({
    empName: empName,
    empRole: empRole,
    empDate: empDate,
    empRate: empRate
  });
  // Prettify the employee start
  var empStartPretty = moment.unix(empDate).format("MM/DD/YYYY");
  console.log(empStartPretty);

  // Calculate the months worked using hardcore math
  // To calculate the months worked
  var empMonths = moment().diff(moment(empDate, "X"), "months");
  console.log(empMonths);

  // Calculate the total billed rate
  var empBilled = empMonths * empRate;
  console.log(empBilled);
});

// });
