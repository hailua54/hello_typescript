namespace animal
{
  export class Tiger extends Animal
  {
    public sayHi():void
    {
      console.log("--------------------------------------------");
      super.sayHi();
      console.log("Hi! I am Tiger " + this.name);
      console.log("--------------------------------------------");
    }
  }
}
