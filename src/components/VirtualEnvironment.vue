<template>
  <a-scene
    cursor="rayOrigin: mouse"
    raycaster="objects: .clickable"
    renderer="colorManagement: true;"
    loading-screen="backgroundColor: #312b70"
  >
    <a-assets>
      <img id="environment" crossorigin="anonymous" :src="imageUrl" />
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

    <a-sky id="image-360" radius="10" src="#environment"></a-sky>
  </a-scene>
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from "vue";
import { virtualEnvironment } from "../services";

const environment = ref();
const imageUrl = ref();
const audioUrl = ref();

const playAudio = () => {
  const audio = new Audio(audioUrl.value);
  try {
    audio.play();
  } catch (error) {
    console.log("Erro ao reproduzir o áudio:", error);
  }
};

onBeforeMount(async () => {
  environment.value = await virtualEnvironment.getEnvironment();
  const imageId = environment.value.data.attributes.image.data.id;
  const audioId = environment.value.data.attributes.audio.data.id;

  const image = await virtualEnvironment.getImage(imageId);
  imageUrl.value = image.data.attributes.file.data.attributes.url;

  const audio = await virtualEnvironment.getAudio(audioId);
  audioUrl.value = audio.data.attributes.file.data.attributes.url;
});

onMounted(() => {
  setTimeout(() => {
    const playButton = document.querySelector(".a-enter-vr-button");
    playButton.addEventListener("click", playAudio);
  }, 5000);
});
</script>
