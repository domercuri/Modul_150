package bzz.modul.projekt.businessServices;

import java.util.ArrayList;

import javax.persistence.Query;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.exception.ConstraintViolationException;

import bzz.modul.projekt.hibernate.HibernateUtil;
import bzz.modul.projekt.httpObjects.LoginHttpObject;
import bzz.modul.projekt.httpObjects.RegisterHttpObject;
import bzz.modul.projekt.entities.BenutzerEntity;

public class BusinessServiceBenutzer {
	private static Session session;

	public static String register(RegisterHttpObject benutzer) {
		BenutzerEntity be = new BenutzerEntity();
		be.setName(benutzer.getName());
		be.setVorname(benutzer.getVorname());
		be.setEmail(benutzer.getEmail());
		be.setPassword(benutzer.getPassword());
		be.setGeschlecht(benutzer.getGeschlecht());
		be.setPostleizahl(benutzer.getPostleizahl());
		be.setOrt(benutzer.getOrt());
		be.setBenutzername(benutzer.getBenutzername());
		be.setAdresse(benutzer.getAdresse());
		

		
		session = HibernateUtil.getSession();
		
		//normalfall
		try {
			session.beginTransaction();
			session.save(be);
			session.getTransaction().commit();
			return "Success";
			
		//wenn der Benutzer eine Bereits vorhandene email oder benutzername eingibt
		} catch (ConstraintViolationException ex) {
			session.getTransaction().rollback();
			return "Email oder Benutzername bereits vorhanden";
		} catch (HibernateException ex) {
			session.getTransaction().rollback();
			return "Fehler";
		} finally {
			session.close();
		}

	}
	
	public static BenutzerEntity login (LoginHttpObject loginObject) {
		session = HibernateUtil.getSession();
		System.out.println(loginObject.getUsername());
		System.out.println(loginObject.getPassword());
		ArrayList<BenutzerEntity> users = new ArrayList<BenutzerEntity>();
		try {
			Query q = session.createQuery("from BenutzerEntity where benutzername = :bn and password= :pw");
			q.setParameter("bn", loginObject.getUsername());
			q.setParameter("pw", loginObject.getPassword());
			users = (ArrayList<BenutzerEntity>) q.getResultList();
			return users.get(0);
			
		}catch (Exception ex ) {
			ex.printStackTrace();
			session.getTransaction().rollback();
			return null;
		} finally {
			session.close();
		}
	}
}
