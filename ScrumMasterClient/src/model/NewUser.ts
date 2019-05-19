export class NewUser {
    name: string;
    username: string;
    password: string;
    email: string;
  
    constructor(name = '', username = '', password = '', email= '') {
      this.name = name;
      this.username = username;
      this.password = password;
      this.email = email;
    }
  }