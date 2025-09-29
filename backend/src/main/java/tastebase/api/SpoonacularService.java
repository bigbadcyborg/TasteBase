package tastebase.api;

import tastebase.Config;
import tastebase.obj.Recipe;

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

    public Recipe getRecipe(int id) {
        String url = baseUrl + "recipes/" + id + "/information?includeNutrition=false?apiKey=" + apiKey;

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .GET()
                .build();

        try {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            if (response.body() != null) {
                return new Recipe(response);
            } else {
                System.out.println("Error: Empty response from Spoonacular API");
                return null;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public Recipe getRandomRecipe() {
        String url = baseUrl + "recipes/random?apiKey=" + apiKey;

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .GET()
                .build();

        try {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            if (response.body() != null) {
                return new Recipe(response);
            } else {
                System.out.println("Error: Empty response from Spoonacular API");
                return null;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
