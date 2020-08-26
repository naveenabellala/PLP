package com.capg.bean;

 

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

 

import com.fasterxml.jackson.annotation.JsonIgnore;

 

@Entity
@Table(name = "TR5Customer")
public class Customer {

 

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "customer_seq")

 

    @GenericGenerator(

 

            name = "customer_seq", 

 

            strategy = "com.capg.bean.StringPrefixedSequenceIdGenerator", 

 

            parameters = {

 

                    @Parameter(name = StringPrefixedSequenceIdGenerator.INCREMENT_PARAM, value = "1"),

 

                    @Parameter(name = StringPrefixedSequenceIdGenerator.VALUE_PREFIX_PARAMETER, value = "CUST_"),

 

                    @Parameter(name = StringPrefixedSequenceIdGenerator.NUMBER_FORMAT_PARAMETER, value = "%05d") })
    
    
    private String custId;
    @Email
    @Column(unique = true)
    private String emailId;
    private String firstName;
    private String lastName;
    @Pattern(regexp = "(true|false)")
    private String isValid;
    private String address;
    private String phoneNo;
    private double walletBalance;
    @OneToMany
    @JsonIgnore
    private List<CartItem> cartItems;
    @OneToMany
    @JsonIgnore
    private List<WishItem> wishItems;
    
    public String getCustId() {
        return custId;
    }
    public void setCustId(String custId) {
        this.custId = custId;
    }

 

    public String getEmailId() {
        return emailId;
    }
    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    
    public String getIsValid() {
        return isValid;
    }
    public void setIsValid(String isValid) {
        this.isValid = isValid;
    }
    public String getPhoneNo() {
        return phoneNo;
    }
    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public double getWalletBalance() {
        return walletBalance;
    }
    public void setWalletBalance(double walletBalance) {
        this.walletBalance = walletBalance;
    }
    public List<CartItem> getCartItems() {
        return cartItems;
    }
    public void setCartItems(List<CartItem> cartItems) {
        this.cartItems = cartItems;
    }
    
    public List<WishItem> getWishItems() {
        return wishItems;
    }
    public void setWishItems(List<WishItem> wishItems) {
        this.wishItems = wishItems;
    }
	@Override
	public String toString() {
		return "Customer [custId=" + custId + ", emailId=" + emailId + ", firstName=" + firstName + ", lastName="
				+ lastName + ", isValid=" + isValid + ", address=" + address + ", phoneNo=" + phoneNo
				+ ", walletBalance=" + walletBalance + ", cartItems=" + cartItems + ", wishItems=" + wishItems + "]";
	}

    
    
 

}
 