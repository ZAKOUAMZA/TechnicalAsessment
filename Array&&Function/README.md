# Part III: Functions

*Note: Before getting started on these exercises, please be certain that you've read through the root [README.md](../README.md) file in this repository.*

## Exercises

### Basic Requirements

1. In your console, copy the following function and verify
   that the following invocations match your expectations:

   ```js
   function square(num){
      return num * num;
   }

   square(10) + 2;
   square(100) + square(77);
   square(8 / 2)
   square(2 + 17);
   square(square(15));
   ```

2. Write a sentence in plain English describing how `square(square(15))` is
   evaluated.

   //square(square(15)) est évaluer tout d'abord la fonction calclule square(15)=15*15=225; ensuite, il calcul square(225)=225*225=20625; et il sort.

   // square(square(15)) is first evaluate the function calclule square(15)=15*15=225; Next, it calculates Square(225)=225*225=20625; and it goes out.

3. Rename `square`'s `num` parameter in your above code to `monkey`, and
   rename the uses of that parameter in the body to `monkey` as well. Will the
   function `square` still work? Why or why not?
```js

function square(monkey){
      return monkey * monkey;
   }

   square(10) + 2;
   square(100) + square(77);
   square(8 / 2)
   square(2 + 17);
   square(square(15));

```

// En effet le code fonctionnera toujour après la modification du paramettre num par monkey car les paramettre d'une fonction n'affecte pas le code intérieur d'une fonction

// Indeed the code will always work after the modification of the num parameter by monkey because the paramis of a function does not affect the inner code of a function

4. What is wrong with the following definitions of `square`? Write a sentence or
   two describing the issue(s); then, try copying the erroneous examples into a
   console one-at-a-time and observing the error(s) generated (you may have to
   attempt to invoke the functions to see the error). What errors are produced
   (if any) for each erroneous version? Do the errors make sense?

   ```js
   function square(monkey) {
     return x * x;
   }

   function square(5) {
     return 5 * 5;
   }

   function square("x") {
     return "x" * "x";
   }
   ```
// première  fonction elle générera une erreur lors de l'appelle de la fonction car la fonction a été bien creer mais la variable "x" n'as pas été definis

// First function it will generate an error when calling the function because the function has been well created but the variable "x" has not been defined

// la deuxième fonction générera une erreur a l'appelle de la fonction car dans une fonction les paramettre doivent être des identifiant valide et non des valeurs

//The second function will generate an error at the call of the function because in a function parameter them must be valid identifiers and not values

//la troixième fonction est fausse aussi car le paramèttre est une chaîne de caractère ce qui n'est pas du tout logique

//The third function is also false because the parameter is a character string which is not at all logical


5. Fix the invalid syntax in the following functions (you can copy and paste these
   invalid definitions into your console and then edit them there):

   ```js
   func square1(x {
     return x * x;
   }

   functionsquare2 x){
     return x * x;
   }

   function (x) square3 {
     return x * x;

// correction
 ```js

     func square1(x) {
     return x * x;
   }

   function square2 (x)
     return x * x;
   }

   function square3 (x) {
     return x * x;
   }
   ```

6. The following functions exhibit poor style -- fix these issues using the
   original version of `square` as a reference.

   ```js
   function square(x){return x*x;}

   function square (x) { return x *x;
   }

   function square(x){
   return x * x;
   }

   /*version correcte et plus intéressante*/

   function square(x){
    return x*x;
    }

   function square(x){
     return x *x;
   }

   function square(x){
   return x * x;
   }

   ```

7. Complete the function `cube` that returns the cube of x:

  ```js
  function cube(x){
    return x*x*x;
  }
  ```

8. Complete the function `fullName` that should take two parameters, `firstName`
   and `lastName`, and returns the `firstName` and `lastName` concatenated
   together with a space in between.

  ```js
  // don't forget the parameters!
  function fullName(str1,str2){
    return str1.concat(str2);
  }
  fullName("John ", "Doe") // => "John Doe" en mettant un petit espace a la fin de john.
  ```

9. Write a function `average` that takes two numbers as input (parameters), and
   returns the average of those numbers.
 ```js
   function average(nb1,nb2){
    let x=nb1+nb2;
    return x/2;
   }
```
10. Write a function `greeter` that takes a name as an argument and *greets*
    that name by returning something along the lines of `"Hello, <name>!"`

    ```js
   function greeter(greets){
    return "hello"+" "+ greets +"!";
   }



11. Using the document found at <a href="http://www.gbcnv.edu/documents/ASC/docs/00000005.pdf" target="_blank">this link</a>, translate the first page of geometric
    formulas into JavaScript functions.

    As an example, a function to compute the perimeter of a rectangle might look
    like this:

    ```js
    function perimeterRect(l, w) {
      return 2 * (l + w);
    }
    ```

    **NOTE:** JavaScript provides some nifty mathematical functions and
    constants built into the language that you'll need for this exercise. The
    two that we'll be making use of are:

    ```js
    Math.PI; // => 3.141592653589793
    Math.sqrt(256); // => 16
    ```

    To test your answers, you'll need to:

    1. Code your function in the console in the way that you think it will work
```js
    function perimeterRect(l, w) {
  return 2 * (l + w);
}
```

    2. Call the function with arguments in the console to see the result, e.g.
      `perimeterRect(2, 6)`.

```js
    function perimeterRect(l, w) {
  return 2 * (l + w);
}

```

    3. Eventually, you may want to verify that the output is correct. Google is a
       great tool for this:

       ```js
    function circumferenceCircle(r) {
  return 2 * Math.PI * r;
}

```


![google geometry answer](google-geometry-answer.gif)

### More Practice

Translate the rest of the geometric formulas found <a href="http://www.gbcnv.edu/documents/ASC/docs/00000005.pdf" target="_blank">here</a> into JavaScript functions.

### Advanced (extra practice)

1. Compound interest can be calculated with the formula:

    ![future value](future-value.png)

    - *F*: future value
    - *P*: present value
    - *i*: nominal interest rate
    - *n*: compounding frequency
    - *t*: time

  Write a function `futureValue` that can be used to calculate the *future value*
  of a quantity of money using compound interest.

  Use the function to calculate what the future value of $1700 (*P* = 1700)
  deposited in a bank that pays an annual interest rate of 4.7% (*i* = 0.047),
  compounded quarterly (*n* = 4) after 6 years (*t* = 6) (you can use `Math.pow`
  to do exponentiation).
      

       ```js

  function valeurFuture(P, i, n, t){
    return P * Math.pow(1 + i/n, n*t);
    
    }
  // Pour calculer la valeur future :
  //valeurFuture(1700, 0.047, 4, 6);



2. Write a `power` function that accepts the parameters `base` and `exponent`
   and returns the result. Replace `square` and `cube` with the `power` function
   you just wrote. Do not use `Math.pow`.

       ```js

   function power(base, exposant){
    let resultat = 1;
  for (let i = 0; i < exposant; i++) {
    resultat *= base;
  }
  return resultat;

   }
  


3. Write your own square-root function called `sqrt` that accepts a `number`
   parameter and returns an approximate square root. Square-root approximations
   make use of averages. Be sure to use the `average` function you previously
   wrote. The first version of your square root function should perform no more
   than 3 successive averages.

       ```js
      function moyenne(a, b) {
  return (a + b) / 2;
  }
      function sqrt(nombre) {
       let approx = nombre / 2;
      for (let i = 0; i < 3; i++) {
       approx = moyenne(approx, nombre / approx);
     }
      return approx;
     }
