package com.capg.bean;
//
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.Table;
//import javax.validation.constraints.Email;
//import javax.validation.constraints.Pattern;
//
//import org.hibernate.annotations.GenericGenerator;
//import org.hibernate.annotations.Parameter;
//
//@Entity
//@Table(name = "TR5ThirdPartyMerchant")
//public class ThirdPartyMerchant {
//
//	@Id
//	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "credential_seq")
//
//	@GenericGenerator(
//
//			name = "credential_seq", 
//
//			strategy = "com.capg.bean.StringPrefixedSequenceIdGenerator", 
//
//			parameters = {
//
//					@Parameter(name = StringPrefixedSequenceIdGenerator.INCREMENT_PARAM, value = "1"),
//
//					@Parameter(name = StringPrefixedSequenceIdGenerator.VALUE_PREFIX_PARAMETER, value = "MERC_"),
//
//					@Parameter(name = StringPrefixedSequenceIdGenerator.NUMBER_FORMAT_PARAMETER, value = "%05d") })
//	
//	
//	private String tpId;
//	private String tpName;
//	@Email
//	private String emailId;
//	@Pattern(regexp = "(true|false)")
//	private String isJoined;
//	public String getTpId() {
//		return tpId;
//	}
//	public void setTpId(String tpId) {
//		this.tpId = tpId;
//	}
//	public String getTpName() {
//		return tpName;
//	}
//	public void setTpName(String tpName) {
//		this.tpName = tpName;
//	}
//	public String getEmailId() {
//		return emailId;
//	}
//	public void setEmailId(String emailId) {
//		this.emailId = emailId;
//	}
//	public String getIsJoined() {
//		return isJoined;
//	}
//	public void setIsJoined(String isJoined) {
//		this.isJoined = isJoined;
//	}
//	@Override
//	public String toString() {
//		return "ThirdPartyMerchant [tpId=" + tpId + ", tpName=" + tpName + ", emailId=" + emailId + ", isJoined="
//				+ isJoined + "]";
//	}
//	
//	
//	
//	
//}

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

@Entity
@Table(name = "TR5ThirdPartyMerchant")
public class ThirdPartyMerchant {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "tpmerchant_seq")

	@GenericGenerator(

			name = "tpmerchant_seq",

			strategy = "com.capg.bean.StringPrefixedSequenceIdGenerator",

			parameters = {

					@Parameter(name = StringPrefixedSequenceIdGenerator.INCREMENT_PARAM, value = "1"),

					@Parameter(name = StringPrefixedSequenceIdGenerator.VALUE_PREFIX_PARAMETER, value = "TPMERC_"),

					@Parameter(name = StringPrefixedSequenceIdGenerator.NUMBER_FORMAT_PARAMETER, value = "%05d") })

	private String merId;
	@Email
	@Column(unique = true)
	private String emailId;
	private String panCard;
	@Pattern(regexp = "(PENDING|ACCEPTED|REJECTED)")
	private String isValid;
	private String firstName;
	private String lastName;
	private String address;
	private String phoneNo;
	@Pattern(regexp = "(DD|TP)")
	private String merType;
	@OneToMany

	private List<Product> products;

	public String getMerId() {
		return merId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public void setMerId(String merId) {
		this.merId = merId;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPanCard() {
		return panCard;
	}

	public void setPanCard(String panCard) {
		this.panCard = panCard;
	}

	public String getIsValid() {
		return isValid;
	}

	public void setIsValid(String isValid) {
		this.isValid = isValid;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getMerType() {
		return merType;
	}

	public void setMerType(String merType) {
		this.merType = merType;
	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}

	@Override
	public String toString() {
		return "ThirdPartyMerchant [merId=" + merId + ", emailId=" + emailId + ", panCard=" + panCard + ", isValid=" + isValid
				+ ", firstName=" + firstName + ", lastName=" + lastName + ", address=" + address + ", phoneNo="
				+ phoneNo + ", merType=" + merType + ", products=" + products + "]";
	}

}

