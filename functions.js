mainflag = 0;

function createAndAdd(ele, clsname, pr, intext) //ele라는 tag를 생성 후, clsname을 클래스로 설정한 다음에 pr의 자식으로 넣어주는 함수 
{
    let a = document.createElement(ele);
    a.className = clsname;
    if(intext != undefined)
    {
        a.innerText = intext;
    }
    pr.appendChild(a);      
    return a;
}

function changeDisplay(class_name, display_option){ //class_name바탕 탐색을 통해서 해당 요소 display여부를 결정
    const seek = document.querySelector(`.${class_name}`);
    
    if(seek.style.display == "none")
    {
        console.log(seek.style.display);
        seek.style.display = display_option;
        return;
    }
    else
    {
        seek.style.display = "none";
    }
}

function createMain() //기본게시판에 대한 생성 
{
    let main = createAndAdd("div", "main", document.body);
    let select = createAndAdd("div", "main-select", main);
    
    //select를 위한 박스와 각 content 표시를 위한 박스를 생성
    const arr5 = [1,2,3,4,5];
    const arr3 = ["main-box__image", "main-box__contents", "main-box__plus"];
    arr5.forEach(item => {
        let ele = createAndAdd("div", "main-box", main); //각 div element생성
        arr3.forEach(item0 => createAndAdd("div", item0, ele));
    });

    main.style.display = "none";
}

function createDetail()
{
    let detail = createAndAdd("div", "detail", document.body);
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
    let login = createAndAdd("div", "login", document.body);

    const arr0 = ["login-id__form", "login-pw__form", 
    "login-region__form"]
    const arr1 = ["login-button__form1", "login-button__form2"];

    arr0.forEach(item => createAndAdd("input", item, login));
    arr1.forEach(item => createAndAdd("div", item, login));

    login.style.display = "none";
}

function createReact()
{
    let react = createAndAdd("div", "react", document.body);
    createAndAdd("div", "react-button__1", react);
    createAndAdd("div", "react-button__2", react);

    react.style.display = "none";
}

createMain();
createDetail();
createLogin();
createReact();
changeDisplay("react", "block");