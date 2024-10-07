import java.util.*;

public class Main5 {
    public static void main(String[] args) {
        /**
         * (Financial application: calculate tips) Write a program that reads the subtotal
            and the gratuity rate, then computes the gratuity and total. For example, if the
            user enters 10 for subtotal and 15% for gratuity rate, the program displays $1.5
            as gratuity and $11.5 as total. 
            Here is a sample run:
            Enter the subtotal and a gratuity rate: 10 15
            The gratuity is $1.5 and total is $11.5
         */
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the subtotal and a gratuity rate: ");
        double total = input.nextDouble();
        int rate = input.nextInt();
        System.out.printf("The gratuity is $%.1f and total is $%.1f\n", (rate*total/100), (rate*total/100) + total);
        input.close();
    }
}
