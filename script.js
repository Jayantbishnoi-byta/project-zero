
function saveData(){

const data={
date:document.getElementById("date").value,
attendance:document.getElementById("attendance").value,
research:document.getElementById("research").value,
win:document.getElementById("win").value
};

localStorage.setItem("projectZeroToday",JSON.stringify(data));

document.getElementById("status").innerHTML="✅ Saved Successfully Co-Founder!";
}
