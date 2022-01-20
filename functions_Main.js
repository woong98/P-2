import {createAndAdd, changeDisplay, changeToE} from './util.js';

function constituteMain(his)//게시물에 대한 모든 정보를 불러오고, 쓸 수 있도록 가공하는 기능을 가진 함수. 
{ 
    let selectOption = document.querySelector(".main-select");

    function getdbData(cb) //DB에 접근한다. 
    {
        axios.get('/main').then(function(response)
        {
                cb(response.data, selectOption.innerText);
                if(his == undefined)
                    history.pushState(null, null, `/main/${changeToE(selectOption.innerText)}`);
        });
    }
    getdbData(function(a, b)
    {
        let vaildMatrix = [];
        //a에 현재 response.data가 들어있는 상태임.
        const keyNames = Object.keys(a[0]); //keynames에 대한 정보를 추출 
        //keynames에서 유효한 정보들로 배열을 구성하고 selelctOption을 통해서 관련된 정보들만 화면에 표시한다.
        a.forEach(item => {
            if(b == item.loc)
            {
                vaildMatrix.push(item);
            }
        })
        vaildMatrix.forEach(item => //이미지를 제외한 데이터의 가공 
        {
                item.loc = `${item.loc}`
                item.depo = `보증금 : ${item.depo}만원`;
                item.mon = `월세 : ${item.mon}만원`;
                item.man = `관리비 : ${item.man}만원`;
                item.hp = `H.P ${item.hp}`;
                item.ipath = `${item.ipath}/1.png`
        });
        //이후에는 이 정보들을 가지고 화면을 그려주는 함수를 호출해야 한다. 
        showMain(vaildMatrix);
    });

    
}

function showMain(infoMatrix) //가공된 정보를 바탕으로 DB를 구성할 수 있도록 한다. 
{
    //main의 각 요소들에 접근하여 화면에 표시되는 정보를 바꾸는 과정이 요구된다. 
    let selectview = document.querySelector(".main-select");
    selectview.innerText = infoMatrix[0].loc;

    const boxs = document.querySelectorAll(".main-box__contents");
    const imgs = document.querySelectorAll(".main-box__image");
    for(let i = 0; i < boxs.length; i++)
    {
        if(i == infoMatrix.length)
            break;
        let small = boxs[i].childNodes;
        small[0].innerText = infoMatrix[i].loc;
        small[1].innerText = infoMatrix[i].depo;
        small[2].innerText = infoMatrix[i].mon;
        small[3].innerText = infoMatrix[i].man;
        imgs[i].src = infoMatrix[i].ipath;
    }
}

export {constituteMain, showMain};