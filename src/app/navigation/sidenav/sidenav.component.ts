import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"]
})
export class SidenavComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription;

  constructor() {}

  ngOnInit() {}

  onClose() {
    this.closeSidenav.emit();
  }
}
