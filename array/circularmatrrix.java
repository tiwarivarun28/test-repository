package array;

import java.util.ArrayList;
import java.util.Scanner;
public class circularmatrrix {
    /**
     * @param args
     */
    public static void main(String args[])
    {
        int row,col;
        System.out.println("Enter the rows and column ");
        Scanner sc=new Scanner(System.in);
        row=sc.nextInt();
        col=sc.nextInt();
        int[][] arr=new int[row][col];
        System.out.println("Enter the matrix");
        for(int i=0;i<row;i++)
        {
            for(int j=0;j<col;j++)
            {
                arr[i][j]=sc.nextInt();
            }


        }
        for(int i=0;i<row;i++)
        {
            for(int j=0;j<col;j++)
            {
                System.out.print(arr[i][j]+" ");
            }
            System.out.println();


        }
     // perform spiral logic
     int top=0,bottom=row-1,left=0,right=col-1;
     ArrayList<Integer> list=new ArrayList<>();
     
     int oldsize=row*col;
     while(list.size() < oldsize )
     {
        for(int i=left;i<=right && list.size()<oldsize ;i++)
        {
            list.add(arr[top][i]);

        }
       
        for(int i=top+1;i<bottom && list.size()<oldsize ;i++)
        {
            list.add(arr[i][right]);

        }
        
        for(int i=right;i>=left && list.size()<oldsize ;i--)
        {
           list.add(arr[bottom][i]);

        }
        
        for(int i=bottom-1;i>=top+1 && list.size()<oldsize ;i--)
        {
            list.add(arr[i][left]);

        }
        left++;
        top++;
        bottom--;
        right--;

     }

    for (int i=0;i<list.size();i++)
    {
       System.out.print( list.get(i)+" ");
    }


        


    }
    
}
