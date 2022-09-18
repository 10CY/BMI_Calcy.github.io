function GetBmiValue(){
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
   
    if(weight=="" && height==""){
        alert('Please enter your weight and height');
    }
        height=height*12;
        height=height*.025;    //height in meter
    
        
        var newbmivalue= weight/Math.pow(height,2);
        var roundBmiValue=Math.round(newbmivalue);
        // if(!isNan(document.getElementsByClassName('input-box').value)){
            
        // }

    
            document.getElementById('bmivalue').value=roundBmiValue;
        
  
    


}