import { observable } from 'mobx';

export class Todo {
  @observable public value: string;
  @observable public id: number;
  @observable public complete: boolean;

  constructor(value: string) {
    this.value = value;
    this.id = Date.now();
    this.complete = false;
  }
}
