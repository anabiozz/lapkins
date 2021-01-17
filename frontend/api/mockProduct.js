const bits = {
    '300x400': 2,
    '500x600': 4,
    'bezramki': 8,
    'derevo': 16,
};

export const product = {
    id: 1,
    name: 'Постер 1',
    attributes: [
        {
            name: 'Размер',
            value: [
                {
                    attrId: 1,
                    value: '300x400',
                    bit: bits['300x400'],
                },
                {
                    attrId: 1,
                    value: '500x600',
                    bit: bits['500x600'],
                },
            ]
        },
        {
            name: 'Рамка',
            value: [
                {
                    attrId: 2,
                    value: 'Без рамки',
                    bit: bits['bezramki'],
                },
                {
                    attrId: 2,
                    value: 'Деревянная',
                    bit: bits['derevo'],
                },
            ]
        },
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante lorem, varius sit amet scelerisque et, tincidunt nec ante. Etiam quis orci ex. Donec sem metus, sodales eu dignissim vitae, semper et ipsum. Nullam risus est, fermentum vel mauris eu, sagittis rhoncus magna. Proin in dui gravida ante vestibulum congue. Vestibulum a nulla sit amet felis laoreet ullamcorper a et tellus. Duis sollicitudin eget nulla in scelerisque..',
    category: 'wallart',
};