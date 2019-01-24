package bzz.modul.projekt.hibernate;

import org.hibernate.*;
import org.hibernate.cfg.*;

public class HibernateUtil {
	
	private static SessionFactory sessionFactory;
	
	static { 
		if(sessionFactory == null) {
			try {
				sessionFactory = new Configuration().configure("/config/hibernate.cfg.xml").buildSessionFactory();
			}catch(Exception ex) {
				ex.printStackTrace();
			}
		}
	}
	
	public static Session getSession() {
		try {
			return sessionFactory.openSession();
		}catch( HibernateException ex) {
			return sessionFactory.getCurrentSession();
		}
	}
}
