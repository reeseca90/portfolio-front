import React, { useEffect } from "react";
import runGame from "./src/runGame";

const Bship = () => {
  
  function createBoard() {
    const playerBoard = document.getElementById('playerBoard');
    const AIBoard = document.getElementById('AIBoard');
    
    for (let i = 0; i < 10; i++) {
      const row = document.createElement('div');
      row.id = 'row' + i;
      for (let j = 0; j < 10; j++) {
        const box = document.createElement('div');
        box.className = 'box';
        box.id = 'playerBox' + i + j;
        box.setAttribute('draggable', 'false');
        row.appendChild(box);
      }
      playerBoard.appendChild(row);
    }
    
    for (let i = 0; i < 10; i++) {
      const row = document.createElement('div');
      row.id = 'row' + i;
      for (let j = 0; j < 10; j++) {
        const box = document.createElement('div');
        box.className = 'box';
        box.id = 'AIBox' + i + j;
        box.setAttribute('draggable', 'false');
        row.appendChild(box);
      }
      AIBoard.appendChild(row);
    }
  }

  function reloadPage() {
    window.location.href = window.location.href;
  }

  useEffect(() => {
    createBoard();
    runGame();
  }, []);

  return (
    <div id='battleshipArea'>
      <header>
        <span id="headText">B A T T L E S H I P</span><br />
        <button id="startGame" onClick={reloadPage}>Start New Game</button>
      </header>

      <main>
        <section id="playerSide">
          <div>Player Board</div>
          <div id="playerBoard" class="board"></div>
        </section>
        <section id="AISide">
          <div>AI Board</div>
          <div id="AIBoard" class="board"></div>
        </section>
      </main>

      <div id="gameOverText">Game Over!</div>

      <footer>
        <p id="createdBy">Created by Craig, 2021</p><br />
        <p>Image by <a href="https://pixabay.com/users/sunu_dhadho-2860823/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5412870">Sunu Probo Baskoro</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5412870">Pixabay</a></p>
      </footer>
    </div>
  )
}

export default Bship;