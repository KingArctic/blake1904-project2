export class User {
  userId: number;
  avatar: number;
  name: string;
  username: string;
  password: string;
  level: number;
  email: string;
  accountId: number;


  constructor(userId = 0, avatar = 0, name = '', username = '', password = '', level = 0, email= '', accountId =0) {
    this.userId = userId;
    this.avatar = avatar;
    this.name = name;
    this.username = username;
    this.password = password;
    this.level = level;
    this.email = email;
    this.accountId = accountId;
  }
}