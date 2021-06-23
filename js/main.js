let fm = document.getElementById('form');
let fn = document.getElementById('fname');
let em = document.getElementById('email');
let ms = document.getElementById('message');
let sb = document.getElementById('submit');
let regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


function formValidator(ev) {
    ev.preventDefault();
    //empty buckets
    let errors = [];
    let data = {};
    
    //validation for full name
    if (fn.value !== '') {
       data.fullName = fn.value;
    } else {
        errors.push('Full name is missing.');
    }
    
    //validation for email
    if (em.value !== '') {
        if (regex.test (em.value)) {
           data.Email = em.value;
        } else { 
           errors.push('Email format is incorrect.');
        }  
    } else {
        errors.push('Email is missing.');
    }
    
    
    //validation for message
    if (ms.value !== '') {
       data.Message = ms.value;
    } else {
        errors.push('Message is missing.');
    }
    
    
    //check if error array is empty
    if (errors.length === 0) {
       console.log(data);
       fm.reset()
    } else {
       console.log(errors);
    }
    
}

fm.addEventListener('submit', formValidator);

 
