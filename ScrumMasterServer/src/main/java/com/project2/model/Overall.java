package com.project2.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Overall {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int overallId;
	private int javaScore;
	private int javaDifficulty;
	@ManyToOne
	private NextLevel javaNextDifficulty;
	
	
	private int jsScore;
	private int jsDifficulty;
	@ManyToOne
	private NextLevel jsNextDifficulty;
	
	private int sqlScore;
	private int sqlDifficulty;
	@ManyToOne
	private NextLevel sqlNextDifficulty;
	
	private int hibernateScore;
	private int hibernateDifficulty;
	@ManyToOne
	private NextLevel hibernateNextDifficulty;
	
	private int springScore;
	private int springDifficulty;
	@ManyToOne
	private NextLevel springNextDifficulty;
	
	private int reactScore;
	private int reactDifficulty;
	@ManyToOne
	private NextLevel reactNextDifficulty;
	
	private int nodeScore;
	private int nodeDifficulty;
	@ManyToOne
	private NextLevel nodeNextDifficulty;
	
	
	public Overall() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Overall(int overallId, int javaScore, int javaDifficulty, NextLevel javaNextDifficulty, int jsScore,
			int jsDifficulty, NextLevel jsNextDifficulty, int sqlScore, int sqlDifficulty, NextLevel sqlNextDifficulty,
			int hibernateScore, int hibernateDifficulty, NextLevel hibernateNextDifficulty, int springScore,
			int springDifficulty, NextLevel springNextDifficulty, int reactScore, int reactDifficulty,
			NextLevel reactNextDifficulty, int nodeScore, int nodeDifficulty, NextLevel nodeNextDifficulty) {
		super();
		this.overallId = overallId;
		this.javaScore = javaScore;
		this.javaDifficulty = javaDifficulty;
		this.javaNextDifficulty = javaNextDifficulty;
		this.jsScore = jsScore;
		this.jsDifficulty = jsDifficulty;
		this.jsNextDifficulty = jsNextDifficulty;
		this.sqlScore = sqlScore;
		this.sqlDifficulty = sqlDifficulty;
		this.sqlNextDifficulty = sqlNextDifficulty;
		this.hibernateScore = hibernateScore;
		this.hibernateDifficulty = hibernateDifficulty;
		this.hibernateNextDifficulty = hibernateNextDifficulty;
		this.springScore = springScore;
		this.springDifficulty = springDifficulty;
		this.springNextDifficulty = springNextDifficulty;
		this.reactScore = reactScore;
		this.reactDifficulty = reactDifficulty;
		this.reactNextDifficulty = reactNextDifficulty;
		this.nodeScore = nodeScore;
		this.nodeDifficulty = nodeDifficulty;
		this.nodeNextDifficulty = nodeNextDifficulty;
	}


	public Overall(int javaScore, int javaDifficulty, NextLevel javaNextDifficulty, int jsScore, int jsDifficulty,
			NextLevel jsNextDifficulty, int sqlScore, int sqlDifficulty, NextLevel sqlNextDifficulty,
			int hibernateScore, int hibernateDifficulty, NextLevel hibernateNextDifficulty, int springScore,
			int springDifficulty, NextLevel springNextDifficulty, int reactScore, int reactDifficulty,
			NextLevel reactNextDifficulty, int nodeScore, int nodeDifficulty, NextLevel nodeNextDifficulty) {
		super();
		this.javaScore = javaScore;
		this.javaDifficulty = javaDifficulty;
		this.javaNextDifficulty = javaNextDifficulty;
		this.jsScore = jsScore;
		this.jsDifficulty = jsDifficulty;
		this.jsNextDifficulty = jsNextDifficulty;
		this.sqlScore = sqlScore;
		this.sqlDifficulty = sqlDifficulty;
		this.sqlNextDifficulty = sqlNextDifficulty;
		this.hibernateScore = hibernateScore;
		this.hibernateDifficulty = hibernateDifficulty;
		this.hibernateNextDifficulty = hibernateNextDifficulty;
		this.springScore = springScore;
		this.springDifficulty = springDifficulty;
		this.springNextDifficulty = springNextDifficulty;
		this.reactScore = reactScore;
		this.reactDifficulty = reactDifficulty;
		this.reactNextDifficulty = reactNextDifficulty;
		this.nodeScore = nodeScore;
		this.nodeDifficulty = nodeDifficulty;
		this.nodeNextDifficulty = nodeNextDifficulty;
	}


	@Override
	public String toString() {
		return "Overall [overallId=" + overallId + ", javaScore=" + javaScore + ", javaDifficulty=" + javaDifficulty
				+ ", javaNextDifficulty=" + javaNextDifficulty + ", jsScore=" + jsScore + ", jsDifficulty="
				+ jsDifficulty + ", jsNextDifficulty=" + jsNextDifficulty + ", sqlScore=" + sqlScore
				+ ", sqlDifficulty=" + sqlDifficulty + ", sqlNextDifficulty=" + sqlNextDifficulty + ", hibernateScore="
				+ hibernateScore + ", hibernateDifficulty=" + hibernateDifficulty + ", hibernateNextDifficulty="
				+ hibernateNextDifficulty + ", springScore=" + springScore + ", springDifficulty=" + springDifficulty
				+ ", springNextDifficulty=" + springNextDifficulty + ", reactScore=" + reactScore + ", reactDifficulty="
				+ reactDifficulty + ", reactNextDifficulty=" + reactNextDifficulty + ", nodeScore=" + nodeScore
				+ ", nodeDifficulty=" + nodeDifficulty + ", nodeNextDifficulty=" + nodeNextDifficulty + "]";
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + hibernateDifficulty;
		result = prime * result + ((hibernateNextDifficulty == null) ? 0 : hibernateNextDifficulty.hashCode());
		result = prime * result + hibernateScore;
		result = prime * result + javaDifficulty;
		result = prime * result + ((javaNextDifficulty == null) ? 0 : javaNextDifficulty.hashCode());
		result = prime * result + javaScore;
		result = prime * result + jsDifficulty;
		result = prime * result + ((jsNextDifficulty == null) ? 0 : jsNextDifficulty.hashCode());
		result = prime * result + jsScore;
		result = prime * result + nodeDifficulty;
		result = prime * result + ((nodeNextDifficulty == null) ? 0 : nodeNextDifficulty.hashCode());
		result = prime * result + nodeScore;
		result = prime * result + overallId;
		result = prime * result + reactDifficulty;
		result = prime * result + ((reactNextDifficulty == null) ? 0 : reactNextDifficulty.hashCode());
		result = prime * result + reactScore;
		result = prime * result + springDifficulty;
		result = prime * result + ((springNextDifficulty == null) ? 0 : springNextDifficulty.hashCode());
		result = prime * result + springScore;
		result = prime * result + sqlDifficulty;
		result = prime * result + ((sqlNextDifficulty == null) ? 0 : sqlNextDifficulty.hashCode());
		result = prime * result + sqlScore;
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
		if (hibernateNextDifficulty == null) {
			if (other.hibernateNextDifficulty != null)
				return false;
		} else if (!hibernateNextDifficulty.equals(other.hibernateNextDifficulty))
			return false;
		if (hibernateScore != other.hibernateScore)
			return false;
		if (javaDifficulty != other.javaDifficulty)
			return false;
		if (javaNextDifficulty == null) {
			if (other.javaNextDifficulty != null)
				return false;
		} else if (!javaNextDifficulty.equals(other.javaNextDifficulty))
			return false;
		if (javaScore != other.javaScore)
			return false;
		if (jsDifficulty != other.jsDifficulty)
			return false;
		if (jsNextDifficulty == null) {
			if (other.jsNextDifficulty != null)
				return false;
		} else if (!jsNextDifficulty.equals(other.jsNextDifficulty))
			return false;
		if (jsScore != other.jsScore)
			return false;
		if (nodeDifficulty != other.nodeDifficulty)
			return false;
		if (nodeNextDifficulty == null) {
			if (other.nodeNextDifficulty != null)
				return false;
		} else if (!nodeNextDifficulty.equals(other.nodeNextDifficulty))
			return false;
		if (nodeScore != other.nodeScore)
			return false;
		if (overallId != other.overallId)
			return false;
		if (reactDifficulty != other.reactDifficulty)
			return false;
		if (reactNextDifficulty == null) {
			if (other.reactNextDifficulty != null)
				return false;
		} else if (!reactNextDifficulty.equals(other.reactNextDifficulty))
			return false;
		if (reactScore != other.reactScore)
			return false;
		if (springDifficulty != other.springDifficulty)
			return false;
		if (springNextDifficulty == null) {
			if (other.springNextDifficulty != null)
				return false;
		} else if (!springNextDifficulty.equals(other.springNextDifficulty))
			return false;
		if (springScore != other.springScore)
			return false;
		if (sqlDifficulty != other.sqlDifficulty)
			return false;
		if (sqlNextDifficulty == null) {
			if (other.sqlNextDifficulty != null)
				return false;
		} else if (!sqlNextDifficulty.equals(other.sqlNextDifficulty))
			return false;
		if (sqlScore != other.sqlScore)
			return false;
		return true;
	}


	public int getOverallId() {
		return overallId;
	}


	public void setOverallId(int overallId) {
		this.overallId = overallId;
	}


	public int getJavaScore() {
		return javaScore;
	}


	public void setJavaScore(int javaScore) {
		this.javaScore = javaScore;
	}


	public int getJavaDifficulty() {
		return javaDifficulty;
	}


	public void setJavaDifficulty(int javaDifficulty) {
		this.javaDifficulty = javaDifficulty;
	}


	public NextLevel getJavaNextDifficulty() {
		return javaNextDifficulty;
	}


	public void setJavaNextDifficulty(NextLevel javaNextDifficulty) {
		this.javaNextDifficulty = javaNextDifficulty;
	}


	public int getJsScore() {
		return jsScore;
	}


	public void setJsScore(int jsScore) {
		this.jsScore = jsScore;
	}


	public int getJsDifficulty() {
		return jsDifficulty;
	}


	public void setJsDifficulty(int jsDifficulty) {
		this.jsDifficulty = jsDifficulty;
	}


	public NextLevel getJsNextDifficulty() {
		return jsNextDifficulty;
	}


	public void setJsNextDifficulty(NextLevel jsNextDifficulty) {
		this.jsNextDifficulty = jsNextDifficulty;
	}


	public int getSqlScore() {
		return sqlScore;
	}


	public void setSqlScore(int sqlScore) {
		this.sqlScore = sqlScore;
	}


	public int getSqlDifficulty() {
		return sqlDifficulty;
	}


	public void setSqlDifficulty(int sqlDifficulty) {
		this.sqlDifficulty = sqlDifficulty;
	}


	public NextLevel getSqlNextDifficulty() {
		return sqlNextDifficulty;
	}


	public void setSqlNextDifficulty(NextLevel sqlNextDifficulty) {
		this.sqlNextDifficulty = sqlNextDifficulty;
	}


	public int getHibernateScore() {
		return hibernateScore;
	}


	public void setHibernateScore(int hibernateScore) {
		this.hibernateScore = hibernateScore;
	}


	public int getHibernateDifficulty() {
		return hibernateDifficulty;
	}


	public void setHibernateDifficulty(int hibernateDifficulty) {
		this.hibernateDifficulty = hibernateDifficulty;
	}


	public NextLevel getHibernateNextDifficulty() {
		return hibernateNextDifficulty;
	}


	public void setHibernateNextDifficulty(NextLevel hibernateNextDifficulty) {
		this.hibernateNextDifficulty = hibernateNextDifficulty;
	}


	public int getSpringScore() {
		return springScore;
	}


	public void setSpringScore(int springScore) {
		this.springScore = springScore;
	}


	public int getSpringDifficulty() {
		return springDifficulty;
	}


	public void setSpringDifficulty(int springDifficulty) {
		this.springDifficulty = springDifficulty;
	}


	public NextLevel getSpringNextDifficulty() {
		return springNextDifficulty;
	}


	public void setSpringNextDifficulty(NextLevel springNextDifficulty) {
		this.springNextDifficulty = springNextDifficulty;
	}


	public int getReactScore() {
		return reactScore;
	}


	public void setReactScore(int reactScore) {
		this.reactScore = reactScore;
	}


	public int getReactDifficulty() {
		return reactDifficulty;
	}


	public void setReactDifficulty(int reactDifficulty) {
		this.reactDifficulty = reactDifficulty;
	}


	public NextLevel getReactNextDifficulty() {
		return reactNextDifficulty;
	}


	public void setReactNextDifficulty(NextLevel reactNextDifficulty) {
		this.reactNextDifficulty = reactNextDifficulty;
	}


	public int getNodeScore() {
		return nodeScore;
	}


	public void setNodeScore(int nodeScore) {
		this.nodeScore = nodeScore;
	}


	public int getNodeDifficulty() {
		return nodeDifficulty;
	}


	public void setNodeDifficulty(int nodeDifficulty) {
		this.nodeDifficulty = nodeDifficulty;
	}


	public NextLevel getNodeNextDifficulty() {
		return nodeNextDifficulty;
	}


	public void setNodeNextDifficulty(NextLevel nodeNextDifficulty) {
		this.nodeNextDifficulty = nodeNextDifficulty;
	}

	
}