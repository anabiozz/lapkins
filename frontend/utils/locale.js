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
          ['semi-gloss', 'Полуглянцевая']
        ])
      default:
        return this
    }
  }
}