const formEl = document.querySelector('.login-form');



const onSubmit = (event)=>{
    event.preventDefault();
    

    const {
        elements: {email, password}
    } = event.currentTarget;

    console.log();


    if (email.value === '' || password.value === ''){
        alert("Всі поля повинні бути заповнені")
    } else {
         const formData = new FormData(event.currentTarget);
        
         formData.forEach((value, name) => {
             console.log(name, " : ", value);
         });


        event.currentTarget.reset();
    }
}


formEl.addEventListener('submit', onSubmit);
