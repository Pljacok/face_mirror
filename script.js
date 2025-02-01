async function startMirror() {
    const video = document.getElementById('video');
    await navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        video.srcObject = stream;
    });

    await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
    setInterval(async () => {
        const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions());
        console.log(detections);
    }, 1000);
}

startMirror();
