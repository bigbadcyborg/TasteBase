package tastebase.api;

import org.springframework.web.bind.annotation.*;
import tastebase.App;

@RestController
@RequestMapping("/api")
public class RestAPIController {

    @GetMapping("/test")
    public String test() {
        return "test";
    }

    @GetMapping("/recipes")
    public String getRecipes() {
        return "Use /recipes/random for a random recipe or /recipes/search?ingredients=ing1,ing2 for searching by ingredients, or /recipes/{id} for a specific recipe by ID.";
    }

    @GetMapping("/recipes/random")
    public String getRandomRecipe() {
        return App.getSpoonacularService().getRandomRecipe().toString();
    }

    @GetMapping("/recipes/search")
    public String searchRecipes(@RequestParam(required = false) String ingredients) {
        if (ingredients == null || ingredients.isEmpty()) {
            return "No ingredients provided, provide as comma-separated list. E.g., ?ingredients=apples,flour,sugar";
        } else {
            return App.getSpoonacularService().getRecipes(ingredients).toString();
        }
    }

    @GetMapping("/recipes/{id}")
    public String getRecipeById(@PathVariable int id) {
        return App.getSpoonacularService().getRecipe(id).toString();
    }

}
