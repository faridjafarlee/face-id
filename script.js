const video = document.getElementById('video');

async function startVideo() {
  let stream = null;

  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: {}, });
    video.srcObject = stream;
  } catch (e) {
    console.error(e);
  }
}

startVideo();