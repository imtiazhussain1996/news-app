import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { LoginModel } from "../../Models/LoginModel";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email: string;
  password: string;

  emails: string[] = ["", ""];

  loginValues: LoginModel = {
    email: "",
    password: ""
  };

  constructor() {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log("Email Is: ", form.value);

    if (form.value.email === "imtiaz@gmail.com") {
      console.log("Logged In Success...");
    } else {
    }

    console.log("Password Is: ", form.valid);
    form.reset();
  }
}
