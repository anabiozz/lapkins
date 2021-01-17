const bits = {
  '300x400': 2,
  '500x600': 4,
  'bezramki': 8,
  'derevo': 16,
};

export const variations = [
  {
    productId: 1,
    sku: 2,
    name: 'wood-framed-posters',
    title: 'Постер 300x400 в деревянной раме',
    description: 'Lorem ipsum dolor sit amet, consectetur adip vel mauris eu, sagittis rhoncus magna. Proin in dui gravida ante vestibulum congue. Vestibulum a nulla sit amet felis laoreet ullamcorper a et tellus. Duis sollicitudin eget nulla in scelerisque..',
    attributes: [
      {
        attrId: 1,
        name: 'Размер',
        value: '300x400',
        bit: bits['300x400'],
      },
      {
        attrId: 2,
        name: 'Рамка',
        value: 'Деревянная',
        bit: bits['derevo'],
      },
    ],
    bits: bits['300x400'] | bits['derevo'],
    price: '50',
    thumbnail: 'https://picsum.photos/id/1/200/300',
    images: [{src: 'https://picsum.photos/id/1/200/300'},{src: 'https://picsum.photos/id/5/200/300'}],
  },
  {
    productId: 1,
    sku: 4,
    title: 'Постер 500x600 в деревянной раме',
    name: 'wood-framed-posters',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante lorem, varius sit amet scelerisque et, tincidunt nec ante. Etiam quis orci ex. Donec sem metus, sodales eu rhoncus magna. Proin in dui gravida ante vestibulum congue. Vestibulum a nulla sit amet felis laoreet ullamcorper a et tellus. Duis sollicitudin eget nulla in scelerisque..',
    attributes: [
      {
        attrId: 1,
        name: 'Размер',
        value: '500x600',
        bit: bits['500x600'],
      },
      {
        attrId: 2,
        name: 'Рамка',
        value: 'Деревянная',
        bit: bits['derevo'],
      },
    ],
    bits: bits['500x600'] | bits['derevo'],
    price: '80',
    thumbnail: 'https://picsum.photos/id/2/200/300',
    images: [{src: 'https://picsum.photos/id/2/200/300'},{src: 'https://picsum.photos/id/6/200/300'}],
  },
  {
    productId: 1,
    sku: 1,
    title: 'Постер 300x400',
    name: 'posters',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante lorem, varius sit amet scelerisque et, tincidunt nec ante. Etiam quis orci ex. Donec sem metus, sodales eu dignissim vitae, semper et ipsum. Nullam risus est, fermentum vel mauris eu, sagittis rhoncus magna. Proin in dui eget nulla in scelerisque..',
    attributes: [
      {
        attrId: 1,
        name: 'Размер',
        value: '300x400',
        bit: bits['300x400'],
      },
      {
        attrId: 2,
        name: 'Рамка',
        value: 'Без рамки',
        bit: bits['bezramki'],
      },
    ],
    bits: bits['300x400'] | bits['bezramki'],
    price: '57',
    thumbnail: 'https://picsum.photos/id/3/200/300',
    images: [{src: 'https://picsum.photos/id/3/200/300'},{src: 'https://picsum.photos/id/7/200/300'}],
  },
  {
    productId: 1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sodales eu dignissim vitae, semper et ipsum. Nullam risus est, fermentum vel mauris eu, sagittis rhoncus magna. Proin in dui gravida ante vestibulum congue. Vestibulum a nulla sit amet felis laoreet ullamcorper a et tellus. Duis sollicitudin eget nulla in scelerisque..',
    sku: 3,
    title: 'Постер 500x600',
    name: 'posters',
    attributes: [
      {
        attrId: 1,
        name: 'Размер',
        value: '500x600',
        bit: bits['500x600'],
      },
      {
        attrId: 2,
        name: 'Рамка',
        value: 'Без рамки',
        bit: bits['bezramki'],
      },
    ],
    bits: bits['500x600'] | bits['bezramki'],
    price: '79',
    thumbnail: 'https://picsum.photos/id/4/200/300',
    images: [{src: 'https://picsum.photos/id/4/200/300'},{src: 'https://picsum.photos/id/8/200/300'}],
  },
  {
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
  {
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