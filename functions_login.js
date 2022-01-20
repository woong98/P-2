
/* 
display하는 시점에 input들에 접근해서 기본적인 기능을 할 수 있도록 해야한다. 
*/

function showLogin()
{
    document.querySelector(".login-region__form").style.display = "none";
    document.querySelector(".login-id__form").value = "ID를 입력하세요!";
    document.querySelector(".login-pw__form").value = "PW를 입력하세요!";
    document.querySelector(".login-button__form1").innerText = "로그인";
    document.querySelector(".login-button__form2").innerText = "회원가입";
}

export {showLogin};