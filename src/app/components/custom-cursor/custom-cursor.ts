import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-cursor',
  imports: [CommonModule],
  templateUrl: './custom-cursor.html',
  styleUrl: './custom-cursor.css'
})
export class CustomCursorComponent {
  cursorX = signal(0);
  cursorY = signal(0);
  trailX = signal(0);
  trailY = signal(0);
  isHovering = signal(false);

  constructor() {
    this.animateTrail();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.cursorX.set(e.clientX);
    this.cursorY.set(e.clientY);
  }

  @HostListener('document:mouseover', ['$event'])
  onMouseOver(e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
      this.isHovering.set(true);
    } else {
      this.isHovering.set(false);
    }
  }

  animateTrail() {
    const loop = () => {
      const dx = this.cursorX() - this.trailX();
      const dy = this.cursorY() - this.trailY();

      this.trailX.set(this.trailX() + dx * 0.15);
      this.trailY.set(this.trailY() + dy * 0.15);

      requestAnimationFrame(loop);
    };
    loop();
  }
}
