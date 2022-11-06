import java.io.*;
import java.util.ArrayList;
public class cricket {
    public static void main(String[] args) {
        ArrayList<String> list=new ArrayList<>();
        list.add("Rohit");
        list.add("Shikhar");
        list.add("Virat");
        list.add("Dhoni");
        System.out.println(list);
        list.remove("Dhoni");
        System.out.println(list);
        list.remove(2);
        System.out.println(list);
        System.out.println(list.contains("Virat"));
        list.add(2, "Rahul");
        System.out.println(list);;

    }
}
