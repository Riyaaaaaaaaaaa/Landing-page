// DOM Access
const playlistDiv = document.getElementById("playlist");
const mood = document.getElementById("mood");
const weather = document.getElementById("weather");
const platform = document.getElementById("platform");
const language = document.getElementById("language");

// Expanded dummy curated playlist links based on all 4 selections (sample, expand as needed)
const playlists = {
  happy: {
    sunny: {
      english: {
        spotify: ["https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC"],
        youtube: ["https://youtube.com/playlist?list=PLhappy-sun-en-yt"]
      },
      hindi: {
        spotify: ["https://open.spotify.com/playlist/37i9dQZF1DX3Kdv0IChEm9"],
        youtube: ["https://youtube.com/playlist?list=PLhappy-sun-hi-yt"]
      },
      tamil : {
        spotify: ["https://open.spotify.com/playlist/37i9dQZF1DX3Kdv0IChEm9"],
        youtube: ["https://youtube.com/playlist?list=PLhappy-sun-hi-yt"]
      },
      malayalam: {
        spotify: ["https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC"],
        youtube: ["https://youtu.be/FAn2i7gu32w?si=SQl8FyQgdoPaN_NQ"]
      }
   },
    rainy: {
      english: {
        spotify: ["https://open.spotify.com/playlist/37i9dQZF1DXbvABJXBIyiY"],
        youtube: ["https://youtube.com/playlist?list=PLhappy-rain-en-yt"]
      },
      hindi: {
        spotify: ["https://open.spotify.com/playlist/37i9dQZF1DWYxwmBaMqxsl"],
        youtube: ["https://youtube.com/playlist?list=PLhappy-rain-hi-yt"]
      },
      tamil : {
        spotify: ["https://open.spotify.com/playlist/37i9dQZF1DX3Kdv0IChEm9"],
        youtube: ["https://youtube.com/playlist?list=PLhappy-sun-hi-yt"]
      },
      malayalam: {
        spotify: ["https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC"],
        youtube: ["https://youtu.be/FAn2i7gu32w?si=SQl8FyQgdoPaN_NQ"]
      }
    },
    windy: {
      malayalam: {
        spotify: ["https://open.spotify.com/playlist/37i9dQZF1DX7K31D69s4M1"],
        youtube: ["https://youtube.com/playlist?list=PLwindy-malayalam"]
      }
    }
  },
  anxious: {
    windy: {
      malayalam: {
        spotify: ["https://open.spotify.com/playlist/37i9dQZF1DX0ZQP1lZ3I1D"],
        youtube: ["https://youtube.com/playlist?list=PLanxious-windy-mal-yt"]
      }
    }
  },
  // Add all other moods, weather, languages and platforms similarly
};

function generatePlaylist() {
  const selectedMood = mood.value;
  const selectedWeather = weather.value;
  const selectedPlatform = platform.value;
  const selectedLanguage = language.value;

  playlistDiv.innerHTML = "";

  const links =
    playlists?.[selectedMood]?.[selectedWeather]?.[selectedLanguage]?.[selectedPlatform] || [];

  if (links.length === 0) {
    playlistDiv.innerHTML = "<p>No playlist available for this combination yet.</p>";
  } else {
    links.forEach((link) => {
      const a = document.createElement("a");
      a.href = link;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = "🎵 Click to open your playlist";
      a.classList.add("playlist-link");
      playlistDiv.appendChild(a);
    });
  }
}

// Background Animation - subtle floating music notes
function createMusicNote() {
  const note = document.createElement("div");
  note.classList.add("note");
  note.textContent = "♪"; // or "♫"
  note.style.left = Math.random() * window.innerWidth + "px";
  note.style.animationDuration = 3 + Math.random() * 3 + "s";
  note.style.opacity = 0.6 + Math.random() * 0.4;

  document.body.appendChild(note);

  setTimeout(() => {
    note.remove();
  }, 6000); // Remove after animation
}

setInterval(createMusicNote, 700); // every 0.7s

