import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

window.AFRAME.registerComponent("color-change", {
  init: function () {
    this.el.addEventListener("click", function () {
      //set material color to random hex value
      var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      this.setAttribute("material", { color: randomColor });
    });
  },
});

createApp(App).mount("#app");
