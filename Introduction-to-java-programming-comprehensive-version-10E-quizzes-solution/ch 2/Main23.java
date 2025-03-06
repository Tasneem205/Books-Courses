import java.util.*;

public class Main23 {
    public static void main(String[] args) {
        /**
         * (Cost of driving) Write a program that prompts the user to enter the distance to
         * drive, the fuel efficiency of the car in miles per gallon, and the price per gallon,
         * and displays the cost of the trip.
         */
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the driving distance: ");
        double dis = input.nextDouble();
        System.out.print("Enter miles per gallon: ");
        double milesPerGallon = input.nextDouble();
        System.out.print("Enter price per gallon: ");
        double price = input.nextDouble();
        System.out.printf("The cost of driving is $%.2f", ((dis/milesPerGallon) * price));
        input.close();
    }
}
