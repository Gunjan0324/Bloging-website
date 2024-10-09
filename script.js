document.addEventListener('DOMContentLoaded', () => {
    const posts = [
        {
            title: "Introduction to Python",
            summary: "Learn the basics of Python, a powerful programming language, in this introductory tutorial.",
            link: "post1.html",
            date: "October 10, 2024"
        },
        {
            title: "JavaScript for Beginners",
            summary: "Get started with JavaScript in this beginner-friendly guide, perfect for new coders.",
            link: "post2.html",
            date: "October 11, 2024"
        }
    ];

    const postsContainer = document.getElementById('posts-container');

    posts.forEach(post => {
        const article = document.createElement('article');
        article.classList.add('post');
        article.innerHTML = `
            <h3>${post.title}</h3>
            <p><small>Posted on ${post.date}</small></p>
            <p>${post.summary} <a href="${post.link}">Read more...</a></p>
        `;
        postsContainer.appendChild(article);
    });
});
