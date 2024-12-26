const form = document.getElementById('blog-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    const errorMessage = document.getElementById('error-message');
    if (!username || !title || !content) {
        errorMessage.textContent = "Please fill in all fields.";
        localStorage.setItem('username', username); //storing entered username
        return;
    }

    errorMessage.textContent = ""; // Clear any previous error message

    const blogPost = { username, title, content };

    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    posts.push(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(posts));

    window.location.href = 'blog.html';
});
