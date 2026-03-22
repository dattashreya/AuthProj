import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filterText: string): any[] {
    if (!items || !filterText) {
      return items;
    }

    // Convert filterText to lowercase once for efficiency
    const lowerCaseFilterText = filterText.toLowerCase();

    return items.filter(item => {
      // Assuming 'item' is a string or an object property, adjust as needed.
      // If filtering an array of strings:
      if (typeof item === 'string') {
        return item.toLowerCase().includes(lowerCaseFilterText);
      }
      // If filtering an array of objects based on a 'name' property:
      if (item.name && typeof item.name === 'string') {
        return item.name.toLowerCase().includes(lowerCaseFilterText);
      }
      return false;
    });
  }
}
