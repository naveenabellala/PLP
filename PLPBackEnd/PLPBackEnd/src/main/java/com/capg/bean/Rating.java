package com.capg.bean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

@Entity
@Table(name = "TR5Rating")
public class Rating {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "rating_seq")

	@GenericGenerator(

			name = "rating_seq", 

			strategy = "com.capg.bean.StringPrefixedSequenceIdGenerator", 

			parameters = {

					@Parameter(name = StringPrefixedSequenceIdGenerator.INCREMENT_PARAM, value = "1"),

					@Parameter(name = StringPrefixedSequenceIdGenerator.VALUE_PREFIX_PARAMETER, value = "RATE_"),

					@Parameter(name = StringPrefixedSequenceIdGenerator.NUMBER_FORMAT_PARAMETER, value = "%05d") })
	
	
	private String ratId;
	@OneToOne
	private Product product;
	private double currRating;
	private int ratingCount;
	public String getRatId() {
		return ratId;
	}
	public void setRatId(String ratId) {
		this.ratId = ratId;
	}
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	public double getCurrRating() {
		return currRating;
	}
	public void setCurrRating(double currRating) {
		this.currRating = currRating;
	}
	public int getRatingCount() {
		return ratingCount;
	}
	public void setRatingCount(int ratingCount) {
		this.ratingCount = ratingCount;
	}
	@Override
	public String toString() {
		return "Rating [ratId=" + ratId + ", product=" + product + ", currRating=" + currRating + ", ratingCount="
				+ ratingCount + "]";
	}
	
	
	
	
	
}
