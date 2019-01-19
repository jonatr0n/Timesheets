<<<<<<< HEAD
// Initialize Firebase
// var config = {
//   apiKey: "AIzaSyA6GpaXKRQ6JiwqeLGL7H16Z3BqAUR-yOo",
//   authDomain: "logicproject-a9968.firebaseapp.com",
//   databaseURL: "https://logicproject-a9968.firebaseio.com",
//   projectId: "logicproject-a9968",
//   storageBucket: "logicproject-a9968.appspot.com",
//   messagingSenderId: "731850213115"
// };
// firebase.initializeApp(config);

$("button").on("click", function (event) {
  var empName = $("#name").val().trim();
  var empRole = $("#role").val().trim();
  var empDate = $("#date").val().trim();
  var empMonthsWorked;
  var empRate = $("#rate").val().trim();
  var empTotalBill;

  console.log(empName);
  var newTRow = $("<tr>").append(

    $("<td>").text(empName),
    $("<td>").text(empRole),
    $("<td>").text(empDate),
    $("<td>").text(empMonthsWorked),
    $("<td>").text(empRate),
    $("<td>").text(empTotalBill),

  );

  $("#tbody").append(newTRow);
  $('#name').val('');
  $('#role').val('');
  $('#date').val('');
  $('#rate').val('');

});
=======
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA6GpaXKRQ6JiwqeLGL7H16Z3BqAUR-yOo",
    authDomain: "logicproject-a9968.firebaseapp.com",
    databaseURL: "https://logicproject-a9968.firebaseio.com",
    projectId: "logicproject-a9968",
    storageBucket: "logicproject-a9968.appspot.com",
    messagingSenderId: "731850213115"
  };
  firebase.initializeApp(config);

  $("button").on("click", function (event) {
    var empName = $("#name").val().trim();
    var empRole = $("#role").val().trim();
    var empRole = $("#date").val().trim();
    var empMonthsWorked;
    var empRate = $("#rate").val().trim();
    var empTotalBill;
  
    console.log(empName);
    var newTRow = $("<tr>").append(
  
      $("<td>").text(empName),
      $("<td>").text(empRole),
      $("<td>").text(empRole),
      $("<td>").text(empMonthsWorked),
      $("<td>").text(empRate),
      $("<td>").text(empTotalBill),
  
    );
  
    $("#tbody").append(newTRow);
  
  });
>>>>>>> 8a7d2bccd4e6de1a7ab7e7811595640914fd385c
