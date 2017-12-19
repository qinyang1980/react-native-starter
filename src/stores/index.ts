import { STORE_COUNTER } from '../constants';
import { CounterStore } from './counter.store';

export default {
  [STORE_COUNTER]: new CounterStore()
};
