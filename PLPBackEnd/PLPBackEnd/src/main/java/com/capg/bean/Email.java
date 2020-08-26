package com.capg.bean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

@Entity
@Table(name = "TR5Email")
public class Email {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "email_seq")

	@GenericGenerator(

			name = "email_seq", 

			strategy = "com.capg.bean.StringPrefixedSequenceIdGenerator", 

			parameters = {

					@Parameter(name = StringPrefixedSequenceIdGenerator.INCREMENT_PARAM, value = "1"),

					@Parameter(name = StringPrefixedSequenceIdGenerator.VALUE_PREFIX_PARAMETER, value = "EMAIL_"),

					@Parameter(name = StringPrefixedSequenceIdGenerator.NUMBER_FORMAT_PARAMETER, value = "%05d") })
	
	
	private String id;
	private String fromMailId;
	private String toMailId;
	private String mail;
	
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getFromMailId() {
		return fromMailId;
	}
	public void setFromMailId(String fromMailId) {
		this.fromMailId = fromMailId;
	}
	public String getToMailId() {
		return toMailId;
	}
	public void setToMailId(String toMailId) {
		this.toMailId = toMailId;
	}
	@Override
	public String toString() {
		return "Email [id=" + id + ", fromMailId=" + fromMailId + ", toMailId=" + toMailId + ", mail=" + mail + "]";
	}
	
	
	

}
