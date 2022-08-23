import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { GroupOrder } from '../../domain';

@Component({
  selector: 'app-group-short-list',
  templateUrl: './group-short-list.component.html',
  styleUrls: ['./group-short-list.component.scss']
})
export class GroupShortListComponent implements OnInit {
  @Input() groupOrders!: GroupOrder[];
  @Input() row = 2;

  constructor() {}

  ngOnInit() {
    this.groupOrders = [
      {
        id: 1,
        productId: 2,
        startBy: '吕小布',
        avatar: 'assets/avatars/avatar1.png',
        startAt: new Date(),
        remainingNumber: 2
      },
      {
        id: 2,
        productId: 2,
        startBy: '张益达',
        avatar: 'assets/avatars/avatar2.png',
        startAt: new Date(),
        remainingNumber: 1
      }
    ];
  }
}
