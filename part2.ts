let myTaskArray:Array<String> =[];

function addTask(task: String):number{
    myTaskArray.push(task);
    console.log("Item"+ task+"has been added to the array")
    let count:number = myTaskArray.length;
    return count;
//let count:number= myTaskArray.push(task);
//return count;

}
function listAllTasks():void{
  //  for (let i=0;i<myTaskArray.length;i++)
//}
myTaskArray.forEach(function(task){
    console.log(task);
});
}

function deleteTask(task:string):number{
    let index:number = myTaskArray.indexOf(task);
if(index >-1){


    myTaskArray.splice(index,1);
    console.log("element"+task+"removed from array");
}else{
    console.log("element"+task+"not in array")
}
let myArrayLegth =myTaskArray.length;
return myArrayLength.length;
       
}


addTask("number three");
addTask("number two");
let elementCount:number =addTask("Number One");
console.log(elementCount);

listAllTasks();

deleteTask();
let x:number=deleteTask("number two");
console.log