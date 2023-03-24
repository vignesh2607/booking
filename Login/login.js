function login(){
    let db={0:['vicky@','Faster123+++'],1:['sai30','vickysai'],2:['thammu','achuboy']};
    let user=document.getElementById("user").value;
    let pass=document.getElementById("pswd").value;
    let flag=false;
    for (let i=0;i<Object.keys(db).length;i++)
    {
        if((db[i][0]==user)&&(db[i][1]==pass))
        {
            flag=true;
        }
    }
    if(flag==true)
    {
        window.location.href="";
    }
    else
    {
        alert("invalid username and incorrect password...try again")
    }
}
