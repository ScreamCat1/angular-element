import {
  Input,
  Output,
  Component,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class CounterComponent {
  @Input()
  count: number;

  @Output()
  changeCounterValue: EventEmitter<any> = new EventEmitter<any>();

  handleClick(event) {
    this.changeCounterValue.emit(event.target.dataset.increment);
  }
}
