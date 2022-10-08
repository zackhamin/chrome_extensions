const timeElement = document.getElementById("time");
const timerElement = document.getElementById("timer");
const nameDisplay = document.getElementById("name");

function updateTimeElement() {
  chrome.storage.local.get(["timer"], (res) => {
    const time = res.timer ?? 0;
    timerElement.textContent = `The timer is at: ${time}`;
  });
  const currentTime = new Date().toLocaleTimeString();
  timeElement.textContent = `The time is: ${currentTime}`;
}

chrome.storage.sync.get(["name"], (res) => {
  nameDisplay.textContent = res.name;
});

updateTimeElement();
setInterval(updateTimeElement, 1000);
