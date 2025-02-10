const el = document.getElementById('ans')
const pel = document.createElement('p')

{
    // Block level scope
    var a = 10

    const c1 = pel
    c1.textContent = a
    el.appendChild(c1)

    x()
}

if(true){
    //Block level scope
    var variable = 'Inside the condition.'  
}

console.log(variable)


function x(){
    // Function level scope <- seperate execution context
    var xv = 5
    const c2 = document.createElement('p')
    c2.textContent = xv
    el.appendChild(c2)
}


// var a = 100
console.log(xv)
{console.log(a)}


/* ----------------------------
    -   Global Execution Context
    -   Function Execution Context (respected by var, let, const)
    -   Block Scope (respected by let, const)
--------------------------------------------*/

//  Google V8 - fastest JS engine


/*
        Hoisting :

        -   Memory is allocated to the functions and variables in phase one
                +   Variables are provided the value as "undefined" a special datatype in js to indicate that variable is not yet initialized.
                +   Functions are writen as it is
        -   In phase two that is code execution phase, code gets executed line by line
*/


/* 
        Lexical Environment :
        
        +   The scope provided by the parent is called as lexical environment fot that particular function
        +   The level at which the function is declared is called its lexical environment by the parent
*/



/*
	Function Currying:
function add(x){
    return function (y){
        console.log(x+y)
    }
}


let add2 = add.bind(this, 2)
add2(3)
*/



/*
        Clouser

        +   A function with its local environment and all its parent lexical environment forms an clouser for that particular function
        +   Every function has its own clouser formed when declared into a program.
        +   The function always retains its clouser, thus whether it gets returned somewhere it still get access to the variables and functions of its clouser. 
*/


/*
        add()   <------     Function is called and its execution context is pushed to call stack
        x()     <------     produce an error as x is initialized with value undefined


        Function Statement;
        -   function add(x, y){
                return (x + y)
            }

        -   When execution context is created here, function is writen as it is into a memory.
        

        Function Expression (FUNCTION IS PASSED AS VALUE):
        -   var x = function(x, y){
                        return (x, y)               <----   Anonymous Function Expression
                    }
                    
                    OR
            var x = function addNum(x, y){
                        return (x + y)              <----   Named Function Expression
                    }
            
        -   When execution context is created here, "var x" is firstly allocated memory with value as "undefined" 


        Anonymous Function:
        -   Function without a name is called as anonymous function
        -   function (x, y){ return (x+y)}


        First Class Function or First Class Citizens:
        -   Ability of a function to be passed as VALUE inside the function or to get returned by any function is known as First Class Function.


        Higher Order Functions:
        -   Function which takes another function as an argument or returns another function is called higher order function.
*/



/*
        Callback Functions:
        +   The functions which are passed as values to another function and gets called after execution of that function are known as CallBack Functions.
        +   CallBack Functions can be called Synchronously or Asynchronously.
        +   function x(y){
                console.log('Hey!, x function is executing')
                y();
            }

            x(
                function(){
                    console.log('Hey!, y function is executing')
                }
            );
*/



/*
        Event Listners:
        +   Event Listners are used to perform certain actions on occurence of certain events (events like "click", "hover", "focus", "blur", etc)
        +   Event Listner is added to a web-page to listen to events performed by the user  on that web page.
        +   It takes a CallBack function as an argument which is called when a specified event occurs.
        +   eg.
                const button = document.createElement('button')
                
                button.addEventListner('click', function(){console.log('Button is clicked!')})

        +   This event listner is get registered and will remain until we remove it explicitly. Thus it takes up and reserves a memory for it and 
            thus large number of call backs may lead to slow down the program.
*/


/*
        Web API's:
        -   Provided by the browsers to the JS engine
        -   API's like
            -   DOM API's
            -   fetch()
            -   setTimeout()
            -   console
*/


/* 
        Event Loop:
        +   The CallBack functions when need to be called are firstly pushed into the callback queue.
        +   The Event Loop is like a gatekeeper which checks whether the CallStack is empty or not, if it is empty, event loop pushes the callback function call 
            from the callback queue to callstack.  
        +   eg.
                const button = document.createElement('button')
                
                button.addEventListner('click', function(){console.log('Button is clicked!')})

                If the button is clicked multiple time then the callback function also have multiple calls which then need to be queued.

        |             |                                             CallBack Queue
        |             |               ---------                     ------------------------------------------------
        |             |   <---------  | Event |   ------>       
        |             |   <---------  | Loop  |   ------>
        |             |               ---------  
        |_____________|                                             ------------------------------------------------
           Call Stack

                                                                    Microtask queue
                                                                    --------------------------------------------------

                                                                        higher priority than callback queue
                                                                    --------------------------------------------------
*/



/*
        Promise:
        -   Helps to achieve asynchronous programming.



                                                        "I Promise a Result!"

                                            "Producing code" is code that can take some time

                                            "Consuming code" is code that must wait for the result

                                            A Promise is an Object that links Producing code and Consuming code

*/