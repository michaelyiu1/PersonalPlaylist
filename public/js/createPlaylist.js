const submitPlaylist = async (event) => {
    event.preventDefault();
    console.log('playlist submitted')
  
    const title = document.querySelector('#playlist-title').value.trim();
    const description = document.querySelector('#playlist-description').value.trim();

    console.log(title + description);
  
    if (title && description) {
      const response = await fetch(`/api/playlists`, {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.ok);
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create playlist');
      }
    };
}

document.querySelector('#submit-playlist').addEventListener('click', submitPlaylist);