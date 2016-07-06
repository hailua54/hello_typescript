module animal
{
  export class Animal
  {
    public name:string;
    constructor(name:string)
    {
      this.name = name;
    }
    protected sayHi():void
    {
      console.log("Hi! I am Animal.");
    }
  }
}
