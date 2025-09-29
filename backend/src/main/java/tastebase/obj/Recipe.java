package tastebase.obj;

public class Recipe {
    private final int RecipeID;
    private final String RecipeName;

    public Recipe(int RecipeID, String RecipeName) {
        this.RecipeID = RecipeID;
        this.RecipeName = RecipeName;
    }

    public int getRecipeID() {
        return RecipeID;
    }
    public String getRecipeName() {
        return RecipeName;
    }
}
