import { action, observable, reaction } from 'mobx';

export class CounterStore {
  @observable public count: number;
  public total: number;

  constructor() {
    this.count = 0;
    this.total = 0;

    reaction(() => this.count, () => this.total++);
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
