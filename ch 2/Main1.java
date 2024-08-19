import java.util.*;
public class Main1{
    public static void main(String[] args) {
        // fahrenheit = (9 / 5) * celsius + 32
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a degree in Celsius: ");
        double cel = input.nextDouble();
        double fahr = (9.0 / 5.0) * cel + 32;
        System.out.println(cel + " Celsius is " + fahr + " Fahrenheit");
        input.close();
    }
}