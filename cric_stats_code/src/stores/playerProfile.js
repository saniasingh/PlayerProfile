import { defineStore } from 'pinia'
import { ref } from 'vue'
import { sachinInfo } from './sachin'

export const usePlayerProfileStore = defineStore('player-profile', () => {
  const isLoading = ref(false)
  const data = ref(null)
  const error = ref(null)

  async function fetchProfile() {
    isLoading.value = true
    error.value = null
    try {
      var requestOptions = {
        method: 'GET'
      }

      const response = await fetch(
        'https://cors-anywhere.herokuapp.com/https://api.sportradar.us/cricket-t2/en/players/sr:player:646278/profile.json?api_key=hmn5h3pj62bxarvxhdtqsjnv',
        requestOptions
      )
      const json = await response.json();
      
      isLoading.value = false
      console.log('result ---------------->', json)
      data.value = json
      
    } catch(e) {
      isLoading.value = false
      error.value = e
      console.log('error', e)
    }
    console.log(data.value)
      
  }

  async function fetchProfileLocally() {
    isLoading.value = true
    error.value = null
    try {
      

      
      
      isLoading.value = false
      // console.log('result ---------------->', json)
      data.value = sachinInfo.data
      
    } catch(e) {
      isLoading.value = false
      error.value = e
      console.log('error', e)
    }
    console.log(data.value)
  }

  return { isLoading, error, data, fetchProfile, fetchProfileLocally }
})
