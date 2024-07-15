

export default function ValidateOrders(data,setValid,setError){
    
    let formVar={
        userName:'',
        orderItem:'',
        orderQuantity:'',
        orderPrice:'',
        orderedOn:'',
        totalOrder:'',
        totalPrice:0,
    }
    let newFormError={...formVar}
    let newFormValid={...formVar}
            if(data.userName.length<3){
                
                newFormError.userName='Name should be atleast of 3 charactes';
                newFormValid.userName=false;
            }else{
                newFormError.userName='';
                newFormValid.userName=true;
            }
           
            if((data.totalOrder.length<=0 || data.totalPrice===0)){
                    newFormError.totalOrder='Atleast 1 item should be selected to enable Order';
                    newFormValid.totalOrder=false;
                }else{
                    newFormError.totalOrder='';
                    newFormValid.totalOrder=true;
                }

            if( (data.orderItem==='' || data.orderQuantity==='')){
                    newFormError.orderItem='Please select a product';
                    newFormValid.orderItem=false;
                }else{
                    newFormError.orderItem='';
                    newFormValid.orderItem=true;
                }

            if(data.orderedOn===''){
                newFormError.orderedOn='Please select the date';
                newFormValid.orderedOn=false;
                }else{
                    newFormError.orderedOn='';
                    newFormValid.orderedOn=true;
                }


    setValid(newFormValid);
    setError(newFormError);

}