package com.romain.espacemembre.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "user")
public class User {
  private long id;
  private String pseudo;
  private String firstName;
  private String lastName;
  private Date birthDate;
  private String mail;
  private String password;
  private String sexe;
  private String description;
  private String wayNumber;
  private String street;
  private String zipCode;
  private String city;
  private Date dateOfCreate;
  private String longitude;
  private  String latitude;

  public User() {

  }

  public User(long id, String pseudo, String firstName, String lastName, Date birthDate, String mail, String password, String sexe, String description, String wayNumber, String street, String zipCode, String city, Date dateOfCreate, String longitude, String latitude) {
    this.id = id;
    this.pseudo = pseudo;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.mail = mail;
    this.password = password;
    this.sexe = sexe;
    this.description = description;
    this.wayNumber = wayNumber;
    this.street = street;
    this.zipCode = zipCode;
    this.city = city;
    this.dateOfCreate = dateOfCreate;
    this.longitude = longitude;
    this.latitude = latitude;
  }

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  public long getId() {
    return id;
  }
  public void setId(long id) {
    this.id = id;
  }

  @Column(name = "first_name", nullable = false)
  public String getFirstName() {
    return firstName;
  }
  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  @Column(name = "last_name", nullable = false)
  public String getLastName() {
    return lastName;
  }
  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  @Column(name = "pseudo", nullable = false)
  public String getPseudo() {
    return pseudo;
  }
  public void setPseudo(String pseudo) {
    this.pseudo = pseudo;
  }

  @Column(name = "birth_date", nullable = false)
  public Date getBirthDate() {
    return birthDate;
  }

  public void setBirthDate(Date birthDate) {
    this.birthDate = birthDate;
  }

  @Column(name = "mail", nullable = false)
  public String getMail() {
    return mail;
  }

  public void setMail(String mail) {
    this.mail = mail;
  }

  @Column(name = "password", nullable = false)
  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  @Column(name = "sexe", nullable = false)
  public String getSexe() {
    return sexe;
  }

  public void setSexe(String sexe) {
    this.sexe = sexe;
  }

  @Column(name = "description", nullable = false)
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  @Column(name = "way_number", nullable = false)
  public String getWayNumber() {
    return wayNumber;
  }

  public void setWayNumber(String wayNumber) {
    this.wayNumber = wayNumber;
  }

  @Column(name = "street", nullable = false)
  public String getStreet() {
    return street;
  }

  public void setStreet(String street) {
    this.street = street;
  }

  @Column(name = "zip_code", nullable = false)
  public String getZipCode() {
    return zipCode;
  }

  public void setZipCode(String zipCode) {
    this.zipCode = zipCode;
  }

  @Column(name = "city", nullable = false)
  public String getCity() {
    return city;
  }

  public void setCity(String city) {
    this.city = city;
  }

  @Column(name = "date_of_create", nullable = false)
  public Date getDateOfCreate() {
    return dateOfCreate;
  }

  public void setDateOfCreate(Date dateOfCreate) {
    this.dateOfCreate = dateOfCreate;
  }

  @Column(name = "longitude", nullable = false)
  public String getLongitude() {
    return longitude;
  }

  public void setLongitude(String longitude) {
    this.longitude = longitude;
  }

  @Column(name = "latitude", nullable = false)
  public String getLatitude() {
    return latitude;
  }

  public void setLatitude(String latitude) {
    this.latitude = latitude;
  }

  @Override
  public String toString() {
    return "Employee [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", pseudo=" + pseudo
      + "]";
  }
}
