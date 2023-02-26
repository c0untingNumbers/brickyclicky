import { Component, Input } from '@angular/core';

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
}
