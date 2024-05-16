import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input() title = '';
  @Input() backgroundColor = '';
  @Input() textColor = '';
  underlineHeight: number = 3;

}
