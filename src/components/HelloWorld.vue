<template>
  <a-scene
    cursor="rayOrigin: mouse"
    raycaster="objects: .clickable"
    renderer="colorManagement: true;"
  >
    <a-assets>
      <audio
        id="click-sound"
        src="https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"
      ></audio>
      <img
        id="city"
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
    <a-sky id="image-360" radius="10" src="#city"></a-sky>
  </a-scene>
</template>

<script>
// import {
//   aScene,
//   aAssets,
//   aEntity,
//   aSky,
//   AFRAME,
// } from "aframe-cursor-teleport-component";

export default {
  name: "HelloWorld",

  props: {
    msg: String,
  },

  setup() {
    return {};
  },
};
</script>

<style>
.a-enter-vr {
  /*position: fixed !important;*/
}
</style>
