import {Tovar} from "./Tovar";
import {ConfigService} from "./config.service";
import {TovarType} from "./TovarType";

export class TovarList{
  tovars: Tovar[] = [];
  tovarsSearch: Tovar[] = [];
  tovarsSearchString: String[] = [];


  constructor(private config: ConfigService) {

    this.config.tovarType$.subscribe(() =>{
      let type = this.config.tovarType$.value;
      this.search(type.id);
    })

    this.tovars.push(new Tovar(0,"Хліб",0,10,"Смачний хліб!"))
    this.tovars.push(new Tovar(1,"Лаваш",0,11,"Смачна шаурма!"))
    this.tovars.push(new Tovar(2,"Кока-кола",1,11,"Прикольна кока кола!"))
    this.tovars.push(new Tovar(3,"Фанта",1,7,"Фанта смак мандарин!"))
    this.tovars.push(new Tovar(4,"Швепс",1,7,"Швепс смак гранат!!"))

    this.search(0);
  }

   add(tovar: Tovar){
    this.tovars.push(
      tovar
    )
    this.search(tovar.tovarTypeId)
  }

  private search(id: number) {
    this.tovarsSearch = this.tovars.filter((tovar:Tovar)=>{
      return tovar.tovarTypeId==id;
    })

    this.tovarsSearchString = []
    this.tovarsSearch.forEach((tovar:Tovar) =>{
      this.tovarsSearchString.push(tovar.id + " " + tovar.name + " " + tovar.tovarTypeId + " " + tovar.description +" "+ tovar.price + " грн")
    })
  }
}

