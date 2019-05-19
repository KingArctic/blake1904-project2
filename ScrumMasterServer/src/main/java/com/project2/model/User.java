package com.project2.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userId;
	private String name;
	@Column(unique = true)
	private String email;

	@Column(unique = true)
	private String username;
	private String password;
	private int level;
	@OneToOne
	private Bank account;
	private int avatar;
	@ManyToMany
	private List<ShopItem> inventory;
	@OneToOne
	private Overall topicLevels;
	
	@ManyToMany
	private List<Question> javaQuestions;
	@ManyToMany
	private List<Question> javaScriptQuestions;
	@ManyToMany
	private List<Question> sqlQuestions;
	@ManyToMany
	private List<Question> hibernateQuestions;
	@ManyToMany
	private List<Question> springQuestions;
	@ManyToMany
	private List<Question> reactQuestions;
	@ManyToMany
	private List<Question> nodeQuestions;

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(int userId, String name, String email, String username, String password, int level, Bank account,
			int avatar, List<ShopItem> inventory, Overall topicLevels, List<Question> javaQuestions, List<Question> javaScriptQuestions,
			List<Question> sqlQuestions, List<Question> hibernateQuestions, List<Question> springQuestions,
			List<Question> reactQuestions, List<Question> nodeQuestions) {
		super();
		this.userId = userId;
		this.name = name;
		this.email = email;
		this.username = username;
		this.password = password;
		this.level = level;
		this.account = account;
		this.avatar = avatar;
		this.inventory = inventory;
		this.topicLevels = topicLevels;
		this.javaQuestions = javaQuestions;
		this.javaScriptQuestions = javaScriptQuestions;
		this.sqlQuestions = sqlQuestions;
		this.hibernateQuestions = hibernateQuestions;
		this.springQuestions = springQuestions;
		this.reactQuestions = reactQuestions;
		this.nodeQuestions = nodeQuestions;
	}

	public User(String name, String email, String username, String password, int level, Bank account, int avatar,
			List<ShopItem> inventory, Overall topicLevels, List<Question> javaQuestions, List<Question> javaScriptQuestions,
			List<Question> sqlQuestions, List<Question> hibernateQuestions, List<Question> springQuestions,
			List<Question> reactQuestions, List<Question> nodeQuestions) {
		super();
		this.name = name;
		this.email = email;
		this.username = username;
		this.password = password;
		this.level = level;
		this.account = account;
		this.avatar = avatar;
		this.inventory = inventory;
		this.topicLevels = topicLevels;
		this.javaQuestions = javaQuestions;
		this.javaScriptQuestions = javaScriptQuestions;
		this.sqlQuestions = sqlQuestions;
		this.hibernateQuestions = hibernateQuestions;
		this.springQuestions = springQuestions;
		this.reactQuestions = reactQuestions;
		this.nodeQuestions = nodeQuestions;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", name=" + name + ", email=" + email + ", username=" + username
				+ ", password=" + password + ", level=" + level + ", account=" + account + ", avatar=" + avatar
				+ ", inventory=" + inventory + ", topicLevels=" + topicLevels + ", javaQuestions=" + javaQuestions + ", javaScriptQuestions="
				+ javaScriptQuestions + ", sqlQuestions=" + sqlQuestions + ", hibernateQuestions=" + hibernateQuestions
				+ ", springQuestions=" + springQuestions + ", reactQuestions=" + reactQuestions + ", nodeQuestions="
				+ nodeQuestions + "]"
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((account == null) ? 0 : account.hashCode());
		result = prime * result + avatar;
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + ((hibernateQuestions == null) ? 0 : hibernateQuestions.hashCode());
		result = prime * result + ((inventory == null) ? 0 : inventory.hashCode());
		result = prime * result + ((javaQuestions == null) ? 0 : javaQuestions.hashCode());
		result = prime * result + ((javaScriptQuestions == null) ? 0 : javaScriptQuestions.hashCode());
		result = prime * result + level;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((nodeQuestions == null) ? 0 : nodeQuestions.hashCode());
		result = prime * result + ((password == null) ? 0 : password.hashCode());
		result = prime * result + ((topicLevels == null) ? 0 : topicLevels.hashCode());
		result = prime * result + ((reactQuestions == null) ? 0 : reactQuestions.hashCode());
		result = prime * result + ((springQuestions == null) ? 0 : springQuestions.hashCode());
		result = prime * result + ((sqlQuestions == null) ? 0 : sqlQuestions.hashCode());
		result = prime * result + userId;
		result = prime * result + ((username == null) ? 0 : username.hashCode());
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
		User other = (User) obj;
		if (account == null) {
			if (other.account != null)
				return false;
		} else if (!account.equals(other.account))
			return false;
		if (avatar != other.avatar)
			return false;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		if (hibernateQuestions == null) {
			if (other.hibernateQuestions != null)
				return false;
		} else if (!hibernateQuestions.equals(other.hibernateQuestions))
			return false;
		if (inventory == null) {
			if (other.inventory != null)
				return false;
		} else if (!inventory.equals(other.inventory))
			return false;
		if (javaQuestions == null) {
			if (other.javaQuestions != null)
				return false;
		} else if (!javaQuestions.equals(other.javaQuestions))
			return false;
		if (javaScriptQuestions == null) {
			if (other.javaScriptQuestions != null)
				return false;
		} else if (!javaScriptQuestions.equals(other.javaScriptQuestions))
			return false;
		if (level != other.level)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (nodeQuestions == null) {
			if (other.nodeQuestions != null)
				return false;
		} else if (!nodeQuestions.equals(other.nodeQuestions))
			return false;
		if (password == null) {
			if (other.password != null)
				return false;
		} else if (!password.equals(other.password))
			return false;
		if (topicLevels == null) {
			if (other.topicLevels != null)
				return false;
		} else if (!topicLevels.equals(other.topicLevels))
			return false;
		if (reactQuestions == null) {
			if (other.reactQuestions != null)
				return false;
		} else if (!reactQuestions.equals(other.reactQuestions))
			return false;
		if (springQuestions == null) {
			if (other.springQuestions != null)
				return false;
		} else if (!springQuestions.equals(other.springQuestions))
			return false;
		if (sqlQuestions == null) {
			if (other.sqlQuestions != null)
				return false;
		} else if (!sqlQuestions.equals(other.sqlQuestions))
			return false;
		if (userId != other.userId)
			return false;
		if (username == null) {
			if (other.username != null)
				return false;
		} else if (!username.equals(other.username))
			return false;
		return true;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

	public Bank getAccount() {
		return account;
	}

	public void setAccount(Bank account) {
		this.account = account;
	}

	public int getAvatar() {
		return avatar;
	}

	public void setAvatar(int avatar) {
		this.avatar = avatar;
	}

	public List<ShopItem> getInventory() {
		return inventory;
	}

	public void setInventory(List<ShopItem> inventory) {
		this.inventory = inventory;
	}

	public List<Question> getJavaQuestions() {
		return javaQuestions;
	}

	public void setJavaQuestions(List<Question> javaQuestions) {
		this.javaQuestions = javaQuestions;
	}

	public List<Question> getJavaScriptQuestions() {
		return javaScriptQuestions;
	}

	public void setJavaScriptQuestions(List<Question> javaScriptQuestions) {
		this.javaScriptQuestions = javaScriptQuestions;
	}

	public List<Question> getSqlQuestions() {
		return sqlQuestions;
	}

	public void setSqlQuestions(List<Question> sqlQuestions) {
		this.sqlQuestions = sqlQuestions;
	}

	public List<Question> getHibernateQuestions() {
		return hibernateQuestions;
	}

	public void setHibernateQuestions(List<Question> hibernateQuestions) {
		this.hibernateQuestions = hibernateQuestions;
	}

	public List<Question> getSpringQuestions() {
		return springQuestions;
	}

	public void setSpringQuestions(List<Question> springQuestions) {
		this.springQuestions = springQuestions;
	}

	public List<Question> getReactQuestions() {
		return reactQuestions;
	}

	public void setReactQuestions(List<Question> reactQuestions) {
		this.reactQuestions = reactQuestions;
	}

	public List<Question> getNodeQuestions() {
		return nodeQuestions;
	}

	public void setNodeQuestions(List<Question> nodeQuestions) {
		this.nodeQuestions = nodeQuestions;
	}




	public Overall getTopicLevels() {
		return topicLevels;
	}



	public void setTopicLevels(Overall topicLevels) {
		this.topicLevels = topicLevels;
	}
	
	
}