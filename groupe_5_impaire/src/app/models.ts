import { DataService }  from "./data.service";
export interface ICompetence{
	id?:string,
	name:string,
	niveau:number
}
export class Competence implements ICompetence {
    constructor(public id :string, public name : string,public niveau:number, public data : DataService){
     this.id = id ; 
     this.name = name ; 
     this.niveau = niveau 
    }
    getId():string{
        return this.id;
    }
    getName():string{
        return this.name
    }
    getNiveau():number{
        return this.niveau
    }
    delete():void{
        this.data.del_Competence(this.id);
    }

}
export interface IFormation{
	id?:string,
	title:string,
	school:string,
	startDay:Date,
    endDay:Date,
    detail:string
}
export class Formation implements IFormation{
    constructor(public id:string , public title:string , public school:string , public startDay :Date , public endDay :Date,public detail:string , private data:DataService)
    {
      this.id = id ;
      this.title = title ; 
      this.school = school;
      this.startDay = startDay;
      this.endDay = endDay;
      this.detail = detail;
    }
    getId():string{
        return this.id;
    }
    getTitle():string{
        return this.title;
    }
    getSchool():string{
        return this.school;
    }
    getStartDay():Date{
            return this.startDay;
    }
    getEndDay():Date{
        return this.endDay;
    }
    getDetail():string{
        return this.detail;
    }
    
}

export interface IExperience{
	id?:string,
	title:string,
	structure:string,
	startDay:Date,
	endDay:Date,
    detail:string
}
export class Experience implements IExperience{
    constructor(public id:string , public title:string , public structure:string , public startDay :Date , public endDay :Date,public detail:string , private data:DataService)
    {
      this.id = id ;
      this.title = title ; 
      this.structure = structure;
      this.startDay = startDay;
      this.endDay = endDay;
      this.detail = detail;
    }
    getId():string{
        return this.id;
    }
    getTitle():string{
        return this.title;
    }
    getStructure():string{
        return this.structure;
    }
    getStartDay():Date{
            return this.startDay;
    }
    getEndDay():Date{
        return this.endDay;
    }
    getDetail():string{
        return this.detail;
    }
    
}
export interface ILanguage{
	id?:string,
	name:string,
	level:number
}
export class  Language implements ILanguage{
    constructor(public id : string , public name : string , public level : number,private data:DataService)
    {
      this.id = id ; 
      this.name = name ;
      this.level = level;
    }
    getId():string {
        return this.id;
    }
    getName() :string {
        return this.name;
    }
    getLevel():number{
        return this.level;
    }
}

export interface IHobbie{
	id?:string,
	name:string
}
export class Hobbie implements IHobbie{
    constructor(public id :string,public name:string,private service:DataService){
      this.id = id ;
      this.name = name ;
    }
    getId():string{
        return this.id;
    }
    getName():string{
        return this.name;
    }
}
export interface Icontact{
    contact:number
}
export interface Iemail{
    email:string
}
export interface IInformation{
	name:string,
	surname:string,
    about:string,
    profession:string,
	dateNaissance:Date,
	lieuNaissance?:string,
    codePays:number,
	contact:Icontact[],
    email1:Iemail[]
}