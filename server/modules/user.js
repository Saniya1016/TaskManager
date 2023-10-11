export class User  {

    constructor(id, pwd, table){
        this.id = id;
        this.pwd  = pwd;
        this.table = table;
    }

    getId = () => this.id;
    getPwd = () => this.pwd;
    getTable = () => this.table;

}

// ===== TESTS ===== //

// let t1 = new Task(1, "project1", "CS576 Project", 3, 36);
// let t2 = new Task(2, "project2", "CS426 task", 1, 35);
// let t3 = new Task(3, "p3", "c", 1,35);
// let t = new Table();
// t.add(t1);
// t.add(t2);
// t.add(t3);
// // t.view_tasks();

// let u = new User(12, 34565, t);
// let table2 = u.getTable();
// console.log(table2.view_tasks());
