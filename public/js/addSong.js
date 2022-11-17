const addSong = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#song-title').value.trim();
    const artist = document.querySelector('#song-artist').value.trim();
    const album = document.querySelector('#song-album').value.trim();
    const playlist_id = document.querySelector('#song-title').dataset.id;
  
    if (title && artist && album) {
      const response = await fetch(`/viewPlaylist/:id`, {
        method: 'POST',
        body: JSON.stringify({ title,artist,album,playlist_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace(`/viewPlaylist/${playlist_id}`);
      } else {
        alert('Failed to create project');
      }
    }
};

const deleteSong = async (event) => {
  if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const playlistID = event.target.getAttribute('data-playlist');

      const response = await fetch(`/api/addSong/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace(`/playlist:${playlistID}`);
      } else {
        alert('Failed to delete project');
    }
  }
};

document.querySelector('#add-song').addEventListener('click', addSong);