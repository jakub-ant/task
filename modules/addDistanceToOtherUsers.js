import {
    distanceInK
} from './distanceInK.js';

export function addDistanceToOtherUsers(users) {
    const usersArray = users.slice();
    usersArray.forEach((user) => {
        user.otherUsersDistance = [];
        users.forEach((userDist) => {
            user.otherUsersDistance.push({
                id: userDist.id,
                distance: +distanceInK(user.address.geo.lat, user.address.geo.lng, userDist.address.geo.lat, userDist.address.geo.lng)
            })
            user.otherUsersDistance = user.otherUsersDistance.filter(item => item.id != user.id)

        })
    })
    // usersArray.forEach(user => {
    //     user.otherUsersDistance.sort((a, b) => (a.distance > b.distance) ? 1 : ((b.distance > a.distance) ? -1 : 0));
    //     user.theNearestUser = usersArray[user.otherUsersDistance[0].index]
    // })
    return usersArray
}