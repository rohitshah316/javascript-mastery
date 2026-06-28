const readline=require("readline");

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function startCalculator(){
    rl.question("Enter first number: ", function (a) {
    rl.question("Enter second number:",function (b){
        rl.question("enter operation(+,-,*,/):",function (op){

            let num1=Number(a);
            let num2=Number(b);
            let result;

            if(op==="+"){
                result=num1+num2;
            }else if(op==="-"){
                result=num1-num2;
            }else if(op==="*"){
                result=num1*num2;
            }else if(op==="/"){
                result=num1/num2;
            }else{
                result="invalid operation";
            }

            console.log("Result:",result);
           

            rl.question("Do you want to continue?(y/n):",function(answer){
                if(answer.toLowerCase()==="y"){
                    startCalculator();
                }else{
                    rl.close();
                }
            })
        })
    })

    
});
}


startCalculator();