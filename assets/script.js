function updateRealTime() {
    const now = new Date();

    document.getElementById("year").textContent = now.getFullYear();
    document.getElementById("date").textContent = now.toLocaleDateString("en-GB");
    document.getElementById("time").textContent = now.toLocaleTimeString();
}

setInterval(updateRealTime, 1000);
updateRealTime();
