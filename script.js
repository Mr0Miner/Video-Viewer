let videoLink = "";

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    videoLink = document.getElementById("videoLink").value;
    const videoContainer = document.getElementById("videoContainer");
    
    const video = document.createElement("video");
    video.src = videoLink;
    video.autoplay = true;
    video.controls = true;

    videoContainer.innerHTML = "";
    videoContainer.appendChild(video);
});

function downloadVideo() {
    if (videoLink) {
        const downloadLink = document.createElement("a");
        downloadLink.href = videoLink;
        downloadLink.download = "video.mp4";
        downloadLink.click();
    } else {
        alert("Please enter the link first and press the play button.");
    }
}

function copyText() {
    const input = document.getElementById("videoLink");
    
    if (input.value) {
        input.select();
        input.setSelectionRange(0, 99999);
        document.execCommand("copy");
    } else {
        alert("Please enter the video link first.");
    }
}

function toggleColorMode() {
    const body = document.body;
    const button = document.querySelector(".emoji-button");
    if (body.classList.contains("night-mode")) {
        body.classList.remove("night-mode");
        button.textContent = "🌙";
    } else {
        body.classList.add("night-mode");
        button.textContent = "☀️";
    }
}