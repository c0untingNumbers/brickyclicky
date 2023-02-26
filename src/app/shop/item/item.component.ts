import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shop-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() title!: string;
  @Input() cost!: number;
  @Input() img!: string;
  @Input() count!: number;
  @Input() canAddTo!: boolean;

  @Input() onClick!: () => void;
  @Input() onAddTo!: () => void;
}
