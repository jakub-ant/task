import {
    addDistanceToOtherUsers
} from './addDistanceToOtherUsers';

const users = [{
        "id": 1,
        "name": "Leanne Graham",
        "address": {
            "geo": {
                "lat": "10",
                "lng": "20"
            }
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

test('Check if users get a new property', () => {
    expect((() => {
        const usersArray = addDistanceToOtherUsers(users);
        return usersArray[0]
    })()).toHaveProperty("otherUsersDistance");
});
test('Check if the property has the right value', () => {
    expect((() => {
        const usersArray = addDistanceToOtherUsers(users);
        return +usersArray[0].otherUsersDistance[0].distance.toFixed()
    })()).toEqual(1545);
});