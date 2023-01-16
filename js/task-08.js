const formEl = document.querySelector('.login-form');



const onSubmit = (event)=>{
    event.preventDefault();
    

    const {
        elements: {email, password}
    } = event.currentTarget;



    if (email.value === '' || password.value === ''){
        alert("Всі поля повинні бути заповнені")
    } else {

        const obj = {email, password};
        obj.email = email.value;
        obj.password = password.value;
        console.log(obj);
        

        event.currentTarget.reset();
    }
}


formEl.addEventListener('submit', onSubmit);
