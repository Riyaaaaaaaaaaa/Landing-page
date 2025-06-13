// Playlist data structure
// Structure: playlists[mood][weather][language][platform] = URL or string
const playlists = {
  happy: {
    sunny: {
      english: {
        spotify: "https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC",
        youtube: "https://www.youtube.com/playlist?list=PL6E4C87A52F2A8F1C",
      },
      hindi: {
        spotify: "https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd",
        youtube: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtP5mp25nStsuDzk2blkcFu7",
      },
      spanish: {
        spotify: "https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd",
        youtube: "https://www.youtube.com/playlist?list=PLrEnWoR732-BHrPp_Pm8_VleD68f9s14-",
      },
      korean: {
        spotify: "https://open.spotify.com/playlist/37i9dQZF1DX9tPFwDMOaN1",
        youtube: "https://www.youtube.com/playlist?list=PLXZuY8bCQJ9Xu9GaqrGkdqHog-Sc3JkAq",
      },
    },
    rainy: {
      english: {
        spotify: "https://open.spotify.com/playlist/37i9dQZF1DXbvABJXBIyiY",
        youtube: "https://www.youtube.com/playlist?list=PLv6vQz8rYvC2pkz52ju9J6uGz-25XGx38",
      },
      hindi: {
        spotify: "https://open.spotify.com/playlist/37i9dQZF1DX9Kr5fX4EuP1",
        youtube: "https://www.youtube.com/playlist?list=PLIFxv8fhX3duS2X3UtbiZlL6kwV7a3oY_",
      },
      spanish: {
        spotify: "https://open.spotify.com/playlist/37i9dQZF1DX2L0iB23Enbq",
        youtube: "https://www.youtube.com/playlist?list=PLw-VjHDlEOgs658anSmk5kbQpFVEQUNS7",
      },
      korean: {
        spotify: "https://open.spotify.com/playlist/37i9dQZF1DX9SO2tJU7dEv",
        youtube: "https://www.youtube.com/playlist?list=PLqdVDFzFlhlfHq2FOlQ0pLNSkX3Qq8HvV",
      },
    },
    // Add all other weather for 'happy' here...
  },
  // Add all other moods here (sad, chill, energetic, romantic, anxious, motivated) similarly
  // I'll keep this minimal here, you can expand later
};

// Utility: generate random music notes floating in the background
function createMusicNote() {
  const note = document.createElement("div");
  note.classList.add("music-note");
