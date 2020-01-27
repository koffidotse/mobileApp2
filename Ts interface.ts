export interface taskInterface{
    addTask(track:string):number;
    listAllTask():void;
    deleteTask(task:string):number;
    myTaskArray: Array<string>;
}