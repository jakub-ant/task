'use strict'

import {getData} from './modules/getData.js'
import {getNumberOfUsersPosts} from './modules/getNumberOfUsersPosts.js'
import {checkUniquePostTitles} from './modules/checkUniquePostTitles.js'
import {showNearestUser} from './modules/showNearestUser.js'
 


const users =  await getData('https://jsonplaceholder.typicode.com/users');
const posts =  await getData('https://jsonplaceholder.typicode.com/posts');


const usersPosts = document.querySelector('#users-posts')
const postsUniqness = document.querySelector('#posts-uniqness')
const nearestUsers = document.querySelector('#nearest-users')

const nearestUsersArr = showNearestUser(users)

const usersPostsArr = getNumberOfUsersPosts(users, posts);
const checkUniquePostTitlesInfo =   checkUniquePostTitles(posts)
 
usersPostsArr .forEach(user=>{
    const newP = document.createElement('p')
    newP.textContent = `${user.name} napisał(a) ${user.posts.length} postów`
    usersPosts.appendChild(newP)}
)
nearestUsersArr.forEach( user=>{
    const newP = document.createElement('p');
    newP.textContent = `Najbliższym użytkownikiem ${user.name} jest ${user.theNearestUser.name}`
    nearestUsers.appendChild(newP)
})

const showcheckUniquePostTitles=()=>{
    if(typeof checkUniquePostTitlesInfo ==='string'){
        const newH1 = document.createElement('h1');
        newH1.textContent = checkUniquePostTitlesInfo
        postsUniqness.appendChild(newH1)
    } else if(typeof checkUniquePostTitlesInfo ==='array'){
        const newH1 = document.createElement('h1');
        newH1.textContent = 'Duplikaty'
        postsUniqness.appendChild(newH1)
        checkUniquePostTitlesInfo.forEach(post=>{
            const newP = document.createElement('p');
            newP.textContent = p
            nearestUsers.appendChild(newP)
        })
    }
} 
showcheckUniquePostTitles()