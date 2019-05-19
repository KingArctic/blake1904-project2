package com.project2.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class RarityItems {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	private int rarityId;
	private String rarityName;
	private int price;
	
	
	public RarityItems() {
		super();
		// TODO Auto-generated constructor stub
	}


	public RarityItems(int rarityId, String rarityName, int price) {
		super();
		this.rarityId = rarityId;
		this.rarityName = rarityName;
		this.price = price;
	}


	public RarityItems(String rarityName, int price) {
		super();
		this.rarityName = rarityName;
		this.price = price;
	}


	@Override
	public String toString() {
		return "RarityItems [rarityId=" + rarityId + ", rarityName=" + rarityName + ", price=" + price + "]";
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + price;
		result = prime * result + rarityId;
		result = prime * result + ((rarityName == null) ? 0 : rarityName.hashCode());
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
		RarityItems other = (RarityItems) obj;
		if (price != other.price)
			return false;
		if (rarityId != other.rarityId)
			return false;
		if (rarityName == null) {
			if (other.rarityName != null)
				return false;
		} else if (!rarityName.equals(other.rarityName))
			return false;
		return true;
	}


	public int getRarityId() {
		return rarityId;
	}


	public void setRarityId(int rarityId) {
		this.rarityId = rarityId;
	}


	public String getRarityName() {
		return rarityName;
	}


	public void setRarityName(String rarityName) {
		this.rarityName = rarityName;
	}


	public int getPrice() {
		return price;
	}


	public void setPrice(int price) {
		this.price = price;
	}
	
	
}
