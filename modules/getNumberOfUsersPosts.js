export function getNumberOfUsersPosts(users, posts) {
    users.forEach(user => {
        const userPosts = posts.filter(post => post.userId == user.id)
        user.posts = [...userPosts];
        console.log(`${user.name} napisał(a) ${user.posts.length} postów`)
    })
    return users;
}