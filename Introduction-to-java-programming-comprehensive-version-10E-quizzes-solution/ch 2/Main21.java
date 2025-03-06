import java.util.*;

public class Main21 {
    public static void main(String[] args) {
        /**
         * Write a program that reads in investment amount, 
         * annual interest rate, and number of years, and displays
         * the future investment value using the following formula:
         * futureInvestmentValue = investmentAmount * (1 + monthlyInterestRate)^(numberOfYears*12)
         * For example, if you enter amount 1000, annual interest rate 3.25%, and number
           of years 1, the future investment value is 1032.98.
         */
        Scanner input = new Scanner(System.in);
        System.out.print("Enter investment amount: ");
        double base = input.nextDouble();
        System.out.print("Enter annual interest rate in percentage: ");
        double percentage = input.nextDouble()/100;
        System.out.print("Enter number of years: ");
        double years = input.nextDouble();
        double val = base * Math.pow((1.0 + percentage/12), (years*12));
        System.out.println("Accumulated value is $" + val);
        input.close();
    }
}
