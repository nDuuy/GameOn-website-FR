// DOM Elements

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closebtn = document.querySelector(".close");
const FormHidden = document.querySelector(".formhidden");
const heroSectionOff = document.querySelector(".hero-section");
const footerOff = document.querySelector(".footerOff");
const itsOk = document.querySelector(".itsValidate");


// which allows us to connect with the form

var RegForm = document.getElementById("formInscription");


// function which allows to manage the responsive navigation button
function editNav() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

// function for add or remove the error under the inputs 
// and i use the setting elem for check the inputs

function checkInputValidity(elem) {

	// for connect our span msg to function 
	var error = elem.parentElement.getElementsByClassName("errorMsg")[0];

	if (!elem.validity.valid) {

		// check if the aria is empty 
		elem.setAttribute("aria-invalid", true);
		// add the active class to span error
		error.classList.add("active");
		// fill the empty span with our title how filled in html 
		error.innerHTML = elem.getAttribute("title");

	} else {

		// if aria is fill 
		elem.removeAttribute("aria-invalid");
		// don't fill the span msg
		error.innerHTML = "";
		// remove the active class to span error 
		error.classList.remove("active");
	}

}

// function for check the validity of inputs fields 
// that function is set up "onSubmit" on html 

function submitRegForm() {

	// for help to debug the function and check where is block 
	// debugger;



	if (!RegForm.checkValidity()) {

		// for defined the fields input == in the RegForm we defined early check elements  
		var fields = RegForm.elements;

		// 

		for (var i = 0; i < fields.length; i++) {

			// for check is the input is submit btn and is that don't aplied the function  
			var field = fields[i];
			if (field.type != "submit") {
				checkInputValidity(field);
			}

		}
	} else {

		// and if every filds is ok add the active class to our div its validate who we defined in html  
		itsOk.classList.add("active");

		// and hide the form with the class active who add the display none 
		FormHidden.classList.add("active");

		
			// reset form
			RegForm.reset();
		
			// clear form validation messages
			clearValidationMessages();
	}

	// we block the form to submit data if the function is not ok
	return false;

}

// clear all validation messages

function clearValidationMessages()
{
	for(var i=0; i < RegForm.elements.length; i++)
	{
		var elem = RegForm.elements[i];
		var error = elem.parentElement.getElementsByClassName("errorMsg")[0];
		// if aria is fill 
		elem.removeAttribute("aria-invalid");
		// don't fill the span msg
		error.innerHTML = "";
		// remove the active class to span error 
		error.classList.remove("active");
	}
}


//////////////////////////////////// open close modal section//////////////////////////////

// launch modal event

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event

closebtn.addEventListener("click", closeModal);

// launch modal form
// add of active class 

// and hide the hero-section and footer on mobile an tab resolution for the responsive 

function launchModal() {
	modalbg.classList.add("active");
	heroSectionOff.classList.add("active");
	footerOff.classList.add("active");
}

// Close modal form
// removing of active class

// and show the hero-section and footer on mobile an tab resolution when the modal is clossed for the responsive 

function closeModal() {
	modalbg.classList.remove("active");
	heroSectionOff.classList.remove("active");
	footerOff.classList.remove("active");
}

// Close validation msg and modal 
// removing of active class

function closeValidationMsg () {
	itsOk.classList.remove("active");
	FormHidden.classList.remove("active");
	modalbg.classList.remove("active");
	heroSectionOff.classList.remove("active");
	footerOff.classList.remove("active");
}