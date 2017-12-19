import { CounterStore } from '../counter.store';

// tslint:disable

describe("CounterStore", () => {
  it("testing counter store", () => {
    const store = new CounterStore();
    expect(store.count).toBe(0);
    expect(store.total).toBe(0);

    store.increment();
    store.increment();
    store.increment();
    expect(store.count).toBe(3);

    store.decrement();
    expect(store.count).toBe(2);

    expect(store.total).toBe(4);
  })
});
