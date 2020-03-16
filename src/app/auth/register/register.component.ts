import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { RegisterModel } from "src/app/Models/RegisterModel";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  updatedDate: string;
  registerValues: RegisterModel = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    dateOfBirth: new Date(),
    gender: "",
    country: "",
    terms: false
  };
  constructor() {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log("The form is : ", this.registerValues);

    console.log(
      "The Date Only is: ",
      this.registerValues.dateOfBirth.toLocaleString().slice(0, 10)
    );
    this.updatedDate = this.registerValues.dateOfBirth
      .toLocaleString()
      .slice(0, 10)

    this.registerValues.dateOfBirth = new Date(
      this.registerValues.dateOfBirth.toLocaleString().slice(0, 10)
    );
    console.log("The Updated Date Is: ",this.registerValues
    );
  }
}
