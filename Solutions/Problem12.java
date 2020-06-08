package pruebaseuler;

/**
 * What is the value of the first triangle number to have over five hundred
 * divisors
 */
public class Problem12 {

    public static void main(String[] args) {

        long triangleNumber = 0;

        for (long i = 1; i < i + 1; i++) {
            long cont = 2;
            triangleNumber += i;

            for (long k = 2; k < triangleNumber / 2; k++) {
                if (triangleNumber % k == 0) {
                    cont++;
                }
            }

            if (cont > 500) {
                System.out.println(triangleNumber);
                break;
            }
        }
    }
}