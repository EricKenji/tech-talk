async function newFormHandler(event) {
    event.preventDefault();
  
    //insert input in to post fields
    const title = document.querySelector('input[name="post-title"]').value;
    const post_content = document.querySelector('textarea[name="post-content"]').value;
  
    // add post route
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  // run newformhandler function once submit is clicked
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);