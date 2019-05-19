package com.project2.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class QuestionType {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	private int questionTypeId;
	private String category;
	
	
	public QuestionType() {
		super();
		// TODO Auto-generated constructor stub
	}


	public QuestionType(int questionTypeId, String category) {
		super();
		this.questionTypeId = questionTypeId;
		this.category = category;
	}


	public QuestionType(String category) {
		super();
		this.category = category;
	}


	@Override
	public String toString() {
		return "QuestionType [questionTypeId=" + questionTypeId + ", category=" + category + "]";
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((category == null) ? 0 : category.hashCode());
		result = prime * result + questionTypeId;
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
		QuestionType other = (QuestionType) obj;
		if (category == null) {
			if (other.category != null)
				return false;
		} else if (!category.equals(other.category))
			return false;
		if (questionTypeId != other.questionTypeId)
			return false;
		return true;
	}


	public int getQuestionTypeId() {
		return questionTypeId;
	}


	public void setQuestionTypeId(int questionTypeId) {
		this.questionTypeId = questionTypeId;
	}


	public String getCategory() {
		return category;
	}


	public void setCategory(String category) {
		this.category = category;
	}
	
	
}
