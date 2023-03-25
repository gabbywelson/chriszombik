export default function formatDate(pubDate) {
    const postDate = new Date(pubDate) //convert from String --> Date
    return postDate.toLocaleDateString()
}