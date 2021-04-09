export function checkUniquePostTitles(posts) {
    const postsTitles = [];
    posts.forEach(post => postsTitles.push(post.title));
    const uniquePosts = [...new Set(postsTitles)];
    if (uniquePosts.length == posts.length) {
        const msg = 'Nie ma postów o takich samych tytułach';
        console.log(msg)
        return(msg)
    } else {
        const duplicateTitles = postsTitles.filter((e, i, a) => a.indexOf(e) !== i)
        console.log(duplicateTitles)
        return duplicateTitles
    }
}