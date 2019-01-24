package bzz.modul.projekt.app;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {

	@RequestMapping(value = "/hallo", method = RequestMethod.GET)
	public String hello() {
		return "hallo";
	}
}
