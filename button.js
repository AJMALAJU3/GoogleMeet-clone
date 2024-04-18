const usrnme = document.getElementById ("name");
const submit = document.getElementById("submit");

usrnme.addEventListener("keyup",(e) =>{
    const value = e.currentTarget.value;
    if (value == ""){
        submit.disabled = true;
    }else{
        submit.disabled = false;
    }
});



