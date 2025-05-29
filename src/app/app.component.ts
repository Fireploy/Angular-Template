import { APP_BASE_HREF } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { DOCUMENT } from '@angular/common'; // Usamos @angular/common

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: APP_BASE_HREF, useValue: environment.basePath }], // Usa el valor desde environment.basePath
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  title = 'template-Angular';
}
