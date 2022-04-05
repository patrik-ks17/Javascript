napnevek = new Array("hétfő","kedd","szerda","csütörtök","péntek","szombat","vasárnap")

function ora(){
    most = new Date()

    ev   = most.getFullYear()
    ho   = most.getMonth()+1		
    nap  = most.getDate()
    ssz  = most.getDay()

    hrs  = most.getHours()
    min  = most.getMinutes()
    sec  = most.getSeconds()


    if( ho  < 10 )   ho  = "0" + ho
    if( nap < 10 )   nap = "0" + nap
    if( hrs < 10 )   hrs = "0" + hrs
    if( min < 10 )   min = "0" + min
    if( sec < 10 )   sec = "0" + sec


    ido.innerHTML = hrs + ":" + min + ":" + sec
    datum.innerHTML = ev  + "." + ho  + "." + nap + "<br>" + napnevek[ssz-1]
    
}
setInterval('ora()',1000)
ora()

