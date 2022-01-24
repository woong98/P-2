import {createAndAdd, changeDisplay, changeToE, setDisplayNone} from './util.js';

const changedPage = createAndAdd("div", "changed-page", document.body);

function createMain() //기본게시판에 대한 생성 
{
    let main = createAndAdd("div", "main", changedPage);
    let select = createAndAdd("div", "main-select", main);
    select.innerText = "우만동";
    //select를 위한 박스와 각 content 표시를 위한 박스를 생성
    const arr5 = [1,2,3,4,5];
    const arr4 = [1, 2, 3, 4];
    const arr3 = ["main-box__image", "main-box__contents", "main-box__plus"];
    arr5.forEach(item => {
        let ele = createAndAdd("div", "main-box", main); //각 div element생성
        createAndAdd("img", "main-box__image", ele);
        let boxContents = createAndAdd("div", "main-box__contents", ele);
        arr4.forEach(item => createAndAdd("div", "box__contents_para", boxContents));
        createAndAdd("div", "main-box__plus", ele);
    });

    main.style.display = "none";
}

function createDetail()
{
    let detail = createAndAdd("div", "detail", changedPage);
    const arr0 = [1,2,3, 4];
    arr0.forEach(item => createAndAdd("div", "detail-box", detail)); //상위 div내에 3개의 div를 추가해주고
    const detailBoxs = document.querySelectorAll(".detail-box");

    const arr1 = ["detail-picture__back", "blank0", "detail-picture__forward"];
    arr1.forEach(item => createAndAdd("div", item, detailBoxs[0]));
    
    const arr2 = ["detail-light__info", "blank1", "blank1"];
    arr2.forEach(item => createAndAdd("div", item, detailBoxs[2]));

    const arr3 = ["detail-detail__info", "blank2"];
    arr3.forEach(item => createAndAdd("div", item, detailBoxs[3]));

    detail.style.display = "none";
}

function createLogin()
{
    let login = createAndAdd("div", "login", changedPage);

    const arr0 = ["login-id__form", "login-pw__form"];
    const arr1 = ["login-button__form1", "login-button__form2"];

    arr0.forEach(item => createAndAdd("input", item, login));
    arr1.forEach(item => createAndAdd("div", item, login));

    document.querySelector(".login-pw__form").type = "password"

    login.style.display = "none";
}

function createSubmit()
{
    let submit = createAndAdd("div", "submit", changedPage);

    const arr0 = ["submit-id__form", "submit-pw__form", 
    "submit-region__form"];

    arr0.forEach(item => createAndAdd("input", item, submit));
    createAndAdd("div", "submit__form1", submit);

    document.querySelector(".submit-pw__form").type = "password"

    submit.style.display = "none";
}

function createReact()
{
    let react = createAndAdd("div", "react", changedPage);
    createAndAdd("div", "react-button__1", react);
    createAndAdd("div", "react-button__2", react);

    react.style.display = "none";
}

function createSelectOption()
{
    let selectOption = createAndAdd("div", "select-option", changedPage);
    const strarr = ["우만동", "원천동", "광교"];
    strarr.forEach(item => createAndAdd("div", "select-button", selectOption, item));
    selectOption.style.display = "none";
}



export {createMain, createDetail, createLogin, createReact, createSelectOption, createSubmit};