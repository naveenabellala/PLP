package com.capg.bean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "TR5WishItem")
public class WishItem {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "wishlist_seq")

	@GenericGenerator(

			name = "wishlist_seq", 

			strategy = "com.capg.bean.StringPrefixedSequenceIdGenerator", 

			parameters = {

					@Parameter(name = StringPrefixedSequenceIdGenerator.INCREMENT_PARAM, value = "1"),

					@Parameter(name = StringPrefixedSequenceIdGenerator.VALUE_PREFIX_PARAMETER, value = "WISH_"),

					@Parameter(name = StringPrefixedSequenceIdGenerator.NUMBER_FORMAT_PARAMETER, value = "%05d") })
	
	
	private String wishId;
	
	@ManyToOne
	private Product wishedProduct; // unidirectional
	@ManyToOne
	
	private Customer customer;
	
	public String getWishId() {
		return wishId;
	}
	public void setWishId(String wishId) {
		this.wishId = wishId;
	}
	public Product getWishedProduct() {
		return wishedProduct;
	}
	public void setWishedProduct(Product wishedProduct) {
		this.wishedProduct = wishedProduct;
	}
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	@Override
	public String toString() {
		return "WishItem [wishId=" + wishId + ", wishedProduct=" + wishedProduct + ", customer=" + customer + "]";
	}
	
	
}
