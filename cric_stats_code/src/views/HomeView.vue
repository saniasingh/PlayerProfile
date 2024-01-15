<template>
  <div class="home">
    <div v-if="playerProfile.isLoading">Loading...</div>
    <div v-if="playerProfile.error">{{ playerProfile.error }}</div>
    <div class="home-data" v-if="playerProfile.data">
      <section>
        <PlayerDetail v-bind:player-detail="playerProfile.data"></PlayerDetail>
      </section>

      <PlayerStats v-bind:player-stats="playerProfile.data.stats"></PlayerStats>
    </div>
  </div>
</template>

<script setup>
import PlayerDetail from '@/components/PlayerDetail.vue'
import PlayerStats from '@/components/PlayerStats.vue'
import { usePlayerProfileStore } from '@/stores/playerProfile'

const playerProfile = usePlayerProfileStore()

playerProfile.fetchProfileLocally()
</script>

<style scoped>
.home-data {
  display: grid;
}

.home {
  /* display:grid; */
  background-color: #e4f9f5;
  font-family: Sans, cursive;
  font-size: 1.5em;
}
</style>
