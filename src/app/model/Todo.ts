export class Todo {
	public content;
	public completed;
    constructor(content?: string,completed?: boolean)
        {
         this.content = content;
        this.completed = completed;
    }

}