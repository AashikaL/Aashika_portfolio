import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomCursorComponent } from './components/custom-cursor/custom-cursor';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Education } from './components/education/education';
import { Contact } from './components/contact/contact';
import { NavbarComponent } from './components/navbar/navbar';
import { ScrollRevealDirective } from './directives/scroll-reveal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CustomCursorComponent,
    NavbarComponent,
    ScrollRevealDirective,
    Hero,
    About,
    Experience,
    Projects,
    Skills,
    // Education,
    Contact
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'portfolio';
}
