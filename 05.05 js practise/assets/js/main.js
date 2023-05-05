// function input(){
//     var y=document.getElementsByName("name")
//     if(y.name==="password"){
//         y.name="text"
//     }
//     else{
//         y.name="password";
//     }
// }

const password=document.getElementById(name2);
const password2=document.getElementById(name);
function input(){
    if(password.type==="password")
    {
        password.setAttribute("type","text");
        password2.classList.add("name");
        password2.classList.remove("name");
    }
    else{
       password.setAttribute("type","password");
       
       password2.classList.remove("name");
    }
}