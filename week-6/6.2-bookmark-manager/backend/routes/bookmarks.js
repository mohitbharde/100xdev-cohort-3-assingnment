let bookmarks = []; // in memory space
let id = 0;
export async function addBookmark(req, res, next) {
    // write here

    const { bookmark, category } = req.body;
    if (!bookmark) {
        res.status(400).json({ error: "please provide bookmark " })
        return;
    }
    id++;
    let object = {
        id: id,
        bookmark: bookmark,
        category: category,
    }
    bookmarks.push(object);

    res.status(200).json({
        message: "Bookmark added successfully",
        bookmark: object,
    })


}

export async function deleteBookmark(req, res, next) {
    // write here

    const { id } = req.params;

    const index = bookmarks.findIndex((bookmark) => bookmark.id === id);

    bookmarks.splice(index, 1);

    res.status(200).json({
        message: "bookmark deleted successfully",
    })
}

export async function getAllBookmarks(req, res, next) {
    // write here

    res.status(200).json(bookmarks);

}