function validateForm() {
	var firstName = document.forms["myForm"]["firstName"].value;
	var lastName = document.forms["myForm"]["lastName"].value;
	var email = document.forms["myForm"]["email"].value;
	var phone = document.forms["myForm"]["phone"].value;

	if (firstName == "" || lastName == "" || email == "" || phone == "") {
		alert("Please fill in all fields");
		return false;
	}
}
