export const categories = [
  {
    id: 1,
    display: 'Wallart',
    url: 'wallart',
    superordinate: [
      {
        name: 'Размеры',
        items: [
          {
            id: 1,
            name: '300x400',
          },
          {
            id: 2,
            name: '500x600',
          }
        ]
      },
      {
        name: 'Рамка',
        items: [
          {
            id: 1,
            name: 'Деревянная',
          },
          {
            id: 2,
            name: 'Алюминий',
          }
        ]
      }
    ],
  },
  {
    id: 2,
    display: 'Канцелярия',
    url: 'stationery',
    superordinate: [
      {
        name: 'Размеры',
        items: [
          {
            id: 1,
            name: '300x400',
          },
          {
            id: 2,
            name: '500x600',
          }
        ]
      }
    ],
  }
];

// fetch(`${config.apiDomain}/api/v1/products/categories`)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Could not fetch categories');
//     }
//     return response.json();
//   })
//   .then(categories => {
//     console.log(categories);
//     setCategories(categories);
//   })
//   .catch(error => {
//     console.error(error);
//   });