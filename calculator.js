
        let calculator = document.getElementById("calculator");

        function display(num){
            calculator.value += num;
        }
        function calculate(){
            try{
                calculator.value = eval(calculator.value);
            }
            catch(err)
            {
            alert("Invalid")
            }
        }
        function Clear(){
            calculator.value = "";
        }
        function del(){
            calculator.value = calculator.value.slice(0,-1);
        }
        function sin(){
            calculator.value=Math.sin(calculator.value)
        }
        function cos(){
            calculator.value=Math.cos(calculator.value)
        }
        function tan(){
            calculator.value=Math.tan(calculator.value)
        }
        function sqr(){
            calculator.value=Math.sqr(calculator.value,2)
        }
        function sqrt(){
            calculator.value=Math.sqrt(calculator.value,2)
        }
        function pow(){
            calculator.value=Math.pow(calculator.value,2)
        }
        function pi(){
            calculator.value=3.1415926;
        }
        function log(){
            calculator.value=Math.log(calculator.value)
        }