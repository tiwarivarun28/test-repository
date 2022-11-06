import java.io.*;
public class swapcase {
    public static void main(String[] args) 
  {
    char[] swap = new char[]{'a', 'R', 'u','n'};
	    char ch;
	    for(int i=0; i<swap.length;i++)
        {
            ch=swap[i];
	    if (Character.isUpperCase(ch))
	    {
	      System.out.print(Character.toLowerCase(ch)+" ");
	    }
	    else
	    {
            System.out.print(Character.toUpperCase(ch)+" ");
	    }
    }
  }
}
