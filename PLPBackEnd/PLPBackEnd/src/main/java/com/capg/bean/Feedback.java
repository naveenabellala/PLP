package com.capg.bean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

@Entity
@Table(name = "TR5Feedback")
public class Feedback {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "feedback_seq")

	@GenericGenerator(

			name = "feedback_seq", 

			strategy = "com.capg.bean.StringPrefixedSequenceIdGenerator", 

			parameters = {

					@Parameter(name = StringPrefixedSequenceIdGenerator.INCREMENT_PARAM, value = "1"),

					@Parameter(name = StringPrefixedSequenceIdGenerator.VALUE_PREFIX_PARAMETER, value = "FEED_"),

					@Parameter(name = StringPrefixedSequenceIdGenerator.NUMBER_FORMAT_PARAMETER, value = "%05d") })
	
	
	private String feedId;
	private String feedMsg;
	@ManyToOne
	private Customer customer;
	private String recId; //either product or merchant id -> write custom query to fetch prod or mer obj 
	
	public String getFeedId() {
		return feedId;
	}
	public void setFeedId(String feedId) {
		this.feedId = feedId;
	}
	public String getFeedMsg() {
		return feedMsg;
	}
	public void setFeedMsg(String feedMsg) {
		this.feedMsg = feedMsg;
	}
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	public String getRecId() {
		return recId;
	}
	public void setRecId(String recId) {
		this.recId = recId;
	}
	@Override
	public String toString() {
		return "Feedback [feedId=" + feedId + ", feedMsg=" + feedMsg + ", customer=" + customer + ", recId=" + recId
				+ "]";
	}
	
	
}
