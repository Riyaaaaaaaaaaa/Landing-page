
function generatePlaylist() {
  const mood = document.getElementById("mood").value;
  const weather = document.getElementById("weather").value;
  const platform = document.querySelector('input[name="platform"]:checked').value;
  const language = document.getElementById("language").value;
  const playlistDiv = document.getElementById("playlist");
  playlistDiv.innerHTML = `
    <p><strong>Platform:</strong> ${platform.toUpperCase()}</p>
    <p><strong>Mood:</strong> ${mood}</p>
    <p><strong>Weather:</strong> ${weather}</p>
    <p><strong>Language:</strong> ${language}</p>
    <p><em>🎶 Generating a curated playlist for you...</em></p>
  `;
  // YouTube playlist map (Add more as needed)
  const youtubePlaylists = {
    happy: "PL55713C70BA91BD6E",
    sad: "PLMC9KNkIncKtPzgY-5rmhvj7fax8fdxoj",
    chill: "PLRbjoNhQ1PaE4aiEpKxIcxP6b8U7B7mK8",
    energetic: "PLrNF-MtnddY2s30kIArq45rcUyfBHJtY5",
    romantic: "PL7PKV1tLnTz6uS0P_bEF1pkl1ZYFzDi8Z",
    anxious: "PL3oW2tjiIxvQkA1UvS6Mdhafsl_OowjCr",
    motivated: "PLFgquLnL59alCl_2TQvOiD5Vgm1hCaGSI"
  };

  // Spotify playlist map (public links that embed easily)
  const spotifyPlaylists = {
    happy: "https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC",
    sad: "https://open.spotify.com/embed/playlist/37i9dQZF1DX7qK8ma5wgG1",
    chill: "https://open.spotify.com/embed/playlist/37i9dQZF1DX889U0CL85jj",
    energetic: "https://open.spotify.com/embed/playlist/37i9dQZF1DX1g0iEXLFycr",
    romantic: "https://open.spotify.com/embed/playlist/37i9dQZF1DWU0ScTcjJBdj",
    anxious: "https://open.spotify.com/embed/playlist/37i9dQZF1DWU0ScTcjJBdj",
    motivated: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4fpCWaHOned"
  };

  playlistDiv.innerHTML = ""; // Clear previous

  if (platform === "youtube") {
    const youtubeId = youtubePlaylists[mood];
    playlistDiv.innerHTML = `
      <h3>Your YouTube Playlist:</h3>
      <iframe width="100%" height="380" 
        src="https://www.youtube.com/embed/videoseries?list=${youtubeId}" 
        frameborder="0" allowfullscreen>
      </iframe>
    `;
  } else {
    const spotifyLink = spotifyPlaylists[mood];
    playlistDiv.innerHTML = `
      <h3>Your Spotify Playlist:</h3>
      <iframe style="border-radius:12px" 
        src="${spotifyLink}" 
        width="100%" height="380" frameBorder="0" allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy">
      </iframe>
    `;
  }
}
const platformButtons = document.querySelectorAll('.platform-btn');
let selectedPlatform = 'spotify';

platformButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    platformButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedPlatform = btn.dataset.platform;
  });
});

document.getElementById('generateBtn').addEventListener('click', () => {
  const mood = document.getElementById('mood').value;
  const language = document.getElementById('language').value;

  const playlistDiv = document.getElementById('playlist');
  playlistDiv.innerHTML = `<p>Fetching ${selectedPlatform} playlist for mood <strong>${mood}</strong> and language <strong>${language}</strong>...</p>`;

  // Your API call or playlist logic here
});

