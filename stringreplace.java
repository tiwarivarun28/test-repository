import java.io.*;
public class stringreplace {
    public static void main(String args[])
    {

    
    StringBuilder sb = new StringBuilder("AbC");
//Get Char
sb.setCharAt(0,'a');
System.out.println(sb);
sb.setCharAt(1,'B');
System.out.println(sb);
sb.setCharAt(2,'Y');
System.out.println(sb);
sb.insert(0,'Z');
System.out.println(sb);
sb.append('A');
System.out.println(sb);
sb.delete(2, 3);
System.out.println(sb);

    }
}
