function saveData() {

    const data = {
        date: document.getElementById("date").value,
        attendance: document.getElementById("attendance").value,
        research: document.getElementById("research").value,
        win: document.getElementById("win").value,
        goal: document.getElementById("goal").value,
        goalProgress: document.getElementById("goalProgress").value,
        note: document.getElementById("note").value
    };

    let history = JSON.parse(localStorage.getItem("projectZeroHistory")) || [];

    // Same date exists?
    const index = history.findIndex(item => item.date === data.date);

    if (index >= 0) {
        history[index] = data;   // Update existing entry
    } else {
        history.push(data);      // Add new entry
    }

    localStorage.setItem("projectZeroHistory", JSON.stringify(history));

    document.getElementById("status").innerHTML =
    "✅ Saved Successfully!";
}
