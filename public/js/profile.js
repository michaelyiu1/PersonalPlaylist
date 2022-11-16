const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');

      const response = await fetch(`/api/playlists/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
    }
  }
};
  

  document.querySelector('#delete-playlist').addEventListener('click', delButtonHandler);

  
  