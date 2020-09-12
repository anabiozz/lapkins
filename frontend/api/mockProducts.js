export const products = [
  {
    id: 1,
    name: 'Постер 1',
    attributes: [
      {name: 'Размер', value: ['300x400', '500x600']},
      {name: 'Рамка', value: ['Без рамки', 'Деревянная']},
    ],
    description: 'description',
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
    description: 'description',
    category_id: 1,
    category: 'wallart',
  },
  {
    id: 3,
    name: 'Канцелярия 1',
    attributes: [],
    description: 'description',
    category_id: 2,
    category: 'stationery',
  },
  {
    id: 4,
    name: 'Канцелярия 2',
    attributes: [],
    description: 'description',
    category_id: 2,
    category: 'stationery',
  },
  {
    id: 5,
    name: 'Открытка 1',
    attributes: [
      {name: 'Размер', value: ['50x60']},
    ],
    description: 'description',
    category_id: 3,
    category: 'stationery',
  },
  {
    id: 6,
    name: 'Открытка 2',
    attributes: [
      {name: 'Размер', value: ['50x60', '60x60']},
    ],
    description: 'description',
    category_id: 3,
    category: 'stationery',
  },
  {
    id: 7,
    name: 'Лампа',
    attributes: [
      {name: 'Цвет', value: ['Белый', 'Красный']},
    ],
    description: 'description',
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