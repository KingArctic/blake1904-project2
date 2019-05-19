package com.project2.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class ShopItem {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int itemId;
	@ManyToOne
	private RarityItems rarity;
	@ManyToOne
	private ItemType itemType;
	private String effect;
	private String itemName;
	private String itemDescription;
	private String url;
	
	
	public ShopItem() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ShopItem(int itemId, RarityItems rarity, ItemType itemType, String effect, String itemName,
			String itemDescription, String url) {
		super();
		this.itemId = itemId;
		this.rarity = rarity;
		this.itemType = itemType;
		this.effect = effect;
		this.itemName = itemName;
		this.itemDescription = itemDescription;
		this.url = url;
	}


	public ShopItem(RarityItems rarity, ItemType itemType, String effect, String itemName, String itemDescription,
			String url) {
		super();
		this.rarity = rarity;
		this.itemType = itemType;
		this.effect = effect;
		this.itemName = itemName;
		this.itemDescription = itemDescription;
		this.url = url;
	}


	@Override
	public String toString() {
		return "ShopItem [itemId=" + itemId + ", rarity=" + rarity + ", itemType=" + itemType + ", effect=" + effect
				+ ", itemName=" + itemName + ", itemDescription=" + itemDescription + ", url=" + url + "]";
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((effect == null) ? 0 : effect.hashCode());
		result = prime * result + ((itemDescription == null) ? 0 : itemDescription.hashCode());
		result = prime * result + itemId;
		result = prime * result + ((itemName == null) ? 0 : itemName.hashCode());
		result = prime * result + ((itemType == null) ? 0 : itemType.hashCode());
		result = prime * result + ((rarity == null) ? 0 : rarity.hashCode());
		result = prime * result + ((url == null) ? 0 : url.hashCode());
		return result;
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ShopItem other = (ShopItem) obj;
		if (effect == null) {
			if (other.effect != null)
				return false;
		} else if (!effect.equals(other.effect))
			return false;
		if (itemDescription == null) {
			if (other.itemDescription != null)
				return false;
		} else if (!itemDescription.equals(other.itemDescription))
			return false;
		if (itemId != other.itemId)
			return false;
		if (itemName == null) {
			if (other.itemName != null)
				return false;
		} else if (!itemName.equals(other.itemName))
			return false;
		if (itemType == null) {
			if (other.itemType != null)
				return false;
		} else if (!itemType.equals(other.itemType))
			return false;
		if (rarity == null) {
			if (other.rarity != null)
				return false;
		} else if (!rarity.equals(other.rarity))
			return false;
		if (url == null) {
			if (other.url != null)
				return false;
		} else if (!url.equals(other.url))
			return false;
		return true;
	}


	public int getItemId() {
		return itemId;
	}


	public void setItemId(int itemId) {
		this.itemId = itemId;
	}


	public RarityItems getRarity() {
		return rarity;
	}


	public void setRarity(RarityItems rarity) {
		this.rarity = rarity;
	}


	public ItemType getItemType() {
		return itemType;
	}


	public void setItemType(ItemType itemType) {
		this.itemType = itemType;
	}


	public String getEffect() {
		return effect;
	}


	public void setEffect(String effect) {
		this.effect = effect;
	}


	public String getItemName() {
		return itemName;
	}


	public void setItemName(String itemName) {
		this.itemName = itemName;
	}


	public String getItemDescription() {
		return itemDescription;
	}


	public void setItemDescription(String itemDescription) {
		this.itemDescription = itemDescription;
	}


	public String getUrl() {
		return url;
	}


	public void setUrl(String url) {
		this.url = url;
	}
	
}