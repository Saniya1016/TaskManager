import { Heap } from "heap-js";
// import { Task } from './task.js';


class Table{

    constructor(){
        this.queue = new Heap((a, b) => b.priority - a.priority);
        this.map = {};
    }


    add = (task) => {
        task.setPriority();
        this.queue.push(task);
        this.map[task.getId()] = task;
    }

    view_tasks = () => {
        let clone_arr = [];
        let temp_arr = this.queue.toArray();
        for(let i = 0; i < temp_arr.length; ++i){
            clone_arr.push(temp_arr[i]);
        }
        console.log(clone_arr);
        return clone_arr;
    }

    update_name = (id, name) => {
        let task_remove = this.map[id];
        this.queue.remove(task_remove);
        task_remove.setName(name);
        this.queue.push(task_remove);
        this.map[id] = task_remove;
    }

    update_difficulty = (id, diff) => {
        let task_remove = this.map[id];
        this.queue.remove(task_remove);
        task_remove.setDifficulty(diff);
        task_remove.setPriority();
        this.queue.push(task_remove);
        this.map[id] = task_remove;
    }

    update_date = (id, date) => {
        let task_remove = this.map[id];
        this.queue.remove(task_remove);
        task_remove.setDate(date);
        task_remove.setPriority();
        this.queue.push(task_remove);
        this.map[id] = task_remove;
    }

    delete = (id) => {
        let task_remove = this.map[id];
        this.queue.remove(task_remove);
        delete this.map[id];
    }

}

let table = new Table();

export default table;


// let t1 = new Task(1, "project1", "CS576 Project", 3, 36);
// let t2 = new Task(2, "project2", "CS426 task", 1, 35);
// let t3 = new Task(3, "p3", "c", 1,35);
// let t = new Table();
// t.add(t1);
// t.add(t2);
// t.add(t3);
// t.view_tasks();
// t.update_difficulty(3, 3);
// t.update_date(2, 31);
// console.log("--------------------------");
// t.view_tasks();console.log("--------------------------");
// t.queue.pop();
// t.view_tasks();
// console.log("--------------------------");
// t.queue.pop();
// t.view_tasks();
