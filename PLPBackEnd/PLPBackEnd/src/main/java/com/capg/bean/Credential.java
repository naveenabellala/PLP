package com.capg.bean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

@Entity
@Table(name = "TR5Credential")
public class Credential {

	
	/*
	 * @GeneratedValue(strategy = GenerationType.SEQUENCE, generator =
	 * "credential_seq")
	 * 
	 * @GenericGenerator(
	 * 
	 * name = "credential_seq",
	 * 
	 * strategy = "com.capg.bean.StringPrefixedSequenceIdGenerator",
	 * 
	 * parameters = {
	 * 
	 * @Parameter(name = StringPrefixedSequenceIdGenerator.INCREMENT_PARAM, value =
	 * "1"),
	 * 
	 * @Parameter(name = StringPrefixedSequenceIdGenerator.VALUE_PREFIX_PARAMETER,
	 * value = "CRED_"),
	 * 
	 * @Parameter(name = StringPrefixedSequenceIdGenerator.NUMBER_FORMAT_PARAMETER,
	 * value = "%05d") })
	 */
	
	@Id
	private String id;
	private String password;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "Credential [id=" + id + ", password=" + password + "]";
	}
	
	
}
