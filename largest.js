function largest()
{
    let n1 = parseInt(document.querySelector("#num1").value);
    let n2 = parseInt(document.querySelector("#num2").value);
    let n3 = parseInt(document.querySelector("#num3").value);
    let largest=n1;
    if(n2>largest)
    {
        largest=n2
    }
    else if(n3>largest){
        largest=n3;
    }
    
    document.write(largest);
}
