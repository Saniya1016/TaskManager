class Task{

    constructor(name, description, difficulty, due_date){
        this.name = name;
        this.description = description;
        this.difficulty = difficulty;
        this.due_date = due_date;
        this.priority = 0;
    }

    getName = () => this.name;
    getDescription = () => this.description;
    getDifficulty = () => this.difficulty;
    getDate = () => this.due_date;
    getPriority = () => this.priority;

    //higher val = higher priority or more -ve = lower priority
    setPriority = () => {
        const ddw = -1.5;
        const current_time = 30;
        let diff_score = this.difficulty;
        let dd_score = ddw * (this.due_date - current_time);

        this.priority = diff_score + dd_score;
    }
}

// ===== TESTING ==== //

// let t1 = new Task("project1", "CS576 Project", 3, 36);
// let t2 = new Task("project2", "CS426 task", 1, 35);

// t1.setPriority();
// t2.setPriority();

// console.log(t1.getPriority());
// console.log(t2.getPriority());
