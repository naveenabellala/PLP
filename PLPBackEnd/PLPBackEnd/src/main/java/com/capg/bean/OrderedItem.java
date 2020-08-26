package com.capg.bean;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Pattern;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

@Entity
@Table(name = "TR5OrderedItem")
public class OrderedItem {

	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "orders_seq")

	@GenericGenerator(

			name = "orders_seq", 

			strategy = "com.capg.bean.StringPrefixedSequenceIdGenerator", 

			parameters = {

					@Parameter(name = StringPrefixedSequenceIdGenerator.INCREMENT_PARAM, value = "1"),

					@Parameter(name = StringPrefixedSequenceIdGenerator.VALUE_PREFIX_PARAMETER, value = "ORD_"),

					@Parameter(name = StringPrefixedSequenceIdGenerator.NUMBER_FORMAT_PARAMETER, value = "%05d") })
	
	
	private String ordId;
	@ManyToOne
	private Customer customer;
	@ManyToOne
	private Product product;
	@ManyToOne
	private Merchant merchant;
	private String orderTime;
	private double ordPrice;
	private String shippingAddress;
	@Pattern(regexp = "(PLD|DISP|REC|RET)")
	private String ordStatus;
	@ManyToOne
	private Coupon coupon;

	private int ordQty;
	
	
	public String getOrdId() {
		return ordId;
	}
	public void setOrdId(String ordId) {
		this.ordId = ordId;
	}
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	public Merchant getMerchant() {
		return merchant;
	}
	public void setMerchant(Merchant merchant) {
		this.merchant = merchant;
	}
	public String getOrderTime() {
		return orderTime;
	}
	public void setOrderTime(String orderTime) {
		this.orderTime = orderTime;
	}
	public double getOrdPrice() {
		return ordPrice;
	}
	public void setOrdPrice(double ordPrice) {
		this.ordPrice = ordPrice;
	}
	public String getShippingAddress() {
		return shippingAddress;
	}
	public void setShippingAddress(String shippingAddress) {
		this.shippingAddress = shippingAddress;
	}
	public String getOrdStatus() {
		return ordStatus;
	}
	public void setOrdStatus(String ordStatus) {
		this.ordStatus = ordStatus;
	}

	public Coupon getCoupon() {
		return coupon;
	}
	public void setCoupon(Coupon coupon) {
		this.coupon = coupon;
	}
	public int getOrdQty() {
		return ordQty;
	}
	public void setOrdQty(int ordQty) {
		this.ordQty = ordQty;
	}
	@Override
	public String toString() {
		return "OrderedItem [ordId=" + ordId + ", customer=" + customer + ", product=" + product + ", merchant="
				+ merchant + ", orderTime=" + orderTime + ", ordPrice=" + ordPrice + ", shippingAddress="
				+ shippingAddress + ", ordStatus=" + ordStatus + ", coupon=" + coupon + ", ordQty=" + ordQty + "]";
	}
	
	
	
}
