import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-initial-content',
  templateUrl: './initial-content.component.html',
  styleUrls: ['./initial-content.component.css']
})
export class InitialContentComponent {

  constructor(private router: Router,  private route: ActivatedRoute) {}

  navigateToLast(): void {
    this.router.navigate(['/last'], {relativeTo: this.route});
  }
}
