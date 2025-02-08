import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {StateService} from '@state';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {debounceTime, distinctUntilChanged, tap} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly stateService = inject(StateService);
  title = 'users';
  public $counter = this.stateService.$counter;
  public counterControl = new FormControl<number>(0);

  constructor() {
    this.counterControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap((value: number | null) => {
        console.log('users', value);
        this.stateService.setCounter(value ?? 0);
        console.log('users', this.$counter());
      })
    ).subscribe();
  }
  public setCounter() {
    if (typeof this.counterControl.value === 'number') {
      console.log('users', this.counterControl.value);
      this.stateService.setCounter(this.counterControl.value);
      console.log('users', this.$counter());
    }
  }
}
