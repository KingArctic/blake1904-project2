package com.project2.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Bank {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int accountId;
	private int amount;
	
	
	public Bank() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	public Bank(int accountId, int amount) {
		super();
		this.accountId = accountId;
		this.amount = amount;
	}


	@Override
	public String toString() {
		return "Bank [accountId=" + accountId + ", amount=" + amount + "]";
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + accountId;
		result = prime * result + amount;
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
		Bank other = (Bank) obj;
		if (accountId != other.accountId)
			return false;
		if (amount != other.amount)
			return false;
		return true;
	}


	public Bank(int amount) {
		super();
		this.amount = amount;
	}


	public int getAccountId() {
		return accountId;
	}


	public void setAccountId(int accountId) {
		this.accountId = accountId;
	}


	public int getAmount() {
		return amount;
	}


	public void setAmount(int amount) {
		this.amount = amount;
	}
	

	
}
