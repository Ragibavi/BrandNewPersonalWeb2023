<template>
  <div class="container-playlist">
    <h1 class="text-playlist">Playlist</h1>
    <p class="text-playlist-description">Here are some collections of my music playlist</p>
    <h2 class="coming-soon">My 10 Recently Played Tracks</h2>
    <div v-if="recentlyPlayedTracks.length > 0" class="playlist-scroll-container">
      <div class="card-body">
        <div v-for="(track, index) in recentlyPlayedTracks" :key="index" class="track-card" @click="playTrack(track.uri)">
          <img :src="track.image" alt="Album cover" class="track-image" />
          <div class="track-info">
            <h3 class="track-name">{{ track.name }}</h3>
            <p class="track-artist">{{ track.artist }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      playlistStatus: 'Coming Soon',
      accessToken: localStorage.getItem('access_token') || '',
      refreshToken: localStorage.getItem('refresh_token') || '',
      clientId: '2f16ae0e1c624db59bfd694d23f59280',
      clientSecret: '06f2188396ed48cbb2496a75aa44f5bb',
      recentlyPlayedTracks: [],
      redirectUri: 'https://ragibavi-personalweb.vercel.app/playlist',
      // redirectUri: 'http://localhost:5173/playlist',
    };
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    // If there's no access token, and we have a code, exchange it for a token
    if (!this.accessToken && code) {
      console.log('Code received, fetching token...');
      this.getTokenFromCode(code);
    } else if (this.accessToken) {
      console.log('Access token found:', this.accessToken);
      this.fetchRecentlyPlayed();
    } else {
      console.log('No access token and no code, redirecting to Spotify...');
      this.redirectToSpotifyAuth();
    }
  },
  methods: {
    redirectToSpotifyAuth() {
      const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${this.clientId}&redirect_uri=${encodeURIComponent(this.redirectUri)}&scope=user-read-recently-played`;
      window.location.href = authUrl;
    },

    async getTokenFromCode(code) {
      try {
        const response = await axios.post(
          'https://accounts.spotify.com/api/token',
          `grant_type=authorization_code&code=${code}&redirect_uri=${encodeURIComponent(this.redirectUri)}`,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
              username: this.clientId,
              password: this.clientSecret,
            },
          }
        );
        this.accessToken = response.data.access_token;
        this.refreshToken = response.data.refresh_token;
        localStorage.setItem('access_token', this.accessToken);
        localStorage.setItem('refresh_token', this.refreshToken); // Save refresh token
        console.log('Access Token:', this.accessToken);
        this.fetchRecentlyPlayed();
      } catch (error) {
        console.error('Error fetching token:', error.response?.data);
        this.playlistStatus = 'Error fetching token.';
      }
    },

    async refreshAccessToken() {
      try {
        console.log('Refreshing access token...');
        const response = await axios.post(
          'https://accounts.spotify.com/api/token',
          `grant_type=refresh_token&refresh_token=${this.refreshToken}`,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
              username: this.clientId,
              password: this.clientSecret,
            },
          }
        );
        this.accessToken = response.data.access_token;
        localStorage.setItem('access_token', this.accessToken);
        console.log('Access token refreshed:', this.accessToken);
        this.fetchRecentlyPlayed();
      } catch (error) {
        console.error('Error refreshing token:', error.response?.data);
        this.playlistStatus = 'Error refreshing token.';
      }
    },

    async fetchRecentlyPlayed(limit = 10) {
      if (!this.accessToken) {
        if (this.refreshToken) {
          console.log('Attempting to refresh token...');
          await this.refreshAccessToken();
        } else {
          console.log('No refresh token, redirecting to Spotify...');
          this.redirectToSpotifyAuth();
        }
        return;
      }

      console.log('Fetching recently played tracks...');
      this.playlistStatus = 'Fetching recently played tracks...';

      try {
        const response = await axios.get('https://api.spotify.com/v1/me/player/recently-played', {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
          params: {
            limit: limit,
          },
        });

        console.log('Recently played tracks:', response.data);
        this.recentlyPlayedTracks = response.data.items.map(item => ({
          name: item.track.name,
          artist: item.track.artists[0].name,
          image: item.track.album.images[0].url,
          uri: item.track.id,
        }));

        this.playlistStatus = 'Recently played tracks fetched successfully!';
      } catch (error) {
        console.error('Error fetching recently played tracks:', error.response?.data);
        this.playlistStatus = 'Error fetching recently played songs.';
      }
    },

    // Play track by opening it in Spotify
    playTrack(uri) {
      const spotifyUrl = `https://open.spotify.com/track/${uri}`;
      window.open(spotifyUrl, '_blank');
    },
  },
};
</script>

<style scoped>
body.dark-mode .text-playlist,
body.dark-mode .text-playlist-description,
body.dark-mode .coming-soon {
  color: #ffffff;
  background-color: #666;
}

.container-playlist {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 968px;
  width: 100%;
  margin: 25px auto;
}

.text-playlist {
  font-size: 40px;
  margin-top: -35px;
  font-family: pokemon-fill;
}

.text-playlist-description {
  font-size: 20px;
  margin-top: -10px;
}

.coming-soon {
  text-align: center;
  font-size: 3rem;
  font-family: pokemon-fill;
  margin: 0;
}

.playlist-scroll-container {
  width: 40%; 
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-body{
  height: 600px; 
  overflow-y: auto;
  padding: 10px;
  font-size: 14px;
}


.track-card {
  display: flex;
  align-items: center;
  height: auto;
  margin-top: 7px;
  margin-bottom: 7px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  width: 100%; 
}

.track-card:hover {
  transform: scale(1.05);
}

.track-image {
  width: 30%; 
  border-radius: 8px;
  margin: 7px;
  height: auto;
  object-fit: cover;
  margin-right: 15px;
}

.track-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1; 
}

.track-name {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
}

.track-artist {
  font-size: 1rem;
  color: #666;
  margin-top: 5px;
}

.playlist-scroll-container::-webkit-scrollbar {
  display: none;
}

.card-body::-webkit-scrollbar {
  display: none; 
}


@media screen and (max-width: 719px) {
  .text-playlist {
    margin-top: 20px;
  }
}
</style>