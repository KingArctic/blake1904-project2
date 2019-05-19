package com.project2.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Overall {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int overallId;
	private int javaDifficulty;
	private int jsDifficulty;
	private int sqlDifficulty;
	private int hibernateDifficulty;
	private int springDifficulty;
	private int reactDifficulty;
	private int nodeDifficulty;
	
	public Overall() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Overall(int overallId, int javaDifficulty, int jsDifficulty, int sqlDifficulty, int hibernateDifficulty,
			int springDifficulty, int reactDifficulty, int nodeDifficulty) {
		super();
		this.overallId = overallId;
		this.javaDifficulty = javaDifficulty;
		this.jsDifficulty = jsDifficulty;
		this.sqlDifficulty = sqlDifficulty;
		this.hibernateDifficulty = hibernateDifficulty;
		this.springDifficulty = springDifficulty;
		this.reactDifficulty = reactDifficulty;
		this.nodeDifficulty = nodeDifficulty;
	}


	public Overall(int javaDifficulty, int jsDifficulty, int sqlDifficulty, int hibernateDifficulty,
			int springDifficulty, int reactDifficulty, int nodeDifficulty) {
		super();
		this.javaDifficulty = javaDifficulty;
		this.jsDifficulty = jsDifficulty;
		this.sqlDifficulty = sqlDifficulty;
		this.hibernateDifficulty = hibernateDifficulty;
		this.springDifficulty = springDifficulty;
		this.reactDifficulty = reactDifficulty;
		this.nodeDifficulty = nodeDifficulty;
	}


	@Override
	public String toString() {
		return "Overall [overallId=" + overallId + ", javaDifficulty=" + javaDifficulty + ", jsDifficulty="
				+ jsDifficulty + ", sqlDifficulty=" + sqlDifficulty + ", hibernateDifficulty=" + hibernateDifficulty
				+ ", springDifficulty=" + springDifficulty + ", reactDifficulty=" + reactDifficulty
				+ ", nodeDifficulty=" + nodeDifficulty + "]";
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + hibernateDifficulty;
		result = prime * result + javaDifficulty;
		result = prime * result + jsDifficulty;
		result = prime * result + nodeDifficulty;
		result = prime * result + overallId;
		result = prime * result + reactDifficulty;
		result = prime * result + springDifficulty;
		result = prime * result + sqlDifficulty;
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
		Overall other = (Overall) obj;
		if (hibernateDifficulty != other.hibernateDifficulty)
			return false;
		if (javaDifficulty != other.javaDifficulty)
			return false;
		if (jsDifficulty != other.jsDifficulty)
			return false;
		if (nodeDifficulty != other.nodeDifficulty)
			return false;
		if (overallId != other.overallId)
			return false;
		if (reactDifficulty != other.reactDifficulty)
			return false;
		if (springDifficulty != other.springDifficulty)
			return false;
		if (sqlDifficulty != other.sqlDifficulty)
			return false;
		return true;
	}


	public int getOverallId() {
		return overallId;
	}

	public void setOverallId(int overallId) {
		this.overallId = overallId;
	}

	public int getJavaDifficulty() {
		return javaDifficulty;
	}

	public void setJavaDifficulty(int javaDifficulty) {
		this.javaDifficulty = javaDifficulty;
	}

	public int getJsDifficulty() {
		return jsDifficulty;
	}

	public void setJsDifficulty(int jsDifficulty) {
		this.jsDifficulty = jsDifficulty;
	}

	public int getSqlDifficulty() {
		return sqlDifficulty;
	}

	public void setSqlDifficulty(int sqlDifficulty) {
		this.sqlDifficulty = sqlDifficulty;
	}

	public int getHibernateDifficulty() {
		return hibernateDifficulty;
	}

	public void setHibernateDifficulty(int hibernateDifficulty) {
		this.hibernateDifficulty = hibernateDifficulty;
	}

	public int getSpringDifficulty() {
		return springDifficulty;
	}

	public void setSpringDifficulty(int springDifficulty) {
		this.springDifficulty = springDifficulty;
	}

	public int getReactDifficulty() {
		return reactDifficulty;
	}

	public void setReactDifficulty(int reactDifficulty) {
		this.reactDifficulty = reactDifficulty;
	}

	public int getNodeDifficulty() {
		return nodeDifficulty;
	}

	public void setNodeDifficulty(int nodeDifficulty) {
		this.nodeDifficulty = nodeDifficulty;
	}
}