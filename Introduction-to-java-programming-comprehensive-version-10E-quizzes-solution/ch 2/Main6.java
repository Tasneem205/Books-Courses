import java.util.*;

public class Main6 {
    public static void main(String[] args) {
        /**
         * Write a program that reads an integer between 0 and
         * 1000 and adds all the digits in the integer. For example, if an integer is 932, the
         * sum of all its digits is 14.
         * Hint: Use the % operator to extract digits, and use the / operator to remove the
         * extracted digit. For instance, 932 % 10 = 2 and 932 / 10 = 93.
         * Here is a sample run:
         */
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a number between 0 and 1000: ");
        int num = input.nextInt();
        int ans = num%10;
        num /= 10;
        ans += num%10;
        num /= 10;
        ans += num%10;
        System.err.printf("The sum of the digits is %d\n", ans);
        input.close();
    }
}
