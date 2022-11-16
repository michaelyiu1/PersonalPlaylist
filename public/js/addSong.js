const addSong = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#song-title').value.trim();
    const artist = document.querySelector('#song-artist').value.trim();
    const album = document.querySelector('#song-album').value.trim();
    const playlistID = document.querySelector('#song-title').dataset.id;
  
    if (title && artist && album) {
      const response = await fetch(`/viewPlaylist/:id`, {
        method: 'POST',
        body: JSON.stringify({ title,artist,album,playlistID }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace(`/viewPlaylist/${playlistID}`);
      } else {
        alert('Failed to create project');
      }
    }
}

document.querySelector('#add-song').addEventListener('click', addSong);