package pruebaseuler;

/**
 * Find the sum of all the primes below two million (2000000)
 */
public class Problem10 {

    public static void main(String[] args) {

        long result = 2; //start with the first prime
                         //i use long for the size that can reach
        for (long i = 3; i < 2000000; i += 2) { //the other prime numbers cant no be even number
            boolean prime = true;

            for (long j = 3; j <= i / 2; j += 2) { //the rest of the numbers can not be divided by a even number
                if (i % j == 0) {                  //a number cant be divided by a number higher than is half
                    prime = false;
                    break;
                }
            }

            if (prime) {
                result += i;
            }
        }
        System.out.println(result);
    }
}