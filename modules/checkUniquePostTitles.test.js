import {
    checkUniquePostTitles
} from './checkUniquePostTitles.js'



test('Check if all posts have unique titles', () => {
    const posts = [{
            title: 'a'
        },
        {
            title: 'b'
        }, {
            title: 'c'
        },
        {
            title: 'd'
        }

    ]
    expect(checkUniquePostTitles(posts)).toBe('Nie ma postów o takich samych tytułach');
});


test('Check if the func returns duplicate titles', () => {
    const posts = [{
            title: 'a'
        },
        {
            title: 'a'
        }, {
            title: 'c'
        },
        {
            title: 'c'
        }

    ]
    expect(checkUniquePostTitles(posts)).toStrictEqual(['a', 'c']);
});