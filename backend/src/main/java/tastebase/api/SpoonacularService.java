package tastebase.api;

import tastebase.Config;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class SpoonacularService {

    String apiKey;
    String baseUrl;

    public SpoonacularService() {
        apiKey = Config.get("SPN_KEY");
        baseUrl = "https://api.spoonacular.com/";
    }

    public HttpResponse<String> getRandomRecipe() {
        String url = baseUrl + "recipes/random?apiKey=" + apiKey;

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .GET()
                .build();

        try {
            return client.send(request, HttpResponse.BodyHandlers.ofString());
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
