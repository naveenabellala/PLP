package com.capg.bean;

 

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

 

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

 

import com.fasterxml.jackson.annotation.JsonIgnore;

 

@Entity
@Table(name = "TR5Product")
public class Product {

 

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "product_seq")

 

    @GenericGenerator(

 

            name = "product_seq", 

 

            strategy = "com.capg.bean.StringPrefixedSequenceIdGenerator", 

 

            parameters = {

 

                    @Parameter(name = StringPrefixedSequenceIdGenerator.INCREMENT_PARAM, value = "1"),

 

                    @Parameter(name = StringPrefixedSequenceIdGenerator.VALUE_PREFIX_PARAMETER, value = "PROD_"),

 

                    @Parameter(name = StringPrefixedSequenceIdGenerator.NUMBER_FORMAT_PARAMETER, value = "%05d") })
    
    
    private String prodId;
    private String prodName;
    private String prodCategory;
    private double price;
    private int discount;
    private String validTime;
    private String promoCode;
    private int viewsCount;
    private int qty;
    @ManyToOne
    private Merchant merchant;
    @OneToOne
    @JsonIgnore
    private Rating productRating;
    
    public int getQty() {
        return qty;
    }
    public void setQty(int qty) {
        this.qty = qty;
    }
    
    public String getProdId() {
        return prodId;
    }
    public void setProdId(String prodId) {
        this.prodId = prodId;
    }
    public String getProdName() {
        return prodName;
    }
    public void setProdName(String prodName) {
        this.prodName = prodName;
    }
    public String getProdCategory() {
        return prodCategory;
    }
    public void setProdCategory(String prodCategory) {
        this.prodCategory = prodCategory;
    }
    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        this.price = price;
    }
    public int getDiscount() {
        return discount;
    }
    public Rating getProductRating() {
        return productRating;
    }
    public void setProductRating(Rating productRating) {
        this.productRating = productRating;
    }
    
    public void setDiscount(int discount) {
        this.discount = discount;
    }
    public String getValidTime() {
        return validTime;
    }
    public void setValidTime(String validTime) {
        this.validTime = validTime;
    }
    public String getPromoCode() {
        return promoCode;
    }
    public void setPromoCode(String promoCode) {
        this.promoCode = promoCode;
    }
    public int getViewsCount() {
        return viewsCount;
    }
    public void setViewsCount(int viewsCount) {
        this.viewsCount = viewsCount;
    }
    public Merchant getMerchant() {
        return merchant;
    }
    public void setMerchant(Merchant merchant) {
        this.merchant = merchant;
    }
	@Override
	public String toString() {
		return "Product [prodId=" + prodId + ", prodName=" + prodName + ", prodCategory=" + prodCategory + ", price="
				+ price + ", discount=" + discount + ", validTime=" + validTime + ", promoCode=" + promoCode
				+ ", viewsCount=" + viewsCount + ", qty=" + qty + ", merchant=" + merchant + ", productRating="
				+ productRating + "]";
	}
    
    
    
    
    
}
 