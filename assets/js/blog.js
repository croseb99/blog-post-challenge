document.addEventListener('DOMContentLoaded', function () {
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const postList = document.getElementById('post-list');

    posts.forEach(post => {
        const li = document.createElement('li');
        li.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p><small>By ${post.username}</small>`;
        postList.appendChild(li);
    });
});