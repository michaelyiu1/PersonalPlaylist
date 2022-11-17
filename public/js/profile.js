const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      console.log('id for playlist is' + id);

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
  
  
if(document.querySelector('#delete-playlist')) {
  document.querySelector('#delete-playlist').addEventListener('click', delButtonHandler);
}

  
  