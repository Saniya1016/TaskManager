import Heap from "heap-js";

class table{

    constructor(){
        this.queue = new Heap((a, b) => a.priority - b.priority);;
    }

    add = (task) => {
        this.queue.push(task);
    }

    delete = (task) => {
        
    }
}