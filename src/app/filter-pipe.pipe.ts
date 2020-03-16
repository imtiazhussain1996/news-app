


import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
 name: 'filter'
})
export class FilterPipePipe implements PipeTransform {
 transform(items: any[], field: string, searchText: string): any[] {
 if (!items) {return []};
 if (!searchText) {return items};
 searchText = searchText.toLowerCase();
 
 console.log("searchText================" + searchText)
 return items.filter( it => {
 
 return it[field].toLowerCase().includes(searchText);
 });
 
 }
}