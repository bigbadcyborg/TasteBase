package tastebase.obj;

public class pantry {
    private int pantryID;
    private String pantryName;
    
    public pantry(int pantryID, String pantryName) {
        this.pantryID = pantryID;
        this.pantryName = pantryName;
    }

    public int getPantryID() {
        return pantryID;
    }
    public String getPantryName() {
        return pantryName;
    }

    public void setPantryID(int newID) {
        this.pantryID = newID;
    }
    public void setName(String newName) {
        this.pantryName = newName;
    }
}
