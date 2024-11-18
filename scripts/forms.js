

const loginCard = document.querySelector('.login-account');
const createCard = document.querySelector('.create-account');
const createAccountBtn = document.querySelector('.create-acc-btn');
const signInLink = document.querySelector('.create-account-link'); 
const createCTA = document.querySelector('.cta-create-account');

initializePage();

function initializePage(){

    const isUserLoggingIn = JSON.parse(localStorage.getItem('isUserLogging') || 'true');

    console.log('isUserLoggingIn: ', isUserLoggingIn);

    if(isUserLoggingIn){

        showLoginCard();
    }else{

        showCreateCard();
    }
}



document.querySelectorAll('.needs-validation').forEach((form) => {
    form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated'); // Add the validation styling class
    });
});


function saveState(isUserLogging){

    localStorage.setItem('isUserLogging', isUserLogging);


}

function showCreateCard(){

    loginCard.classList.add('d-none');
    loginCard.classList.remove('d-block');

    createCard.classList.remove('d-none');
    createCard.classList.add('d-block');

    createCTA.classList.remove('d-block');
    createCTA.classList.add('d-none');

    saveState(false);


}

function showLoginCard(){

    createCard.classList.add('d-none');
    createCard.classList.remove('d-block');

    loginCard.classList.add('d-block');
    loginCard.classList.remove('d-none');

    createCTA.classList.remove('d-none');
    createCTA.classList.add('d-block');
    saveState(true);

}

// Show the create account card, hide the login card
createAccountBtn.addEventListener('click', () => {

    showCreateCard();
});

// Show the login card, hide the create account card
signInLink.addEventListener('click', () => {

    showLoginCard()
});