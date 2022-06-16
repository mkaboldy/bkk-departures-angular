import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
})
export class TopnavComponent implements OnInit {
  collapseNav(): void {
    document.getElementById('navbarToggler')?.click();
  }

  ngOnInit(): void {}
}
