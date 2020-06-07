package pruebaseuler;

import java.math.BigInteger;

/**
 * What is the sum of the digits of the number 2^1000
 */
public class Problem16 {

    public static void main(String[] args) {
        BigInteger result = new BigInteger("2");
        BigInteger sum = BigInteger.ZERO;
        result = result.pow(1000);

        String resultString[] = result.toString().split("");

        for (String string : resultString) {
            sum = sum.add(new BigInteger(string));
        }

        System.out.println(sum);
    }
}