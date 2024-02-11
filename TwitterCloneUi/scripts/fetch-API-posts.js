async function postCreatePost() {
    var post = document.getElementById('popupInput').value;
    let token = localStorage.getItem("token");

    const res = await fetch('http://localhost:3000/api/v1/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            "content": post
        })
    });

    if (res.ok) {
        console.log('successful');
    } else {
        console.log('failed');
    }
}

async function getPosts() {
    let token = localStorage.getItem("token");

    const res = await fetch('http://localhost:3000/api/v1/posts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(user => {
            const posts = user.content;
            console.log(posts)

            // document.getElementById("posts-container").insertAdjacentHTML('beforeend', posts);

            var postDiv = document.createElement("div");
            postDiv.className = "post"
            var username = "Cosmos";

            postDiv.innerHTML = '<div class="post-username">' + username + '</div><div class="post-text">' + posts + '</div>';

            document.querySelector(".timeline-placeholder").appendChild(postDiv);
        })
    })
    .catch(error => console.log(error));
    

    // if (res.ok) {
    //     console.log('successful');
    //     posts = res.json();
    //     console.log(posts);
    // } else {
    //     console.log('failed');
    // }
}