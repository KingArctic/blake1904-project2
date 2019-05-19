package com.project2.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Question {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int questionId;
	private String question;
	private String answer;
	private String wrong1;
	private String wrong2;
	private String wrong3;
	@ManyToOne
	private QuestionType type;
	@ManyToOne
	private Difficulty difficulty;
	
	public Question() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Question(int questionId, String question, String answer, String wrong1, String wrong2, String wrong3,
			QuestionType type, Difficulty difficulty) {
		super();
		this.questionId = questionId;
		this.question = question;
		this.answer = answer;
		this.wrong1 = wrong1;
		this.wrong2 = wrong2;
		this.wrong3 = wrong3;
		this.type = type;
		this.difficulty = difficulty;
	}

	public Question(String question, String answer, String wrong1, String wrong2, String wrong3, QuestionType type,
			Difficulty difficulty) {
		super();
		this.question = question;
		this.answer = answer;
		this.wrong1 = wrong1;
		this.wrong2 = wrong2;
		this.wrong3 = wrong3;
		this.type = type;
		this.difficulty = difficulty;
	}
	
	@Override
	public String toString() {
		return "Question [questionId=" + questionId + ", question=" + question + ", answer=" + answer + ", wrong1="
				+ wrong1 + ", wrong2=" + wrong2 + ", wrong3=" + wrong3 + ", type=" + type + ", difficulty=" + difficulty
				+ "]";
	}

	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((answer == null) ? 0 : answer.hashCode());
		result = prime * result + ((difficulty == null) ? 0 : difficulty.hashCode());
		result = prime * result + ((question == null) ? 0 : question.hashCode());
		result = prime * result + questionId;
		result = prime * result + ((type == null) ? 0 : type.hashCode());
		result = prime * result + ((wrong1 == null) ? 0 : wrong1.hashCode());
		result = prime * result + ((wrong2 == null) ? 0 : wrong2.hashCode());
		result = prime * result + ((wrong3 == null) ? 0 : wrong3.hashCode());
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
		Question other = (Question) obj;
		if (answer == null) {
			if (other.answer != null)
				return false;
		} else if (!answer.equals(other.answer))
			return false;
		if (difficulty == null) {
			if (other.difficulty != null)
				return false;
		} else if (!difficulty.equals(other.difficulty))
			return false;
		if (question == null) {
			if (other.question != null)
				return false;
		} else if (!question.equals(other.question))
			return false;
		if (questionId != other.questionId)
			return false;
		if (type == null) {
			if (other.type != null)
				return false;
		} else if (!type.equals(other.type))
			return false;
		if (wrong1 == null) {
			if (other.wrong1 != null)
				return false;
		} else if (!wrong1.equals(other.wrong1))
			return false;
		if (wrong2 == null) {
			if (other.wrong2 != null)
				return false;
		} else if (!wrong2.equals(other.wrong2))
			return false;
		if (wrong3 == null) {
			if (other.wrong3 != null)
				return false;
		} else if (!wrong3.equals(other.wrong3))
			return false;
		return true;
	}

	public int getQuestionId() {
		return questionId;
	}

	public void setQuestionId(int questionId) {
		this.questionId = questionId;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public QuestionType getType() {
		return type;
	}

	public void setType(QuestionType type) {
		this.type = type;
	}

	public Difficulty getDifficulty() {
		return difficulty;
	}

	public void setDifficulty(Difficulty difficulty) {
		this.difficulty = difficulty;
	}

	public String getWrong1() {
		return wrong1;
	}

	public void setWrong1(String wrong1) {
		this.wrong1 = wrong1;
	}

	public String getWrong2() {
		return wrong2;
	}

	public void setWrong2(String wrong2) {
		this.wrong2 = wrong2;
	}

	public String getWrong3() {
		return wrong3;
	}

	public void setWrong3(String wrong3) {
		this.wrong3 = wrong3;
	}

	
}
