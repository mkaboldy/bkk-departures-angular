import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
})
export class TopnavComponent implements OnInit {
  displayStyle = 'none';
  ngOnInit(): void {}

  onClose(): void {
    console.log('Closed event from template');
  }

  onOpen(): void {
    console.log('Open event from template');
  }
}
