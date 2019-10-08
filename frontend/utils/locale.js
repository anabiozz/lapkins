export default class Locale {
  constructor(locale) {
    this.locale = locale
  }

  get = () => {
    switch (this.locale) {
      case 'RU':
        return new Map([
          ['sizes', 'Размер'],
          ['authors', 'Автор'],
          ['finish', 'Покрытие'],
          ['materials', 'Материалы'],
          ['print type', 'Тип печати'],
          ['semi-gloss', 'Полуглянцевая'],
          ['frame', 'Материал рамки'],
          ['wallart', 'Декор'],
          ['home', 'Домой'],
          ['posters-without-frame', 'Постеры'],
          ['framed-posters-wood', 'Постеры с деревянной рамкой'],
          ['framed-posters-plastic', 'Постеры с пластиковой рамкой'],
          ['cart', 'Корзина'],
          ['stationery', 'Канцелярия'],
          ['postcards', 'Открытки'],
          ['notebooks', 'Тетради'],
          ['diaries', 'Ежедневники'],
          ['calendars', 'Календари'],
          ['new', 'Новое'],
        ])
      default:
        return this
    }
  }
}