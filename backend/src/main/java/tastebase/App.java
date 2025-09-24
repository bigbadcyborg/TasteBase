package tastebase;

import tastebase.database.SQLConnector;

import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Starting app.");
        try {
            SQLConnector.executeQuery("SELECT * FROM test");
        } catch (SQLException ex) {
            Logger.getLogger(App.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}