import { Bank } from "./Bank";
import { ShopItem } from "./item";
import { Overall } from "./Overall";

export class User {
  userId: number;
  avatar: number;
  name: string;
  username: string;
  password: string;
  level: number;
  email: string;
  account: Bank;
  inventory: ShopItem[];
  topicLevels: Overall;


  constructor(userId = 0, avatar = 0, name = '', username = '', password = '', level = 0, email= '', account= new Bank(0,0), inventory: ShopItem[], topicLevels = new Overall(0,1,1,1,1,1,1,1) ) {
    this.userId = userId;
    this.avatar = avatar;
    this.name = name;
    this.username = username;
    this.password = password;
    this.level = level;
    this.email = email;
    this.account = account;
    this.inventory = inventory
    this.topicLevels = topicLevels;
  }
}