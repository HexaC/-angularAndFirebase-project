import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'table-icons',
  template: `
    <mat-icon (click)="display.next()">face</mat-icon>
    <mat-icon (click)="edit.next()">edit</mat-icon>
    <mat-icon (click)="remove.next()">delete</mat-icon>
  `,
  styles: [
    `
      mat-icon {
        cursor: pointer;
        padding: 18px;
      }
    `
  ]
})
export class CustomersTableIcons {
  @Output() edit: EventEmitter<void> = new EventEmitter();
  @Output() display: EventEmitter<void> = new EventEmitter();
  @Output() remove: EventEmitter<void> = new EventEmitter();
}

// .next() = from EventEmitter - כשתיהיה פעולה תיידע
// [(ngModel)] - HTML page
// input - [] אני רוצה ליידע מישהו בזה
// output - () אני רוצה להיות מודע לזה
// input & output - זו בעיקר שיטה לתקשר בין רכיבים