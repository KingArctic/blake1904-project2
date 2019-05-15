import { Rarity } from "./rarity";
import { ItemType } from "./itemType";

export class Item {
    itemId: number;
    rarity: Rarity;
    itemType: ItemType;
    effect: string;
    itemName: string;
    itemDescription;

    constructor(id: number, rarity: Rarity, type: ItemType, effect: string, name: string, desc: string) {
        this.itemId = id;
        this.rarity = rarity;
        this.itemType = type;
        this.effect = effect;
        this.itemName = name;
        this.itemDescription = desc;
    }

}