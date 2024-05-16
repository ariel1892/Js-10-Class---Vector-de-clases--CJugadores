class PlayersData {
    constructor() {
      this.playersList = [];
    }
  
    addPlayer(name, position, age, height, weight, nationality) {
      this.playersList.push({
        name,
        position,
        age,
        height,
        weight,
        nationality
      });
    }
  
    generatePlayersTable() {
      const tableBody = document.querySelector('#playerTable tbody');
      tableBody.innerHTML = '';
  
      for (const player of this.playersList) {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${player.name}</td>
          <td>${player.position}</td>
          <td>${player.age}</td>
          <td>${player.height} m</td>
          <td>${player.weight} kg</td>
          <td>${player.nationality}</td>
        `;
        tableBody.appendChild(row);
      }
    }
  
    countArgentinaNationality() {
      let count = 0;
      for (const player of this.playersList) {
        if (player.nationality === 'Argentina') {
          count++;
        }
      }
      return count;
    }
  
    between75and80kgPlayers() {
      let count = 0;
      for (const player of this.playersList) {
        if (player.weight >= 75 && player.weight <= 80) {
          count++;
        }
      }
      return count;
    }

    tallestPlayer() {
      let tallest = 0;
      let playerName = '';
      for (const player of this.playersList) {
        if (player.height > tallest) {
          tallest = player.height;
          playerName = player.name;
        }
      }
      return playerName;
    }
}

const playersData = new PlayersData();

playersData.addPlayer('Carlos Tevez', 'Delantero', 38, 1.72, 75, 'Argentina');
playersData.addPlayer('Luis Suárez', 'Delantero', 35, 1.82, 79, 'Uruguay');
playersData.addPlayer('Eden Hazard', 'Centrocampista', 31, 1.75, 77, 'Belga');
playersData.addPlayer('Sadio Mané', 'Delantero', 29, 1.75, 76, 'Senegal');
playersData.addPlayer('Thiago Silva', 'Defensa', 37, 1.83, 82, 'Brasil');
playersData.addPlayer('Riyad Mahrez', 'Delantero', 30, 1.79, 76, 'Argelia');
playersData.addPlayer('Gerard Piqué', 'Defensa', 34, 1.94, 85, 'Español');
playersData.addPlayer('Harry Kane', 'Delantero', 28, 1.88, 89, 'Inglés');


playersData.generatePlayersTable();

document.getElementById("result1").textContent = "Total de jugadores de nacionalidad Argentina: " + playersData.countArgentinaNationality();
  
document.getElementById("result2").textContent = "Total de jugadores que tienen un peso entre 75 y 80 kg: " + playersData.between75and80kgPlayers();
  
document.getElementById("result3").textContent = "Jugador más alto: " + playersData.tallestPlayer();
