const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");


function calculateBMI(){
    const heightValue = document.getElementById("Height").value / 100;
    const weightValue = document.getElementById("Weight").value;

    const bmiValue = weightValue / (heightValue * heightValue);
    console.log(bmiValue);

    bmiInputEl.value = bmiValue;

    if(bmiValue < 18.5){
        weightConditionEl.innerText = "under weight";
    }else if (bmiValue >= 18.5 && bmiValue <= 24.9){
        weightConditionEl.innerText = "Normal weight";
    }else if(bmiValue >= 25 && bmiValue <= 29.9){
        weightConditionEl.innerText = "Over weight";
    }else if (bmiValue >= 30){
        weightConditionEl.innerText = "Obosity";
    }

}

btnEl.addEventListener("click",calculateBMI);