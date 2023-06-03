import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'level'
})
export class LevelPipe implements PipeTransform {

  transform(value: number): String {
    let stars="";
    for (let index = 0; index < value; index++) {      
      stars+="⭐";
    }
    return stars;
  }

}
