package bzz.modul.projekt.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "benutzer")
public class BenutzerEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "benutzer_id")
	private int benutzerId;

	@Column(name = "name")
	private String name;

	@Column(name = "vorname")
	private String vorname;

	@Column(name = "geschlecht")
	private char geschlecht;

	@Column(name = "benutzername")
	private String benutzername;

	@Column(name = "password")
	private String password;

	@Column(name = "email")
	private String email;

	@Column(name = "adresse")
	private String adresse;

	@Column(name = "postleizahl")
	private String postleizahl;

	@Column(name = "ort")
	private String ort;

	public BenutzerEntity() {

	}

	public int getBenutzerId() {
		return benutzerId;
	}

	public void setBenutzerId(int benutzerId) {
		this.benutzerId = benutzerId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getVorname() {
		return vorname;
	}

	public void setVorname(String vorname) {
		this.vorname = vorname;
	}

	public char getGeschlecht() {
		return geschlecht;
	}

	public void setGeschlecht(char geschlecht) {
		this.geschlecht = geschlecht;
	}

	public String getBenutzername() {
		return benutzername;
	}

	public void setBenutzername(String benutzername) {
		this.benutzername = benutzername;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public String getPostleizahl() {
		return postleizahl;
	}

	public void setPostleizahl(String postleizahl) {
		this.postleizahl = postleizahl;
	}

	public String getOrt() {
		return ort;
	}

	public void setOrt(String ort) {
		this.ort = ort;
	}

}
