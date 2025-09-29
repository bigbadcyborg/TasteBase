package tastebase.users;

import tastebase.obj.Recipe;
import java.util.HashSet;

public class User {

    String name;
    HashSet<Recipe> favorites;

    public User(String name) {
        this.name = name;
        this.favorites = new HashSet<>();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void addFavorite(Recipe favorite) {
        this.favorites.add(favorite);
    }

    public HashSet<Recipe> getFavorites() {
        return favorites;
    }
}
