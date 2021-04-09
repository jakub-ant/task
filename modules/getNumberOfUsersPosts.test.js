import {getNumberOfUsersPosts} from './getNumberOfUsersPosts.js'

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

const posts = [{userId: 1},{userId: 1},{userId: 1},{userId: 2},{userId: 2},{userId: 3},{userId: 3},{userId: 4}]

test('Check is the first user gets the right number of posts', () => {
    expect((()=>{const usersArr = getNumberOfUsersPosts(users, posts); return usersArr[0].posts.length})() ).toBe(3);
});
test('Check is the second user gets the right number of posts', () => {
    expect((()=>{const usersArr = getNumberOfUsersPosts(users, posts); return usersArr[1].posts.length})() ).toBe(2);
});

test("Check if the users array's length remains constant", () => {
    expect((()=>{const usersArr = getNumberOfUsersPosts(users, posts); return usersArr[3] })()).toBeUndefined();
});