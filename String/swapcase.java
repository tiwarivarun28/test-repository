import java.io.*;
import java.util.*;
class swapcase {
    public static void main(String[] args) 
  {
	Scanner sc=new Scanner(System.in);
	int N=sc.nextInt();
	sc.nextLine();
	String a=sc.nextLine();
	int c=0;
	for(int i=0;i<N;i++)
	{
		char ch=a.charAt(i);
		if(ch=='a'){
			c++;
		}
	}
	int c1=N-c;
	System.out.print(Math.min(c1,c));

    
    }
  }
