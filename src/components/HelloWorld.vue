<template>
  <a-scene
    cursor="rayOrigin: mouse"
    raycaster="objects: .clickable"
    renderer="colorManagement: true;"
    loading-screen="backgroundColor: #312b70"
  >
    <a-assets>
      <img
        id="environment"
        crossorigin="anonymous"
        src="https://raw.githubusercontent.com/meraxes-application/meraxes-assets/main/environment-3-2.jpg"
      />
    </a-assets>

    <!-- player -->
    <a-entity
      id="cameraRig"
      position="0 0 0"
      cursor-teleport="cameraRig: #cameraRig; cameraHead: #head; collisionEntities: .collision; ignoreEntities: .clickable"
    >
      <a-entity
        id="head"
        position="0 1.52 0"
        camera
        look-controls="reverseMouseDrag: true"
      ></a-entity>
      <a-entity
        laser-controls="hand: left"
        raycaster="objects: .clickable; far: 100"
        line="color: red; opacity: 0.75"
        teleport-controls="
            collisionEntities: .collision;
            cameraRig: #cameraRig;
            teleportOrigin: #head;
            button: thumbstick;
            curveShootingSpeed: 8"
      >
      </a-entity>
      <a-entity
        laser-controls="hand: right"
        raycaster="objects: .clickable"
        line="color: red; opacity: 0.75"
        teleport-controls="
            collisionEntities: .collision;
            cameraRig: #cameraRig;
            teleportOrigin: #head;
            button: thumbstick;
            curveShootingSpeed: 8"
      ></a-entity>
    </a-entity>

    <!-- scene geometry -->
    <!-- <a-entity
        class="collision"
        position="0 -.05 0"
        geometry="primitive: box; width: 8; height: .1; depth: 8"
        material="color: #000000"
      ></a-entity>-->

    <!-- environment -->
    <a-sky id="image-360" radius="10" src="#environment"></a-sky>
  </a-scene>
</template>

<script setup>
import { onMounted } from "vue";

const playAudio = () => {
  const audioUrl =
    "https://github.com/meraxes-application/meraxes-assets/raw/main/music.mp3";
  const audio = new Audio(audioUrl);
  try {
    audio.play();
  } catch (error) {
    console.log("Erro ao reproduzir o áudio:", error);
  }
};

onMounted(() => {
  setTimeout(() => {
    const playButton = document.querySelector(".a-enter-vr-button");
    playButton.addEventListener("click", playAudio);
  }, 5000);
});
</script>
