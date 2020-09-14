export const products = [
  {
    id: 1,
    name: 'Постер 1',
    attributes: [
      {name: 'Размер', value: ['300x400', '500x600']},
      {name: 'Рамка', value: ['Без рамки', 'Деревянная']},
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante lorem, varius sit amet scelerisque et, tincidunt nec ante. Etiam quis orci ex. Donec sem metus, sodales eu dignissim vitae, semper et ipsum. Nullam risus est, fermentum vel mauris eu, sagittis rhoncus magna. Proin in dui gravida ante vestibulum congue. Vestibulum a nulla sit amet felis laoreet ullamcorper a et tellus. Duis sollicitudin eget nulla in scelerisque..',
    category_id: 1,
    category: 'wallart',
  },
  {
    id: 2,
    name: 'Постер 2',
    attributes: [
      {name: 'Размер', value: ['300x400', '500x600']},
      {name: 'Рамка', value: ['Без рамки', 'Деревянная']},
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra.',
    category_id: 1,
    category: 'wallart',
  },
  {
    id: 3,
    name: 'Канцелярия 1',
    attributes: [],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra.',
    category_id: 2,
    category: 'stationery',
  },
  {
    id: 4,
    name: 'Канцелярия 2',
    attributes: [],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra.',
    category_id: 2,
    category: 'stationery',
  },
  {
    id: 5,
    name: 'Открытка 1',
    attributes: [
      {name: 'Размер', value: ['50x60']},
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra.',
    category_id: 3,
    category: 'stationery',
  },
  {
    id: 6,
    name: 'Открытка 2',
    attributes: [
      {name: 'Размер', value: ['50x60', '60x60']},
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra.',
    category_id: 3,
    category: 'stationery',
  },
  {
    id: 7,
    name: 'Лампа',
    attributes: [
      {name: 'Цвет', value: ['Белый', 'Красный']},
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra.',
    category_id: 3,
    category: 'stationery',
  }
];

// fetch(`${config.apiDomain}/api/v1/products/product?sku=${sku}`)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Could not fetch product product');
//     }
//     return response.json();
//   })
//   .then(product => {
//     setProduct(product);
//       product.variation.attributes.map((attribute => {
//           setAttributes(attributes => [...attributes, (attribute.name.toLowerCase() + '=' + attribute.value)]);
//       }));
//   })
//   .catch(error => {
//     console.error(error);
//   });

// let attributes = product.variation.attributes;
// let result = [];
// attributes.map(attribute => {
//     if (attribute.name.toLowerCase() === attr.name.toLowerCase()) {
//         console.log(attribute.name.toLowerCase());
//         console.log( attr.name.toLowerCase());
//         attribute.value = attr.value;
//     }
//     result.push(attribute.name.toLowerCase() + '=' + attribute.value);
// });

// fetch(`${config.apiDomain}/api/v1/products/product?sku=${sku}&attr=${result}`)
// .then((response) => {
//     if (!response.ok) {
//         throw new Error('Could not fetch product product');
//     }
//     return response.json();
// })
// .then(product => {
//     setProduct(product);
// })
// .catch(error => {
//     console.error(error);
// });


// fetch(`${config.apiDomain}/api/v1/products/products?dep=${category}&category=${subcategory}`)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Could not fetch products');
//     }
//     return response.json();
//   })
//   .then(products => {
//     setProducts(products);
//   })
//   .catch(error => {
//     console.error(error);
//   });