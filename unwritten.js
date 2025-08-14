
document.addEventListener("DOMContentLoaded", function () {
    const commentBox = document.querySelector(".comment-section textarea");
    const postButton = document.querySelector(".comment-section button");
    const commentList = document.createElement("ul");
    commentList.classList.add("comment-list"); // CSS ke liye class add ki
    document.querySelector(".comment-section").appendChild(commentList);

    // ✅ Pehle se saved comments load karo (LocalStorage se)
    let savedComments = JSON.parse(localStorage.getItem("comments")) || [];
    savedComments.forEach(comment => addCommentToList(comment));

    // ✅ Button pe event listener lagao
    postButton.addEventListener("click", function () {
        let commentText = commentBox.value.trim();
        if (commentText) {
            addCommentToList(commentText);
            
            // ✅ Comment save karo LocalStorage me
            savedComments.push(commentText);
            localStorage.setItem("comments", JSON.stringify(savedComments));

            commentBox.value = ""; // Clear textarea after posting
        }
});

    function addCommentToList(comment) {
        let li = document.createElement("li");
        li.textContent = comment;
        commentList.appendChild(li);
    }
});
