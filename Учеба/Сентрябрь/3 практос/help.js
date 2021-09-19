const username = document.getElementById('name1');
const age = document.getElementById('age');
const choose = document.getElementById('name2');
const time = document.getElementById('name3');
const freetime = document.getElementById('name4');


form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const ageValue = age.value.trim();
	const chooseValue = choose.value.trim();
    const timeValue = time.value.trim();
    const freetimeValue = freetime.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username);
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(age);
	} else if (!isEmail(emailValue)) {
		setErrorFor(age);
	} else {
		setSuccessFor(age);
	}
	
	if(chooseValue === '') {
		setErrorFor(choose);
	} else {
		setSuccessFor(choose);
	}

    if(timeValue === '') {
		setErrorFor(time);
	} else {
		setSuccessFor(time);
	}

    if(freetimeValue === '') {
		setErrorFor(freetime, 'Password cannot be blank');
	} else {
		setSuccessFor(freetime);
	}
	
}

function setErrorFor(input) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


// SOCIAL PANEL JS


floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});