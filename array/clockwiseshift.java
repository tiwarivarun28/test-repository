package array;
import java.util.ArrayList;
import java.util.Scanner;
public class clockwiseshift {
    public static void main(String args[])
    {
        int n;
        System.out.println("Enter the size of sqaure matrix ");
        Scanner sc=new Scanner(System.in);
        n=sc.nextInt();
        
        int[][] arr=new int[n][n];
        System.out.println("Enter the matrix");
        for(int i=0;i<n;i++)
        {
            for(int j=0;j<n;j++)
            {
                arr[i][j]=sc.nextInt();
            }


        }
        for(int i=0;i<n;i++)
        {
            for(int j=0;j<n;j++)
            {
                System.out.print(arr[i][j]+" ");
            }
            System.out.println();
        }
        int top=0,left=0,bottom=n-1,right=n-1;
        for(int i=0;i<n/2;i++)
        {
          
           int temp=arr[top+1][left];
           for(int g=top;g<=right;g++)
           {
            int temp1=arr[top][g];    
            arr[top][g]=temp;         
            temp=temp1;               
           }
           top++;
           for(int j=top;j<=bottom;j++)
           {
            int temp1=arr[j][right];
            arr[j][right]=temp;
            temp=temp1;
           }
           right--;
           for(int k=right;k>=left;k--)
           {
            int temp1=arr[bottom][k];
            arr[bottom][k]=temp;
            temp=temp1;
           }
           bottom--;
           for(int l=bottom;l>=top;l--)
           {
            int temp1=arr[l][left];
            arr[l][left]=temp;
            temp=temp1;
           }
           left++;

        }
        for(int i=0;i<n;i++)
        {
            for(int j=0;j<n;j++)
            {
                System.out.print(arr[i][j]+" ");
            }
            System.out.println();
        }

    }
}

