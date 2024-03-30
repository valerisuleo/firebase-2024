import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { IndexComponent } from './courses/index/index.component';

@Component({
  standalone: true,
  imports: [IndexComponent, RouterModule,],
  selector: 'firebase-in-depth-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'firebase-in-depth';
}
