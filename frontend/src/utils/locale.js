export class Locale {

  getLocale(locale) {
    switch (locale) {
      case 'RU':
        return new Map([
          ['sizes', 'Размер'],
          ['authors', 'Автор'],
          ['materials', 'Материалы'],
          ['print_type', 'Тип печати'],
        ])
    }
  }

}