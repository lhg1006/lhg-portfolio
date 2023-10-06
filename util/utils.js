// utils.js
export function generatePosts() {
    const posts = [];
    for (let i = 1; i <= 30; i++) {
        posts.push({
            id: i,
            title: `제목 ${i}`,
            image: `https://via.placeholder.com/150?text=이미지${i}`,
        });
    }
    return posts;
}
