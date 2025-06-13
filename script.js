function generatePlaylist() {
  const mood = document.getElementById("mood").value;
  const weather = document.getElementById("weather").value;
  const platform = document.getElementById("platform").value;
  const language = document.getElementById("language").value;

  let playlistHTML = `<h2>🎵 Recommended ${platform} Playlist</h2><ul>`;

  // Dummy songs for simulation
  const songs = {
    happy: ["Happy – Pharrell", "Uptown Funk – Bruno Mars", "Can't Stop the Feeling – Justin Timberlake"],
    sad: ["Someone Like You – Adele", "Let Her Go – Passenger", "Fix You – Coldplay"],
    chill: ["Lo-Fi Chill Beats", "Coffee Time Jazz", "Sunday Afternoon Vibes"],
    energetic: ["Stronger – Kanye West", "Eye of the Tiger – Survivor", "Power – Little Mix"],
    romantic: ["Perfect – Ed Sheeran", "All of Me – John Legend", "Just the Way You Are – Bruno Mars"],
    anxious: ["Breathe – Télépopmusik", "Weightless – Marconi Union", "Let It Go – James Bay"],
    motivated: ["Hall of Fame – The Script", "Believer – Imagine Dragons", "On Top of the World – Imagine Dragons"]
  };

  const selectedSongs = songs[mood] || [];
  selectedSongs.forEach(song => {
    if (platform === "Spotify") {
      playlistHTML += `<li><a href="https://open.spotify.com/search/${encodeURIComponent(song)}" target="_blank">${song}</a></li>`;
    } else {
      playlistHTML += `<li><a href="https://www.youtube.com/results?search_query=${encodeURIComponent(song + " " + language)}" target="_blank">${song}</a></li>`;
    }
  });

  playlistHTML += "</ul>";
  document.getElementById("playlist").innerHTML = playlistHTML;
}

// Theme toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    toggle.textContent = document.body.classList.contains("light-mode") ? "🌙" : "☀️";
  });
});
