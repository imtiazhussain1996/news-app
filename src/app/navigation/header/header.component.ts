import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy
} from "@angular/core";
import { Subscription } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription;

  constructor(public router: Router) {}

  ngOnInit() {}

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  myfun()
  {
    this.router.navigate([""]);
  }
}
