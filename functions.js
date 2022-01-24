import {createAndAdd, changeDisplay, changeToE, changeToK, setDisplayNone} from './util.js';
import {createMain, createDetail, createLogin, createReact, createSelectOption, createSubmit} from './functions_CreatingForms.js';
import {constituteMain, showMain} from './functions_Main.js';
import {showLogin} from './functions_login.js';
import {showSubmit, submitAction} from "./functions_Submit.js";

createMain();
createSelectOption();
createDetail();
createLogin();
createSubmit();
createReact();
changeDisplay("main", "block");
constituteMain();

window.onpopstate = function(event) { //뒤로가기 등 발생시 처리하는 이벤트 
    //여기에 분기에 따른 결과를 넣어줘야 한다
    let strArr = location.pathname.split('/');
    if(strArr == undefined)
    {
        document.querySelector(".main-select").innerText = "우만동";
        constituteMain(1);
    }
    document.querySelector(".main-select").innerText = changeToK(strArr[2]); //각 화면에 따라서 분기 
    constituteMain(1); //새로그리기 
  };

const ajouClick = document.querySelector(".part1");
ajouClick.addEventListener("click", function()
{
    setDisplayNone();
    constituteMain(); 
    changeDisplay("main", "block");
});

const locSelectClick = document.querySelector(".main-select");
locSelectClick.addEventListener("click", function()
{
    changeDisplay("select-option", "flex");
});

const locSelectOptionClick = document.querySelector(".select-option");
locSelectOptionClick.addEventListener("click", function(e)
{
    document.querySelector(".main-select").innerText = e.target.innerText; //선택한 텍스트가 select부분의 텍스트가 될 수 있도록
    constituteMain(); 
}
);

const loginClick = document.querySelector(".part2");
loginClick.addEventListener("click", function()
{
    setDisplayNone();
    showLogin();
    changeDisplay("login", "block"); //이후 회원가입에 대한 부분이 들어가야 한다. 
});

const submitClick = document.querySelector(".login-button__form2");
submitClick.addEventListener("click", function()
{
    setDisplayNone();
    showSubmit();
    changeDisplay("submit", "block");
})

const submitButtonClick = document.querySelector(".submit__form1");
submitButtonClick.addEventListener("click", function()
{
    submitAction();
    setDisplayNone();
    constituteMain(); 
    changeDisplay("main", "block");
});