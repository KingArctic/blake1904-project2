import { Bank } from "./Bank";
import { ShopItem } from "./item";
import { Overall } from "./Overall";
import { Question } from "./question";

export class User {
  userId: number;
  avatar: number;
  name: string;
  username: string;
  password: string;
  level: number;
  points: number;
  email: string;
  account: Bank;
  inventory: ShopItem[];
  topicLevels: Overall;
  javaQuestions: Question[];
  javaScriptQuestions: Question[];
  sqlQuestions: Question[];
  hibernateQuestions: Question[];
  springQuestions: Question[];
  reactQuestions: Question[];
  nodeQuestions: Question[];

  constructor(userId = 0, avatar = 0, name = '', username = '', password = '', level = 0, points = 0, email= '', account= new Bank(0,0), 
  inventory: ShopItem[], topicLevels = new Overall(0,1,1,1,1,1,1,1), javaQuestions: Question[],
  javaScriptQuestions: Question[], sqlQuestions: Question[], hibernateQuestions: Question[], 
  springQuestions: Question[], reactQuestions: Question[],  nodeQuestions: Question[]) {
    this.userId = userId;
    this.avatar = avatar;
    this.name = name;
    this.username = username;
    this.password = password;
    this.level = level;
    this.points = points;
    this.email = email;
    this.account = account;
    this.inventory = inventory
    this.topicLevels = topicLevels;
    this.javaQuestions = javaQuestions;
    this.javaScriptQuestions = javaScriptQuestions;
    this.sqlQuestions = sqlQuestions;
    this.hibernateQuestions = hibernateQuestions;
    this.springQuestions = springQuestions;
    this.reactQuestions = reactQuestions;
    this.nodeQuestions = nodeQuestions;
  }
}