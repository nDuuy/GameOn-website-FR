// function qui permet gérer le bouton de navigation en responsive
function editNav() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}


// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closebtn = document.querySelector(".close");

const FormHidden = document.querySelector(".formhidden");
const heroSectionOff = document.querySelector(".hero-section")
const footerOff = document.querySelector(".footerOff")
const ok = document.querySelector(".itsValidate")



var RegForm = document.getElementById("formInscription");

function checkInputValidity(elem) {

	var error = elem.parentElement.getElementsByClassName("errorMsg")[0];

	if (!elem.validity.valid) {
		elem.setAttribute("aria-invalid", true);
		error.classList.add("active");
		error.innerHTML = elem.getAttribute("title");

	} else {
		elem.removeAttribute("aria-invalid");
		error.innerHTML = "";
		error.classList.remove("active");
	}

}

function submitRegForm() {
	// debugger;



	if (!RegForm.checkValidity()) {
		var fields = RegForm.elements;
		for (var i = 0; i < fields.length; i++) {
			var field = fields[i];
			if (field.type != "submit") {
				checkInputValidity(field);
			}

		}
	} else {

		ok.classList.add("active");
		FormHidden.classList.add("active");
	}


	return false;

}




//////////////////////////////////// open close modal section//////////////////////////////

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
closebtn.addEventListener("click", closeModal);

// launch modal form
// ajout de classe active (displa:block)
function launchModal() {
	modalbg.classList.add("active");
	heroSectionOff.classList.add("active");
	footerOff.classList.add("active");
}

// Close modal form
// suppression de classe active (plus visible)
function closeModal() {
	modalbg.classList.remove("active");
	heroSectionOff.classList.remove("active");
	footerOff.classList.remove("active");
}