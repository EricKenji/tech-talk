async function editFormHandler(event) {
    event.preventDefault();
  
    // inserts input into post fields
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const post_content = document.querySelector('textarea[name="post-content').value;
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    // updates post using Put route
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        post_content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  // runs editFormHandler functions once edit button is clicked
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
  