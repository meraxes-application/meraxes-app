import { api } from "./api";

export default class VirtualEnvironment {
  async getEnvironment() {
    const environmentId = import.meta.env.VITE_MERAXES_ENVIRONMENT_ID;
    const { data } = await api.get(`/environments/${environmentId}?populate=*`);

    return data;
  }

  async getImage(imageId) {
    const { data } = await api.get(`/images/${imageId}?populate=*`);

    return data;
  }

  async getAudio(audioId) {
    const { data } = await api.get(`/audios/${audioId}?populate=*`);

    return data;
  }
}

export const virtualEnvironment = new VirtualEnvironment();
