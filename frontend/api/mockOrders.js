export const orders = [
  {
    id: 1,
    customerId: 1,
    customerInfo: {
      phone: '34234234234',
      name: 'qwerty',
      lastname: 'asdfgh',
      email: 'asds@sadasd.com',
    },
    addressInfo: {
      city: 'moscow',
      street: 'dasdsada',
      apartment: 78,
      house: 123,
      buzzer: '34B2343',
      floor: 2,
    },
    orderStatus: 'Paid', // Delivered, Cancelled
    shippingMethod: 'Почта',
    placedDatetime: '',
    deliveredDatetime: '',
    shippingCharges: '',
    address: '',
    details: [
      {
        id: 1,
        productId: 1,
        orderStatus: 'Paid', // Delivered, Cancelled
        orderId: 1,
        quantity: 4,
        deliveredDatetime: '',
      },
      {
        id: 2,
        productId: 4,
        orderStatus: 'Paid', // Delivered, Cancelled
        orderId: 1,
        quantity: 4,
        deliveredDatetime: '',
      }
    ],
  }
];