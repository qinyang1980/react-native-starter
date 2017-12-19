import { action, observable, reaction } from 'mobx';

export class CounterStore {
  @observable public count: number;
  public total: number;

  constructor() {
    this.reset();
    reaction(() => this.count, () => this.total++);
  }

  @action
  public reset = () => {
    this.count = 0;
    this.total = 0;
  }

  @action
  public increment = () => {
    this.count++;
  };

  @action
  public decrement = () => {
    this.count--;
  };
}
