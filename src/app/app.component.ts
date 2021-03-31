import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  // For users
  users = [];
  pushUsers(Data) {
    this.users.push(Data);
  }
  onRemoveUser(user) {
    this.users.splice(user, 1);
  }
  // For admins
  admins = [];
  pushAdmins(Data) {
    this.admins.push(Data);
  }
  onRemoveAdmin(admin) {
    this.admins.splice(admin, 1);
  }
}
