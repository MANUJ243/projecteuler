package projectaulerpruebas;

import java.math.BigInteger;

/**
 * Find the sum of the digits in the number 100!
 */
public class Problem20 {

    public static void main(String[] args) {
        BigInteger result = new BigInteger("1");
        BigInteger sum = BigInteger.ZERO;

        for (int i = 1; i <= 100; i++) {
            result = result.multiply(new BigInteger(i + ""));
        }

        String resultString[] = result.toString().split("");

        for (String string : resultString) {
            sum = sum.add(new BigInteger(string));
        }

        System.out.println(sum);
    }
}