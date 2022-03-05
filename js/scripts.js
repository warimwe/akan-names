function checkAkanName() {
  var dayOfBirth = document.date_form.dayOfBirth.value;
  var monthOfBirth = document.date_form.monthOfBirth.value;
  var yearOfBirth = document.date_form.yearOfBirth.value;
  var gender = document.date_form.gender.value;
  // alert(dayOfBirth + monthOfBirth + yearOfBirth + gender);

  var weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var maleAkanNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  var femaleAkanNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ];

  //document.getElementById("form_id")

  if (monthOfBirth <= 0 || monthOfBirth > 12) {
    // month is incorrect
    alert("Invalid month, try again");
  } else {
    // month is correct
    // check if day is correct
    if (dayOfBirth <= 0 || dayOfBirth > 31) {
      alert("Invalid day, try again");
    }
  }

  var date = yearOfBirth + "-" + monthOfBirth + "-" + dayOfBirth;

  var d = new Date(date);

  var day = d.getDay();
}
