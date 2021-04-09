import {
    addDistanceToOtherUsers
} from './addDistanceToOtherUsers.js'
export function showNearestUser(users) {
    const usersArr = addDistanceToOtherUsers(users);
    usersArr.forEach(user => {
        user.otherUsersDistance.sort((a, b) => (a.distance > b.distance) ? 1 : ((b.distance > a.distance) ? -1 : 0));
        user.theNearestUser =usersArr.find(item=>item.id==user.otherUsersDistance[0].id)
    })
    usersArr.forEach(user => console.log(`Najbliższym użytkownikiem ${user.name} jest ${user.theNearestUser.name}`));
    return usersArr
 }