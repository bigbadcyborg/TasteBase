package tastebase;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;
import tastebase.api.SpoonacularService;
import tastebase.database.SQLConnector;
import tastebase.obj.Recipe;

import java.net.http.*;
import java.net.URI;

import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

@SpringBootApplication
public class App {

    private static SpoonacularService spoonacularService;

    public static void main(String[] args) throws Exception {
        System.out.println("Starting app.");

        System.out.println("Checking database connection...");
        try {
            SQLConnector.executeQuery("SELECT * FROM test");
        } catch (SQLException ex) {
            Logger.getLogger(App.class.getName()).log(Level.SEVERE, null, ex);
        }
        System.out.println("Database connection established.");

        System.out.println("Starting Spring API");
        SpringApplication.run(App.class, args);

        spoonacularService = new SpoonacularService();
    }

    public static SpoonacularService getSpoonacularService() {
        return spoonacularService;
    }
}