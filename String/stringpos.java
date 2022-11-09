import java.io.*;
public class stringpos {
    public static void main(String args[])
    {
        StringBuilder sb=new StringBuilder("abc");
        sb.append("a");
        System.out.println(sb);
        sb.insert(0,"b");
        System.out.println(sb);
        sb.insert(2, "c");
        System.out.println(sb);
        sb.delete(1, 2);
        System.out.println(sb);
        sb.setCharAt(1, 'z');
        System.out.println(sb);

    }
}
