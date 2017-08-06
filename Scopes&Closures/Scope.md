Scope
-----
Scope is a set of rules that determines where and how a variable can
be looked-up. This look up can be for LHS or RHS.

 > LHS -- look up for a variable

 > RHS -- Retrive variable's value

LHS references results from two operations :
* assignment operations (a = 2)
* function parameter (foo(a){}; foo(2);)

Execution
---------
Java script engine first compiles the code and then executes, while
compiling these variables are declared into the scope :
var a = 2;

* var a is compiled and variable a is stored in the scope
* Then a = 2; to look up the variable (LHS reference) and assign it
if found.

Predominant models of scopes
----------------------------
* Lexical scope - where scope is area of source code (JS and most languages)
* Dynamic scope - where scope is time period of execution (bash and perl)

Lexical Scope
-------------
It is the scope that is defined during the lexing/tokenizing time.So it
dosen't vary by time.

> Scope look-ups stops once it finds the first match - shadowing

> Global variable are automatically variable of the global object(window)
so 'window.a' overcomes shadowing by inner variables

> No matter where the function is invoked or how , the scope is defined
on only where the function is declared

Cheating Lexical
----------------
- eval(..):
 function actually takes string as a argument, and treats the
 contents of the string as if it had actually been authored code at that
 point in the program like programmatically generating code inside your code.

 > we have other functions like setTimeout(..) and setInterval(..) which does the same eval for the first argument

- new function(args..,code) :
 function actually generated a function dynamically
 and are slightly better than eval.

- with(obj) : is a shorthand to for making multiple object references