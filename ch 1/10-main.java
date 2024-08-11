public class Main {
    public static void main(String[] args) {
        // 1 kilometer ≈ 0.621371 miles
        double l = 14 * 0.621371;
        double t = ((45.0*60.0) + 30.0)/3600.0;
        System.out.println("average speed = " + l/t);
    }
}