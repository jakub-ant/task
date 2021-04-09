import {
    showNearestUser
} from './showNearestUser.js'

const users = [{
        "id": 1,
        "name": "Leanne Graham",
        "address": {
            "geo": {
                "lat": "10",
                "lng": "20"
            }
        // "otherUsersDistance":[{ index: 2, distance: 1544, index: 3, distance: 4458}]
        },
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "address": {
            "geo": {
                "lat": "20",
                "lng": "30"
            }
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "address": {
            "geo": {
                "lat": "40",
                "lng": "50"
            }
        }
    }
]
test('Check if the otherUsersDistance property which is an array is sorted properly', () => {
    expect((() => {
        const usersArr = showNearestUser(users);
        return usersArr[0].otherUsersDistance[0].distance < usersArr[0].otherUsersDistance[1].distance
    })()).toBeTruthy();
});
test('Check if the otherUsersDistance property which is an array has the correct length', () => {
    expect((() => {
        const usersArr = showNearestUser(users);
        return usersArr[0].otherUsersDistance
    })()).toHaveLength(--users.length);
});

test('Check if the otherUsersDistance property which is an array is sorted properly', () => {
    expect((() => {
        const usersArr = showNearestUser(users);
        const itemID1 = usersArr.find(item=>item.id==1)
        itemID1.otherUsersDistance.forEach(user => user.distance = +user.distance.toFixed());
        return itemID1.otherUsersDistance[0].id
    })()).toBe(2);
});

