package com.project2.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Difficulty {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int difficultyId;
	private int rewardPoints;
	
	
	public Difficulty() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Difficulty(int difficultyId, int points) {
		super();
		this.difficultyId = difficultyId;
		this.rewardPoints = points;
	}


	public Difficulty(int points) {
		super();
		this.rewardPoints = points;
	}


	@Override
	public String toString() {
		return "Difficulty [difficultyId=" + difficultyId + ", points=" + rewardPoints + "]";
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + difficultyId;
		result = prime * result + rewardPoints;
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
		Difficulty other = (Difficulty) obj;
		if (difficultyId != other.difficultyId)
			return false;
		if (rewardPoints != other.rewardPoints)
			return false;
		return true;
	}


	public int getDifficultyId() {
		return difficultyId;
	}


	public void setDifficultyId(int difficultyId) {
		this.difficultyId = difficultyId;
	}


	public int getPoints() {
		return rewardPoints;
	}


	public void setPoints(int points) {
		this.rewardPoints = points;
	}
	
	

}
