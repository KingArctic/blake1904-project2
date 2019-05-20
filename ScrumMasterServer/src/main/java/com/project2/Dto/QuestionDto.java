package com.project2.Dto;

public class QuestionDto {
	private String type;
	private int dif;
	
	public QuestionDto() {
		super();
	}

	public QuestionDto(String type, int dif) {
		super();
		this.type = type;
		this.dif = dif;
	}

	@Override
	public String toString() {
		return "QuestionDto [type=" + type + ", dif=" + dif + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + dif;
		result = prime * result + ((type == null) ? 0 : type.hashCode());
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
		QuestionDto other = (QuestionDto) obj;
		if (dif != other.dif)
			return false;
		if (type == null) {
			if (other.type != null)
				return false;
		} else if (!type.equals(other.type))
			return false;
		return true;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getDif() {
		return dif;
	}

	public void setDif(int dif) {
		this.dif = dif;
	}

}
