// its a module 
export class Todo {
    sno: number = 0;
    title: string;
    desc: string;
    active: boolean;
    
    constructor(title: string, desc: string, active: boolean) {
      this.title = title;
      this.desc = desc;
      this.active = active;
    }
  }