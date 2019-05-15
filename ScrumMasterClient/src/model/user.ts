export class User {
  userId: number;
  avatar: number;
  name: string;
  username: string;
  password: string;
  level: number;
  email: string;


  constructor(userId = 0, avatar = 0, name = '', username = '', password = '', level = 0, email= '') {
    this.userId = userId;
    this.avatar = avatar;
    this.username = username;
    this.password = password;
    this.name = name;
    this.level = level;
    this.email = email;
  }
}