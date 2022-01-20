import {createAndAdd, changeDisplay, changeToE, changeToK} from './util.js';
import {createMain, createDetail, createLogin, createReact, createSelectOption} from './functions_CreatingForms.js';
import {constituteMain, showMain} from './functions_Main.js';
import {showLogin} from './functions_login.js';

createMain();
createSelectOption();
createDetail();
createLogin();
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
    document.querySelector(".main").style.display = "none";
    changeDisplay("login", "block"); //이후 회원가입에 대한 부분이 들어가야 한다. 
    showLogin();
});