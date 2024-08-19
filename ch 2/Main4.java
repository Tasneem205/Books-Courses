import java.util.*;

public class Main4 {
    public static void main(String[] args) {
        /**
         * (Convert pounds into kilograms) Write a program that converts pounds into kilograms.
         * The program prompts the user to enter a number in pounds, converts it
         * to kilograms, and displays the result. One pound is 0.454 kilograms. Here is a
         * sample run:
         * Enter a number in pounds: 55.5
         * 55.5 pounds is 25.197 kilograms
         */
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a number in pounds: ");
        double num = input.nextDouble();
        System.out.printf("%.2f pounds is %.3f kilograms \n", num, num * 0.454);
        input.close();
    }
}
