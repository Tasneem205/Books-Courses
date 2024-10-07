import java.util.*;

public class Main7 {
    public static void main(String[] args) {
        /**
         * Write a program that prompts the user to enter the
            minutes (e.g., 1 billion), and displays the number of years and days for the minutes.
            For simplicity, assume a year has 365 days.
         */
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the number of minutes: ");
        int minutes = input.nextInt();
        int toDays = minutes/(60*24);
        int years = toDays / 365;
        int days = toDays % 365;
        System.out.printf("%d minutes is approximately %d years and %d days", minutes, years, days);
        input.close();
    }
}
