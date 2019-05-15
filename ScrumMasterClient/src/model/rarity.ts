export class Rarity {
    rarityId: number;
    rarityName: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.rarityId = id;
        this.rarityName = name;
        this.price = price;
    }
}