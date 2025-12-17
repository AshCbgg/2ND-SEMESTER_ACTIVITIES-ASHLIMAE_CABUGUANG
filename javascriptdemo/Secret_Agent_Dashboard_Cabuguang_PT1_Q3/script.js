console.log("System Initialized");
let agentScore = 95.5;
let agentName = "Bond";

console.log("Profile: " + agentName + " Score: " +
agentScore);

console.log(typeof agentName);

const missionButton = document.getElementById("btn-mission");
missionButton.addEventListener("click", function() {
    const statusText = document.getElementById("status-text");
    if(statusText){
        statusText.textContent = "Status: Mission Active - Do not disturb.";
    }
});

const colorButton = document.getElementById("btn-color");
colorButton.addEventListener("click", function() {
    const agentProfile = document.getElementById("agent-profile");
    if(agentProfile){
        agentProfile.style.borderColor = "red";
        agentProfile.style.color = "red";
    }
});

const disguiseButton = document.getElementById("btn-disguise");
disguiseButton.addEventListener("click", function() {
    const agentAvatarImage = document.getElementById("agent-avatar");
    img.src = img.src.includes(".agent-images/agent-avatar.png") ?
    "./agent-images/agent-avatar.png" : "./agent-images/agent.PNG";
});
