// DOM Access
const playlistDiv = document.getElementById("playlist");
const mood = document.getElementById("mood");
const weather = document.getElementById("weather");
const platform = document.getElementById("platform");
const language = document.getElementById("language");

// Dummy curated playlist links based on all 4 selections
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
      }
    }
  }
  // You can expand this object with all 4*7*4 options as needed
};

function generatePlaylist() {
  const selectedMood = mood.value;
  const selectedWeather = weather.value;
  const selectedPlatform = platform.value;
  const selectedLanguage = language.value;

  let links = [];

  try {
    links =
      playlists[selectedMood]?.[selectedWeather]?.[selectedLanguage]?.[selectedPlatform] || [];
  } catch (e) {
    links = [];
  }

  playlistDiv.innerHTML = "";

  if (links.length === 0) {
    playlistDiv.innerHTML = "<p>No playlist available for this combination yet.</p>";
  } else {
    links.forEach((link) => {
      const a = document.createElement("a");
      a.href = link;
      a.target = "_blank";
      a.textContent = "🎵 Click to open your playlist";
      playlistDiv.appendChild(a);
    });
  }
}

// MoodBot dummy chat interaction
function showBotMessage() {
  const chatbox = document.getElementById("chatbox");
  chatbox.innerHTML = `
    <p>👋 Hi, I'm MoodBot! Tell me how you're feeling, and I’ll suggest the perfect vibe!</p>
    <p>Example: "I'm feeling relaxed and it's cloudy" → try 'Chill Vibes on a Cloudy Day'</p>
  `;
}

// Dark/Light Mode Toggle
const toggleBtn = document.querySelector(".toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

// Background Animation - Music Notes
function createMusicNote() {
  const note = document.createElement("div");
  note.classList.add("note");
  note.textContent =
