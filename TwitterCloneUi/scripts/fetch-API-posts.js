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
            console.log(user);
            const posts = user.content;
            let postId = user.postId;
            console.log(typeof postId)
            // console.log(user.postId)

            // document.getElementById("posts-container").insertAdjacentHTML('beforeend', posts);

            var postDiv = document.createElement("div");
            postDiv.className = "post"

            postDiv.innerHTML = '<div class="post-username">' + user.postedBy + '</div><div class="post-text">' + posts + '</div>' + '<button class="like-button" onclick="likePost(\'' + postId + '\')">' + "Like" + '</button>';

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

async function likePost(postId) {
    let token = localStorage.getItem("token");
    console.log(postId)

    const res = await fetch('http://localhost:3000/api/v1/posts/'+postId, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            action: "like"
        })
    })
    .catch(error => console.log(error));
}