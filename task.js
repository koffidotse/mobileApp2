"use strict";
exports.__esModule = true;
var MyTaskManager = /** @class */ (function () {
    function MyTaskManager() {
        this.myTaskArray = [];
    }
    MyTaskManager.prototype.listAllTask = function () {
        throw new Error("Method not implemented.");
    };
    MyTaskManager.prototype.addTask = function (task) {
        this.myTaskArray.push(task);
        console.log("Item" + task + "has been added to the array");
        var count = this.myTaskArray.length;
        return count;
    };
    MyTaskManager.prototype.listAllTasks = function () {
        this.myTaskArray.forEach(function (task) {
            console.log(task);
        });
    };
    MyTaskManager.prototype.deleteTask = function (task) {
        var index = this.myTaskArray.indexOf(task);
        if (index > -1) {
            this.myTaskArray.splice(index, 1);
            console.log("element" + task + "removed from array");
        }
        else {
            console.log("element" + task + "not in array");
        }
        var myArrayLegth = this.myTaskArray.length;
        return myArrayLegth;
    };
    return MyTaskManager;
}());
var myTaskManager1 = new MyTaskManager();
myTaskManager1.addTask("Item one");
myTaskManager1.addTask("Item two");
myTaskManager1.listAllTasks();
