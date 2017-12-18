import { computed, observable } from 'mobx';
import { Todo } from './models/todo';

export class TodoStore {
  @observable public todos: Todo[] = [];
  @observable public filter: string = '';

  @computed get filteredTodos(): Todo[] {
    const matchesFilter = new RegExp(this.filter, 'i');
    return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value));
  }

  public createTodo(value: string): void {
    this.todos.push(new Todo(value));
  }

  public clearComplete = () => {
    // const incompleteTodos = this.todos.filter(todo => !todo.complete);
    // this.todos.replace(incompleteTodos);
  }
}
