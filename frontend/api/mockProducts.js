export const products = [
  {
    id: 1,
    name: 'Постер 1',
    attributes: [
      {name: 'Размер', value: ['300x400', '500x600']},
      {name: 'Рамка', value: ['Без рамки', 'Деревянная']},
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante lorem, varius sit amet scelerisque et, tincidunt nec ante. Etiam quis orci ex. Donec sem metus, sodales eu dignissim vitae, semper et ipsum. Nullam risus est, fermentum vel mauris eu, sagittis rhoncus magna. Proin in dui gravida ante vestibulum congue. Vestibulum a nulla sit amet felis laoreet ullamcorper a et tellus. Duis sollicitudin eget nulla in scelerisque..',
    category: 'wallart',
    variations: [
      {
        id: 1,
        productId: 1,
        sku: 1,
        name: 'wood-framed-posters',
        default: true,
        attributes: [
          {name: 'Размер', value: '300x400'},
          {name: 'Рамка', value: 'Деревянная'},
        ],
        price: '50',
        thumbnail: 'https://picsum.photos/id/1/200/300',
        images: [{src: 'https://picsum.photos/id/1/200/300'},{src: 'https://picsum.photos/id/5/200/300'}],
      },
      {
        id: 2,
        productId: 1,
        sku: 2,
        name: 'wood-framed-posters',
        default: false,
        attributes: [
          {name: 'Размер', value: '500x600'},
          {name: 'Рамка', value: 'Деревянная'},
        ],
        price: '80',
        thumbnail: 'https://picsum.photos/id/2/200/300',
        images: [{src: 'https://picsum.photos/id/2/200/300'},{src: 'https://picsum.photos/id/6/200/300'}],
      },
      {
        id: 3,
        productId: 1,
        sku: 3,
        name: 'posters',
        default: true,
        attributes: [
          {name: 'Размер', value: '300x400'},
          {name: 'Рамка', value: 'Без рамки'},
        ],
        price: '57',
        thumbnail: 'https://picsum.photos/id/3/200/300',
        images: [{src: 'https://picsum.photos/id/3/200/300'},{src: 'https://picsum.photos/id/7/200/300'}],
      },
      {
        id: 4,
        productId: 1,
        sku: 4,
        default: false,
        name: 'posters',
        attributes: [
          {name: 'Размер', value: '500x600'},
          {name: 'Рамка', value: 'Без рамки'},
        ],
        price: '79',
        thumbnail: 'https://picsum.photos/id/4/200/300',
        images: [{src: 'https://picsum.photos/id/4/200/300'},{src: 'https://picsum.photos/id/8/200/300'}],
      },
    ],
  },
  {
    id: 2,
    name: 'Постер 2',
    attributes: [
      {name: 'Размер', value: ['300x400', '500x600']},
      {name: 'Рамка', value: ['Без рамки', 'Деревянная']},
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra.',
    category: 'wallart',
    variations: []
  },
  {
    id: 3,
    name: 'Канцелярия 1',
    attributes: [],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra.',
    category: 'stationery',
    variations: []
  },
  {
    id: 4,
    name: 'Канцелярия 2',
    attributes: [],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra.',
    category: 'stationery',
    variations: []
  },
  {
    id: 5,
    name: 'Открытка 1',
    attributes: [
      {name: 'Размер', value: ['50x60']},
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra.',
    category: 'stationery',
    variations: [
      {
        id: 6,
        productId: 5,
        sku: 6,
        default: true,
        name: 'postcards',
        attributes: [
          {name: 'Размер', value: '50x60'},
        ],
        price: '20',
        thumbnail: 'https://picsum.photos/id/6/200/300',
        images: [{src: 'https://picsum.photos/id/11/200/300'},{src: 'https://picsum.photos/id/12/200/300'}],
      },
    ]
  },
  {
    id: 6,
    name: 'Открытка 2',
    attributes: [
      {name: 'Размер', value: ['50x60', '60x60']},
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra.',
    category: 'stationery',
    variations: []
  },
  {
    id: 7,
    name: 'Лампа',
    attributes: [
      {name: 'Цвет', value: ['Белый', 'Красный']},
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra.',
    category: 'stationery',
    variations: [
      {
        id: 5,
        productId: 7,
        sku: 5,
        name: 'lamps',
        default: true,
        attributes: [
          {name: 'Цвет', value: 'Белый'},
        ],
        price: '700',
        thumbnail: 'https://picsum.photos/id/5/200/300',
        images: [{src: 'https://picsum.photos/id/9/200/300'},{src: 'https://picsum.photos/id/10/200/300'}],
      },
    ]
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