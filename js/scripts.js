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

  if (
    monthOfBirth === "" ||
    dayOfBirth === "" ||
    yearOfBirth === "" ||
    gender === ""
  ) {
    alert("Please ensure ALL fields are correctly filled");
  } else {
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
    getAkan();
  }

  function getAkan() {
    var date = yearOfBirth + "-" + monthOfBirth + "-" + dayOfBirth;

    var d = new Date(date);

    var day = d.getDay();

    if (gender === "male") {
      document.getElementById("user_akan").innerText =
        "You were born on a " +
        weekDays[day] +
        ". Your Akan name is " +
        maleAkanNames[day];
    } else {
      document.getElementById("user_akan").innerText =
        "You were born on a " +
        weekDays[day] +
        ". Your Akan name is " +
        femaleAkanNames[day];
    }
  }
}
function resetForm() {
  document.getElementById("user_akan").innerText = "";
}
