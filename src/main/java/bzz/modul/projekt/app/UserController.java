package bzz.modul.projekt.app;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import bzz.modul.projekt.businessServices.BusinessServiceBenutzer;
import bzz.modul.projekt.entities.BenutzerEntity;
import bzz.modul.projekt.httpObjects.LoginHttpObject;
import bzz.modul.projekt.httpObjects.RegisterHttpObject;


@Controller
@RequestMapping("/user")
public class UserController {

	@CrossOrigin("http://localhost:3000")
	@RequestMapping(value="/register", method= RequestMethod.PUT)
	public String insertUser(@RequestBody RegisterHttpObject benutzer){
		System.out.println(benutzer.getPassword());
		return BusinessServiceBenutzer.register(benutzer);
	}
	
	@CrossOrigin("http://localhost:3000")
	@RequestMapping(value ="/login", method = RequestMethod.POST)
	public BenutzerEntity login(@RequestBody LoginHttpObject loginObject){
		return BusinessServiceBenutzer.login(loginObject);
	}

	
}
