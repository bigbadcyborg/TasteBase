package tastebase;

import java.io.FileInputStream;
import java.util.Properties;

public class Config {
    private static Properties prop = new Properties();

    static {
        try {
            prop.load(new FileInputStream("app.properties"));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static String get(String key) {
        return prop.getProperty(key);
    }
}
