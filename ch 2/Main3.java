import java.util.Scanner;

public class Main3 {
    public static void main(String[] args) {
        // One foot is 0.305 meter
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a value for feet: ");
        double feet = input.nextDouble();
        System.out.printf("%.2f feet is %.4f\n", feet, feet*0.305);
        input.close();
    }
}
