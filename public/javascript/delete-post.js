async function deleteFormHandler(event) {
    event.preventDefault();
  
    //gets post id from url
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    // deletes post using delete route
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  // run deleteFormHandler once delete post is clicked
  document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
  