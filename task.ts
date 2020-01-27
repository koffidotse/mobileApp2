import { taskInterface } from './Ts interface';

class MyTaskManager implements taskInterface {
    listAllTask(): void {
        throw new Error("Method not implemented.");
    }

    myTaskArray: Array<string> = [];

    addTask(task: string): number {
        this.myTaskArray.push(task);
        console.log("Item" + task + "has been added to the array")
        let count: number = this.myTaskArray.length;
        return count;

    }
    listAllTasks(): void {

        this.myTaskArray.forEach(function (task) {
            console.log(task);
        });
    }
    deleteTask(task: string): number {
        let index: number = this.myTaskArray.indexOf(task);
        if (index > -1) {


           this.myTaskArray.splice(index, 1);
            console.log("element" + task + "removed from array");
        } else {
            console.log("element" + task + "not in array")
        }
        let myArrayLegth = this.myTaskArray.length;
        return myArrayLegth;

    }
}

let myTaskManager1 = new MyTaskManager();
myTaskManager1.addTask("Item one");
myTaskManager1.addTask("Item two");
myTaskManager1.listAllTasks();



