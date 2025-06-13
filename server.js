const express = require('express');
const axios = require('axios');
const querystring = require('querystring');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const client_id = process.env.SPOTIFY_CLIENT_ID; 
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI; // e.g. http://localhost:3000/callback

// Step 1: Redirect user to Spotify login
app.get('/login', (req, res) => {
  const scope = 'playlist-read-private';
  const authQueryParams = querystring.stringify({
    response_type: 'code',
    client_id,
    scope,
    redirect_uri,
  });
  res.redirect(`https://accounts.spotify.com/authorize?${authQueryParams}`);
});

// Step 2: Spotify redirects here after login
app.get('/callback', async (req, res) => {
  const code = req.query.code || null;

  try {
    // Exchange authorization code for access token
    const tokenResponse = await axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      data: querystring.stringify({
        grant_type: 'authorization_code',
        code,
        redirect_uri,
        client_id,
        client_secret,
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const access_token = tokenResponse.data.access_token;
    const refresh_token = tokenResponse.data.refresh_token;

    // Redirect to frontend with tokens (or store in session/cookie)
    res.redirect(`http://localhost:5500/?access_token=${access_token}&refresh_token=${refresh_token}`);

  } catch (error) {
    console.error(error);
    res.send('Error during authentication');
  }
});

// Step 3: Search Spotify playlists (frontend calls this endpoint)
app.get('/search', async (req, res) => {
  const { q, access_token } = req.query;

  try {
    const response = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      params: {
        q,
        type: 'playlist',
        limit: 10,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Spotify API error' });
  }
});

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
