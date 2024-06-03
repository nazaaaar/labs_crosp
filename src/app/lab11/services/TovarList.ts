import {Tovar} from "./Tovar";
import {ConfigServiceLab11} from "./config.service";
import {TovarType} from "./TovarType";

export class TovarList{
  tovars: Tovar[] = [];
  tovarsSearch: Tovar[] = [];
  tovarsSearchString: String[] = [];


  constructor(private config: ConfigServiceLab11) {

    this.config.tovarType$.subscribe(() =>{
      let type = this.config.tovarType$.value;
      this.search(type.id);
    })
    this.search(0);
  }

   add(tovar: Tovar){
    this.tovars.push(
      tovar
    )
    this.search(tovar.tovarTypeId)
  }

  public search(id: number) {
    this.tovarsSearch = this.tovars.filter((tovar:Tovar)=>{
      return tovar.tovarTypeId==id;
    })

    this.tovarsSearchString = []
    this.tovarsSearch.forEach((tovar:Tovar) =>{
      this.tovarsSearchString.push(tovar.id + " " + tovar.name + " " + tovar.tovarTypeId + " " + tovar.description +" "+ tovar.price + " грн")
    })
  }
}

