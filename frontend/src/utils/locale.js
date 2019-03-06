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
          ['materials', 'Материалы'],
          ['print_type', 'Тип печати'],
        ])
      default:
        return null
    }
  }
}