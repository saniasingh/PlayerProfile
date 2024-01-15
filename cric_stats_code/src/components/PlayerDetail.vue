<template>

  <div class="player-info-card">
    <section class="grid1">
    <div class="player-image">
      <img v-bind:src="playerDetail.playerImg" />
    </div>
  </section>
  <section class="grid2">
    <div class="player-data">
      <div class="player-name">Name - {{ playerDetail.name }}</div>
    <div>Date of Birth - {{ playerDetail.dateOfBirth }}</div>
    <div>role - {{ playerDetail.role }}</div>
    <div>Batting style - {{ playerDetail.battingStyle }}</div>
    <div>Bowling style - {{ playerDetail.bowlingStyle }}</div>
    <div>Country - {{ playerDetail.country }}</div>
    <div>Place of birth - {{ playerDetail.placeOfBirth }}</div>
    </div>
    
  </section>
    
  </div>
</template>

<script>
export default {
  props: ['playerDetail'],
  name: 'PlayerDetail'
}
</script>

<style>

body {
  margin: 0;
}

/* section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 10px;
} */
.grid1 {
  padding-left: 20px;
  size-adjust:inherit;
  width: 50%;
  
  
}

.player-name {
  font-size:1.7em;
  font-weight:200;
  text-decoration: underline blueviolet solid 2%;
}
.grid2 {
  padding-right: 20px;
}
.player-info-card {
  /* background: #a5951d; */
  position: fixed;
  font-family: 'Merriweather', sans-serif;
  width: 90rem;
  height: 75%;
  font-size: medium;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0, 0, 20px;
  margin-top: 60px;
  /* box-shadow: 8px 8px 5px lightblue; */
  
}

img {
  
  /* border-style: solid;
  border-color: rgb(255, 0, 0); */
  object-fit: cover;
  border-radius: 25px;
  width: 100%;

}

.player-image {
  justify-content: center;
  align-items: center;
  padding: 70px;
  border-radius: 10%;
  margin-left: 40px;
  size: 30%;
  box-shadow: 8px 8px 5px lightblue;
}

.player-data {
  display:grid;
  gap: 0.9rem;
  margin: 40px;
  
}
</style>
