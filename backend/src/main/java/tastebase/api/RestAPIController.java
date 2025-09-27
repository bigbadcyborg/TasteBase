package tastebase.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestAPIController {

    @GetMapping("/test")
    public String test() {
        return "test";
    }

}
