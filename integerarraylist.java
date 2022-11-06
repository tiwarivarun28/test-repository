import java.io.*;
import java.util.*;
public class integerarraylist {
    public static void main(String[] args) {
      Scanner sc=new Scanner(System.in)
      int n=sc.nextInt();
      sc.nextLine();
      String s=sc.nextLine();
      int res="";
      String str[]=s.split("\\$");
      for(int i=0;i<str.length;i++)
      {
        if(i%2!=0)
        {
            res=res+reverse(str[i]);
        }
        else{
            res=res+str[i];
        }
      }
      System.out.print(res);
    }
public static String reverse(String rev)
{
    int len=rev.length();
    String a="";
    for(int i=len-1;i>=0;i++)
    {
        a=a+rev.charAt(i);
    }
   return a;

}
}


