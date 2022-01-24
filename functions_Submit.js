function showSubmit()
{
    document.querySelector(".submit-id__form").value = "ID를 입력하세요!";
    document.querySelector(".submit-pw__form").value = "PW를 입력하세요!";
    document.querySelector(".submit-region__form").value = "지역을 입력하세요!";
    document.querySelector(".submit__form1").innerText = "가입";
}

function submitAction()
{
    let idInfo = document.querySelector(".submit-id__form");
    let pwInfo = document.querySelector(".submit-pw__form");
    let regionInfo = document.querySelector(".submit-region__form");
    //value라는 값에 내가 원하는 정보가 저장되어 있는 것을 확인했음. 
    axios.post('/submit', {
        id : idInfo.value,
        pw : pwInfo.value,
        region : regionInfo.value
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}


export {showSubmit, submitAction};