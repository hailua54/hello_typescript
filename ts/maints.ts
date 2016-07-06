// js classes mapping =====================
var VUtils = eval("VUtils");
// ========================================
import ani = animal;
function main():void
{
  // call external js here
  eval("trace")("hi from main");
  VUtils.print("hi from main");
  var t:ani.Tiger = new ani.Tiger("hailua");
  t.sayHi();
}
