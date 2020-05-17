import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listSearch'
})
export class ListSearchPipe implements PipeTransform {

  transform(value: any, sName: string): any {
    // console.log("hey show me data",value);
    if(sName===""){
      return value;
    }
    const tempArr:any[] = [];
    for(let i=0; i<=value.length; i++){
      let listName:string = value[i].name;
      if(listName.startsWith(sName)){
        tempArr.push(value[i])
      }
    }
    return tempArr;
  }

}
