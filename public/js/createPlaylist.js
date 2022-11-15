const submitPlaylist = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#playlist-title').value.trim();
    //const song = document.querySelector('#playlist-song').value.trim();
    const description = document.querySelector('#playlist-description').value.trim();
  
    if (name && description) {
      const response = await fetch(`/api/playlists`, {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create playlist');
      }
    }
};

const createPlaylist = async () => {
    console.log('create Playlist');
    const response = await fetch('/api/createPlaylist', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
}

document.querySelector('#submit-playlist').addEventListener('submit', submitPlaylist);
document.querySelector('#create-playlist').addEventListener('click', createPlaylist);