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
    
    (seek.style.display == "none") ? (seek.style.display = display_option) : (seek.style.display = "none");
    return;
}

function changeToE(kr)
{
    if(kr == "우만동") return "wooman";
    else if(kr == "원천동") return "wonchun";
    else if(kr == "광교") return "gwanggyo";
}

function changeToK(en)
{
    if(en == "wooman") return "우만동";
    else if(en == "wonchun") return "원천동";
    else if(en == "gwanggyo") return "광교";
}

function setDisplayNone()
{
    const displays = document.querySelector(".changed-page").childNodes;
    displays.forEach(item => {item.style.display = "none"});
} 


export {createAndAdd, changeDisplay, changeToE, changeToK, setDisplayNone};