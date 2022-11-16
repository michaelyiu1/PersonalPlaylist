const addSong = async (event) => {
    event.preventDefault();
    console.log('add song');
  
    const title = document.querySelector('#song-title').value.trim();
    const artist = document.querySelector('#song-artist').value.trim();
    const album = document.querySelector('#song-album').value.trim();

    console.log(title + artist + album);
  
    if (title && artist && album) {
      const response = await fetch(`/viewPlaylist/:id/addSong`, {
        method: 'POST',
        body: JSON.stringify({ title,artist,album }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
}

document.querySelector('#add-song').addEventListener('click', addSong);