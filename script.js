const playlists = {
  happy: {
    sunny: ["'Walking on Sunshine' - Katrina & The Waves", "'Uptown Funk' - Bruno Mars"],
    rainy: ["'Banana Pancakes' - Jack Johnson", "'I'm Yours' - Jason Mraz"],
    cloudy: ["'Happy' - Pharrell Williams", "'Can't Stop the Feeling!' - Justin Timberlake"],
    snowy: ["'Let It Go' - Idina Menzel", "'Winter Wonderland' - Michael Bublé"]
  },
  sad: {
    sunny: ["'Fix You' - Coldplay", "'Tears Dry on Their Own' - Amy Winehouse"],
    rainy: ["'Someone Like You' - Adele", "'The Night We Met' - Lord Huron"],
    cloudy: ["'Breathe Me' - Sia", "'Skinny Love' - Bon Iver"],
    snowy: ["'River' - Joni Mitchell", "'Back to December' - Taylor Swift"]
  },
  chill: {
    sunny: ["'Sunflower' - Rex Orange County", "'Electric Feel' - MGMT"],
    rainy: ["'Coffee' - Miguel", "'Come Away With Me' - Norah Jones"],
    cloudy: ["'Lo-fi beats to relax/study to'", "'Weightless' - Marconi Union"],
    snowy: ["'Holocene' - Bon Iver", "'Cherry Wine' - Hozier"]
  },
  energetic: {
    sunny: ["'Stronger' - Kanye West", "'Can't Hold Us' - Macklemore"],
    rainy: ["'Run the World' - Beyoncé", "'Thunder' - Imagine Dragons"],
    cloudy: ["'Titanium' - David Guetta", "'Don't Stop Believin'' - Journey"],
    snowy: ["'Eye of the Tiger' - Survivor", "'Shake It Off' - Taylor Swift"]
  }
};

function generatePlaylist() {
  const mood = document.getElementById("mood").value;
  const weather = document.getElementById("weather").value;

  const list = playlists[mood][weather];
  const playlistDiv = document.getElementById("playlist");

  playlistDiv.innerHTML = "<h2>🎵 Your Playlist:</h2><ul>" +
    list.map(song => `<li>${song}</li>`).join('') + "</ul>";
}
