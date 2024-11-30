import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useApiStore = defineStore('api', () => {
  const data = ref(null)
  const loading = ref(false);
  const url = "/api/items";

  async function load() {
    loading.value = true;
    await fetch(url, {
      headers: {
        "Access-Control-Allow-Origin": "https://adventofmusic-api.onrender.com"
      }
    }).then(
      response => {
        return response.json()
      }
    ).then(json => {
        data.value = json

      }
    ).finally(
      () => {
        loading.value = false
      }
    )
  }

  return {data, loading, load}
})
