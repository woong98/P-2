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

export {createAndAdd, changeDisplay};