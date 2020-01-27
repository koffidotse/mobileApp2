var myTaskArray = [];
function addTask(task) {
    myTaskArray.push(task);
    console.log("Item" + task + "has been added to the array");
    var count = myTaskArray.length;
    return count;
    //let count:number= myTaskArray.push(task);
    //return count;
}
function listAllTasks() {
    //  for (let i=0;i<myTaskArray.length;i++)
    //}
    myTaskArray.forEach(function (task) {
        console.log(task);
    });
}
addTask("number three");
addTask("number two");
var elementCount = addTask("Number One");
console.log(elementCount);
listAllTasks();
