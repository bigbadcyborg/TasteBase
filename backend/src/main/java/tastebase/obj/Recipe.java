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

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;

        Recipe other = (Recipe) obj;
        return this.getRecipeID() == other.getRecipeID();
    }

    @Override
    public int hashCode() {
        return Integer.hashCode(this.RecipeID);
    }
}
