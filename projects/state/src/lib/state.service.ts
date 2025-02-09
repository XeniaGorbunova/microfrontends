import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private $counterStore = signal<number>(0);

  public $counter = this.$counterStore.asReadonly();

  public setCounter(counterValue: number) {
    console.log('state', counterValue);
    this.$counterStore.set(counterValue);
  }
}
