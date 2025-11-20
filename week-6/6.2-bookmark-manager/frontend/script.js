const API_URL = 'http://localhost:3001/bookmarks';

// Fetch bookmarks when the page loads
document.addEventListener('DOMContentLoaded', () => {
    //   start here
    fetchBookmarks();
});

// Fetch bookmarks from the backend
function fetchBookmarks() {
    //  start here
    fetch(API_URL)
        .then(response => response.json())
        .then(bookmarks => {
            //console.log(bookmarks);
            bookmarks.forEach(bookmark => addBookmarkToDOM(bookmark));
        })
        .catch(error => console.error('Error:', error));
}

// Add a bookmark to the DOM
function addBookmarkToDOM(bookmarks) {
    //  start here
    const ul = document.getElementById("bookmark-list");

    console.log(bookmarks.id, bookmarks.bookmark, bookmarks.category);

    const li = document.createElement("li");
    li.setAttribute("id", bookmarks.id);

    const span = document.createElement("span")
    span.textContent = `${bookmarks.bookmark} (${bookmarks.category})`;

    const button = document.createElement("button");
    button.textContent = "Delete";
    button.classList.add("delete-btn");
    button.addEventListener("click", () => { deleteBookmark(bookmarks.id); });

    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
}

// Add a new bookmark
document.getElementById('add-bookmark-btn').addEventListener('click', () => {
    //  start here
    const url = document.getElementById("bookmark-url")
    const category = document.getElementById("bookmark-category")
    const bookmark = { bookmark: url.value, category: category.value }
    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bookmark)
    })
        .then(response => response.json())
        .then(bookmark => {
            console.log(bookmark);
            addBookmarkToDOM(bookmark.bookmark);
            url.value = ''; // Clear inputs after adding
            category.value = '';
        })
        .catch(error => console.log(error));
});

// Delete a bookmark
function deleteBookmark(id) {
    //  start here;
    console.log("id is ", id);
    fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    })
        .then(() => {
            const li = document.getElementById(id);
            li.remove();
        })
        .catch(err => console.log(err));
}