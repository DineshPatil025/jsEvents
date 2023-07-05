const cl = console.log;

const logInForm = document.getElementById("logInForm");
const emailControl = document.getElementById('email')
const pwControl = document.getElementById('password')

const db = {
    dbEmail: 'email123@gmail.com',
    dbPassWord: 'Pass@123'
}

const onLogInHandler = (eve => {
    eve.preventDefault(); // page wont refresh on submit
    const emailValue = emailControl.value;
    const pwValue = pwControl.value;
    if (emailValue === db.dbEmail && pwValue === db.dbPassWord) {
        // alert('log in succesful')
        // Swal.fire('Any fool can use a computer')
        Swal.fire({
            icon: 'success',
            title: 'Congratulation',
            text: 'You have logged in Succesfully'


        })

    } else {
        // alert('invalid username or password')
        // Swal.fire('Invalid Email or password')
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Kindly check your E-mail Id or Password'


        })

    }

    logInForm.reset();

})




logInForm.addEventListener('submit', onLogInHandler)