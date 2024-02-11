function openPopup() {
    document.getElementById("overlayPage").style.display = "block";
    document.getElementById("popupContainer").style.display = "block";
  }

function closePopup() {
    document.getElementById("overlayPage").style.display = "none";
    document.getElementById("popupContainer").style.display = "none";
  }

function submitPost() {
    var postText = document.getElementById("popupInput").value;

    if (postText.trim() !== "") {

      var postDiv = document.createElement("div");
      postDiv.className = "post"
      var username = "Cosmos";

      postDiv.innerHTML = '<div class="post-username">' + username + '</div><div class="post-text">' + postText + '</div>';

      document.querySelector(".timeline-placeholder").appendChild(postDiv);
      closePopup();
    } else {
      alert("Post cannot be empty!");
    }
  }