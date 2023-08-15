import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = false;
  isOpen = false;
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  checkIfNavDropDown() {
    if (this.isOpen) {
      this.isOpen = false;
    }
  }
  onMenu() {
    this.isOpen = !this.isOpen;
  }
}
