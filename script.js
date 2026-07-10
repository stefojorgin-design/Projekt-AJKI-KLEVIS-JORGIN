/* ============================================================
   GAME LIST — edit me!
   ------------------------------------------------------------
   To add a new game, copy one of the objects below (the part
   between { and }), paste it inside the square brackets, and
   change the values. Only "title" and "url" are required —
   "description" is optional but nice to have.

   {
     title: "My Favorite Game",
     url: "https://example.com",
     description: "One line about what it is."
   },
   ============================================================ */

const games = [
  {
    title: "WOOODS of CHAOS",
    url: "https://woods-of-chaos-jorgin.vercel.app/",
    description: "PICK A CHARACTER AND TRY TO CONQUER THE CHAOS OF THE WOODS."
  },
  {
    title: "Sky Blocks",
    url: "https://sky-blocks-ajki.vercel.app",
    description: "Challange your friends in a PVP or fight the insaine boss."
  },
  {
    title: "2D war game",
    url: "tank%20battle/index.html;",
    description: "A 2D war game where you may fight for your country."
  },
  {
    title: "Agar.io",
    url: "https://agar.io/",
    description: "Grow your cell, swallow the competition."
  },
  {
    title: "Slither.io",
    url: "https://slither.io/",
    description: "Grow the longest snake on the server."
  },
  {
    title: "itch.io Free Games",
    url: "https://itch.io/games/free",
    description: "An entire shelf of free indie games."
  }

  // 👉 Add your own games below this line, e.g.:
  // {
  //   title: "My Favorite Game",
  //   url: "https://example.com",
  //   description: "One line about what it is."
  // },
];

/* ============================================================
   RENDERING — you shouldn't need to touch anything below here.
   This reads the "games" list above and builds one ticket card
   per game, in order. Each card is a real link, so clicking it
   (or middle-clicking, or ctrl/cmd-clicking) opens the url in a
   new tab.
   ============================================================ */

function renderGames() {
  const grid = document.getElementById("game-grid");
  grid.innerHTML = "";

  games.forEach((game, index) => {
    const ticketNumber = String(index + 1).padStart(3, "0");

    const card = document.createElement("a");
    card.className = "ticket";
    card.href = game.url;
    card.target = "_blank";
    card.rel = "noopener noreferrer";

    card.innerHTML = `
      <div class="ticket-main">
        <span class="ticket-number">No. ${ticketNumber}</span>
        <h3 class="ticket-title">${game.title}</h3>
        <p class="ticket-desc">${game.description ? game.description : ""}</p>
      </div>
      <div class="ticket-stub">
        <span class="stub-label">PLAY</span>
        <span class="stub-arrow" aria-hidden="true">&rarr;</span>
      </div>
    `;

    grid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderGames);
