function saveData(){

const data={
date:document.getElementById("date").value,
attendance:document.getElementById("attendance").value,
research:document.getElementById("research").value,
win:document.getElementById("win").value
};

let history=JSON.parse(localStorage.getItem("projectZeroHistory")) || [];

history.push(data);

localStorage.setItem("projectZeroHistory",JSON.stringify(history));

document.getElementById("status").innerHTML="✅ Saved Successfully Co-Founder!";

}
