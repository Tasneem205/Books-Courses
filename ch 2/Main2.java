import java.util.*;
public class Main2 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the radius and length of a cylinder: ");
        double r = input.nextDouble();
        double len = input.nextDouble();
        double area = r * r * Math.PI;
        System.out.printf("The area is: %.4f\n", area);
        double vol = area * len;
        System.out.printf("The volume is %.4f\n" , vol);
        input.close();
    }
}
