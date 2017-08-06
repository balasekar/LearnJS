There are two types of languages - 1) compiled  2) dynamic (or) interpreted

Compiled languages:

It goes through three steps in compilation :

1) Tokenizing/Lexing: String of characters into tokens
eg: var a = 2; ====into====> var, a, =, 2, ;

> Tokenizing is stateful -  'a' should be considered a distinct token.
> Lexing is stateless - 'a' is just part of another token

2) Parsing: taking the array of tokens and turning it into a tree (Abstract Syntax Tree AST) of nested elements.
eg: var a = 2;
                    variableDeclaration
                          |    |
                          a    =
                               |
                               2

3) Code-Generation: Process of taking and AST and converting it into executable code (machine language).
eg:                     variableDeclaration    ===>  This will be converted into set of machine instructions to actually create a variable 'a' (reserving memory) and store a value into 'a'
                              |    |
                              a    =
                                   |
                                   2

Note: Java Script dosen't have the luxury of having plenty of time to optimize, because JS compilation happen in the run time.
To ensure fastest performance JS engines uses all kinds of tricks like JIT (lazy compile) and even hot re-compile.

The Cast:
1) Engine: responsible from start to end compilation and execution
2) Compiler: Engine's friend which handles parsing and code-generation
3) Scope: Another friend of Engine's; collect and maintain a look-up list of all declared variables

Interactions with Scope :
var a = 2;
* Encountering var a, compiler asks Scope to see if variable a already exists.
    if exists it ignores and moves on
    else asks the scope to declare a new variable 'a'
* Compiler will create code for the engine to execute a = 2
    engine will ask the scope if this particular var is accessible in this scope
    if so -- executes a = 2
    else throws error (or will search for nested scope for this var a)

> LHS -- look up for a variable
> RHS -- retrive variable's value

Interaction between Engine and Scope while executing:

        function foo(a) {
            console.log( a ); // 2
        }

        foo( 2 );

* Engine - scope -> RHS for foo
* scope - Engine -> console.log( a );
* Engine - scope -> LHS for a
* scope - Engine -> formal parameter of foo
* Engine -> a = 2
* Engine - scope -> RHS for console
* scope - Engine -> SOP
* Engine - scope -> RHS for log
* scope - Engine -> LOG
* Engine - scope -> RHS for a
* scope - Engine -> 2
* Engine -> Console.log(2)
