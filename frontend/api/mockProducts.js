export const products = [
  {
    id: 1,
    name: 'Постер 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante lorem, varius sit amet scelerisque et, tincidunt nec ante. Etiam quis orci ex. Donec sem metus, sodales eu dignissim vitae, semper et ipsum. Nullam risus est, fermentum vel mauris eu, sagittis rhoncus magna. Proin in dui gravida ante vestibulum congue. Vestibulum a nulla sit amet felis laoreet ullamcorper a et tellus. Duis sollicitudin eget nulla in scelerisque..',
    basicCategory: 'posters',
    price: '50',
    thumbnail: 'https://picsum.photos/id/1/200/300',
  },
  {
    id: 2,
    name: 'Постер 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra.',
    basicCategory: 'posters',
    price: '50',
    thumbnail: 'https://picsum.photos/id/2/200/300',
  },
  {
    id: 3,
    name: 'Wood pen',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra.',
    basicCategory: 'wood-pans',
    price: '50',
    thumbnail: 'https://picsum.photos/id/3/200/300',
  },
  {
    id: 4,
    name: 'Ручка',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra.',
    basicCategory: 'pens',
    price: '50',
    thumbnail: 'https://picsum.photos/id/4/200/300',
  },
  {
    id: 5,
    name: 'Открытка 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra.',
    basicCategory: 'postcards',
    price: '50',
    thumbnail: 'https://picsum.photos/id/5/200/300',
  },
  {
    id: 6,
    name: 'Открытка 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra.',
    basicCategory: 'postcards',
    price: '50',
    thumbnail: 'https://picsum.photos/id/6/200/300',
  },
  {
    id: 7,
    name: 'Лампа',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra.',
    basicCategory: 'lamps',
    price: '50',
    thumbnail: 'https://picsum.photos/id/7/200/300',
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