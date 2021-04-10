import { Pipe, PipeTransform } from "@angular/core"


@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    return items.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText) || it.full_name.toLocaleLowerCase().includes(searchText);
    });
  }
}
