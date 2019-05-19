package com.project2.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class NextLevel {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	private int nextId;
	private int requiredScore;
	
	
	public NextLevel() {
		super();
		// TODO Auto-generated constructor stub
	}
	public NextLevel(int nextId, int requiredScore) {
		super();
		this.nextId = nextId;
		this.requiredScore = requiredScore;
	}
	public NextLevel(int requiredScore) {
		super();
		this.requiredScore = requiredScore;
	}
	@Override
	public String toString() {
		return "NextLevel [nextId=" + nextId + ", requiredScore=" + requiredScore + "]";
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + nextId;
		result = prime * result + requiredScore;
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
		NextLevel other = (NextLevel) obj;
		if (nextId != other.nextId)
			return false;
		if (requiredScore != other.requiredScore)
			return false;
		return true;
	}
	public int getNextId() {
		return nextId;
	}
	public void setNextId(int nextId) {
		this.nextId = nextId;
	}
	public int getRequiredScore() {
		return requiredScore;
	}
	public void setRequiredScore(int requiredScore) {
		this.requiredScore = requiredScore;
	}
	
	
}
