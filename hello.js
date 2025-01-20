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


//--------------------  Function Currying
/*
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


        First Class Function or First Class Functions:
        -   Ability of a function to be passed as VALUE inside the function or to get returned by any function is known as First Class Function.
*/