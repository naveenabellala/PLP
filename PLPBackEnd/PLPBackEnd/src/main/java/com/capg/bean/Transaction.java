package com.capg.bean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Pattern;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

@Entity
@Table(name = "TR5Transaction")
public class Transaction {

	@Override
	public String toString() {
		return "Transaction [transId=" + transId + ", ordItem=" + ordItem + ", paymentMode=" + paymentMode + "]";
	}
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "transaction_seq")

	@GenericGenerator(

			name = "transaction_seq", 

			strategy = "com.capg.bean.StringPrefixedSequenceIdGenerator", 

			parameters = {

					@Parameter(name = StringPrefixedSequenceIdGenerator.INCREMENT_PARAM, value = "1"),

					@Parameter(name = StringPrefixedSequenceIdGenerator.VALUE_PREFIX_PARAMETER, value = "TRAN_"),

					@Parameter(name = StringPrefixedSequenceIdGenerator.NUMBER_FORMAT_PARAMETER, value = "%05d") })
	
	
	private String transId;
	@OneToOne
	private OrderedItem ordItem;
	@Pattern(regexp = "(COD|WL)")
	private String paymentMode;
	public String getTransId() {
		return transId;
	}
	public void setTransId(String transId) {
		this.transId = transId;
	}
	public OrderedItem getOrdItem() {
		return ordItem;
	}
	public void setOrdItem(OrderedItem ordItem) {
		this.ordItem = ordItem;
	}
	public String getPaymentMode() {
		return paymentMode;
	}
	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}
	
	
	
}
