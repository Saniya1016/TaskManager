import { Heap } from "heap-js";
import { Task } from './task.js';


class Table{

    constructor(){
        this.queue = new Heap((a, b) => b.priority - a.priority);
    }

    add = (task) => {
        task.setPriority();
        this.queue.push(task);
    }

    view = () =>{
        console.log(this.queue.toArray());
    }

    update_difficulty = (task, diff) => {

    }

    delete = (task) => {
        this.queue.remove(task);
    }
}



let t1 = new Task(1, "project1", "CS576 Project", 3, 36);
let t2 = new Task(2, "project2", "CS426 task", 1, 35);
let t3 = new Task(3, "p3", "c", 1,31);
let t = new Table();
t.add(t1);
t.add(t2);
t.add(t3);
t.view();