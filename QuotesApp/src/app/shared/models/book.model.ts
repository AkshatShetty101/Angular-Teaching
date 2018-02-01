export class Book{
  public name:string;
  public author:string;
  public desc:string;
  public imgPath:string;
  constructor(name:string,auth:string,descr:string,imageP:string){
    this.name = name;
    this.desc = descr;
    this.imgPath = imageP;
    this.author = auth;
  }
}
