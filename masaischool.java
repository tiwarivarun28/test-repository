import java.io.*;
import java.util.*;
public class masaischool {
    public static void main(String[] args) {
        ArrayList<String> list=new ArrayList<>();
        list.add("Aman");
        list.add("Shubendu");
        list.add("Shivaraj");
        System.out.println(list);
        System.out.println(list.contains("Ankush"));
        list.add("Ankush");
        list.add("Vishal");
        System.out.println(list);
        System.out.println(list.contains("Ankush"));
        list.set(0,"Nrupul" );
        System.out.println(list);
        list.remove("Ankush");
        System.out.println(list);
    }
}
