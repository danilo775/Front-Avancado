import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, column: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      if (column) {
        if (column === 'dataNascimento' || column === 'dataSaida') {
          const dataValue = new Date(item[column]);
          if (!isNaN(dataValue.getTime())) {
            const formattedDate = this.formatDate(dataValue);
            return formattedDate.includes(searchText);
          }
        } else {
          const value = item[column];
          if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
            return value.toString().toLowerCase().includes(searchText);
          }
        }
      } else {
        return Object.values(item).some(value => {
          if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
            return value.toString().toLowerCase().includes(searchText);
          }
          return false;
        });
      }
      return false;
    });
  }

  private formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}
