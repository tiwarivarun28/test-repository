
    import java.io.*;
import java.util.*;
class Stack 
{
    public static void main(String args[])
    {
        Scanner c=new Scanner(System.in);
        int n=c.nextInt();
        c.nextLine();
        String s=c.nextLine();
       
        for(int l=0;l<n;l++)
        { 
            Stack<Character> st=new Stack<>();
           int len=s.length();
        for(int i=0;i<len;i++)
        {
            char ch=s.charAt(i);
            if(ch=='('||ch=='{'||ch=='[')
            {
                st.push(ch);
            }
            
            else if(ch==')' && st.peek=='(')
            {
                st.pop();
            }
            else if(ch==']' && st.peek=='[')
            {
                st.pop();
            }
            else if(ch=='}' && st.peek=='{')
            {
                st.pop();
            }
        }
        if(st.isEmpty())
        {
            System.out.println("balanced");
        }
        else
        {
            System.out.println("not balanced"); 
        }
        }
    }
}

