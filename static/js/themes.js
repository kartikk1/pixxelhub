// Themes 

// Light Blue 
$('#col1').click(()=>{
    var elem = document.getElementsByClassName('themes');
    var elem2 = document.querySelectorAll('hr');
    var elem3 = document.getElementsByClassName('themes2');
    var elem4 = document.getElementsByClassName('themes3');
    var elem5 = document.getElementsByClassName('themes4');

    for(var i=0; i<elem.length ;i++){
      elem[i].style.backgroundColor = "#009AC9";
    }
    for(var i=0; i<elem2.length ;i++){
      elem2[i].style.color = "#009AC9";
    }
    for(var i=0; i<elem3.length ;i++){
      elem3[i].style.color = "#009AC9";
    }
    for(var i=0; i<elem4.length ;i++){
      elem4[i].style.borderColor = "#009AC9";
    }
    for(var i=0; i<elem5.length ;i++){
      elem5[i].style.boxShadow = "0 0 10px 2px #009AC9";
    }
    document.getElementById('contform').style.boxShadow = "0px 2px 10px #009AC9";
    document.getElementById('homesection').style.backgroundImage = "url('static/img/bg/bluebg.jpg')";
    document.getElementById("boi").src = "static/img/bg/blueboi.svg";
    document.getElementById('menu-btn').src = "static/img/bg/menublue.png";
})
// Light Red 
$('#col2').click(()=>{
    var elem = document.getElementsByClassName('themes');
    var elem2 = document.querySelectorAll('hr');
    var elem3 = document.getElementsByClassName('themes2');
    var elem4 = document.getElementsByClassName('themes3');
    var elem5 = document.getElementsByClassName('themes4');
    for(var i=0; i<elem.length ;i++){
      elem[i].style.backgroundColor = "#ff697b";
    }
    for(var i=0; i<elem2.length ;i++){
      elem2[i].style.color = "#ff697b";
    }
    for(var i=0; i<elem3.length ;i++){
      elem3[i].style.color = "#ff697b";
    }
    for(var i=0; i<elem4.length ;i++){
      elem4[i].style.borderColor = "#ff697b";
    }
    for(var i=0; i<elem5.length ;i++){
      elem5[i].style.boxShadow = "0 0 10px 2px #ff697b";
    }
    document.getElementById('contform').style.boxShadow = "0px 2px 10px #ff697b";
    document.getElementById('homesection').style.backgroundImage = "url('static/img/bg/redbg.jpg')";
    document.getElementById("boi").src = "static/img/bg/redboi.svg";
    document.getElementById('menu-btn').src = "static/img/bg/menured.png";
})
// Grey 
$('#col3').click(()=>{
    var elem = document.getElementsByClassName('themes');
    var elem2 = document.querySelectorAll('hr');
    var elem3 = document.getElementsByClassName('themes2');
    var elem4 = document.getElementsByClassName('themes3');
    var elem5 = document.getElementsByClassName('themes4');
    for(var i=0; i<elem.length ;i++){
      elem[i].style.backgroundColor = "rgb(131,131,131)  ";
    }
    for(var i=0; i<elem2.length ;i++){
      elem2[i].style.color = "rgb(131,131,131)  ";
    }
    for(var i=0; i<elem3.length ;i++){
      elem3[i].style.color = "rgb(131,131,131)  ";
    }
    for(var i=0; i<elem4.length ;i++){
      elem4[i].style.borderColor = "rgb(131,131,131)  ";
    }
    for(var i=0; i<elem5.length ;i++){
      elem5[i].style.boxShadow = "0 0 10px 2px rgb(131,131,131)  ";
    }
    document.getElementById('contform').style.boxShadow = "0px 2px 10px rgb(131,131,131)  ";
    document.getElementById('homesection').style.backgroundImage = "url('static/img/bg/greybg.jpg')";
    document.getElementById("boi").src = "static/img/bg/greyboi.svg";
    document.getElementById('menu-btn').src = "static/img/bg/menugrey.png";
})

// Yellow 
$('#col4').click(()=>{
    var elem = document.getElementsByClassName('themes');
    var elem2 = document.querySelectorAll('hr');
    var elem3 = document.getElementsByClassName('themes2');
    var elem4 = document.getElementsByClassName('themes3');
    var elem5 = document.getElementsByClassName('themes4');
    for(var i=0; i<elem.length ;i++){
      elem[i].style.backgroundColor = "#ffb25f";
    }
    for(var i=0; i<elem2.length ;i++){
      elem2[i].style.color = "#ffb25f";
    }
    for(var i=0; i<elem3.length ;i++){
      elem3[i].style.color = "#ffb25f";
    }
    for(var i=0; i<elem4.length ;i++){
      elem4[i].style.borderColor = "#ffb25f";
    }
    for(var i=0; i<elem5.length ;i++){
      elem5[i].style.boxShadow = "0 0 10px 2px #ffb25f";
    }
    document.getElementById('contform').style.boxShadow = "0px 2px 10px #ffb25f";
    document.getElementById('homesection').style.backgroundImage = "url('static/img/bg/orangebg.jpg')";
    document.getElementById("boi").src = "static/img/bg/orangeboi.svg";
    document.getElementById('menu-btn').src = "static/img/bg/menuorange.png";
})



$('#col5').click(()=>{
    var elem = document.getElementsByClassName('themes');
    var elem2 = document.querySelectorAll('hr');
    var elem3 = document.getElementsByClassName('themes2');
    var elem4 = document.getElementsByClassName('themes3');
    var elem5 = document.getElementsByClassName('themes4');
    for(var i=0; i<elem.length ;i++){
      elem[i].style.backgroundColor = "rgb(0,74,96)";
    }
    for(var i=0; i<elem2.length ;i++){
      elem2[i].style.color = "rgb(0,74,96)";
    }
    for(var i=0; i<elem3.length ;i++){
      elem3[i].style.color = "rgb(0,74,96)";
    }
    for(var i=0; i<elem4.length ;i++){
      elem4[i].style.borderColor = "rgb(0,74,96)";
    }
    for(var i=0; i<elem5.length ;i++){
      elem5[i].style.boxShadow = "0 0 10px 2px rgb(0,74,96)";
    }
    document.getElementById('contform').style.boxShadow = "0px 2px 10px rgb(0,74,96)";
    document.getElementById('homesection').style.backgroundImage = "url('static/img/bg/darkbluebg.jpg')";
    document.getElementById("boi").src = "static/img/bg/darkblueboi.svg";
    document.getElementById('menu-btn').src = "static/img/bg/menudarkblue.png";
})

$('#col6').click(()=>{
    var elem = document.getElementsByClassName('themes');
    var elem2 = document.querySelectorAll('hr');
    var elem3 = document.getElementsByClassName('themes2');
    var elem4 = document.getElementsByClassName('themes3');
    var elem5 = document.getElementsByClassName('themes4');
    for(var i=0; i<elem.length ;i++){
      elem[i].style.backgroundColor = "#AD7546";
    }
    for(var i=0; i<elem2.length ;i++){
      elem2[i].style.color = "#AD7546";
    }
    for(var i=0; i<elem3.length ;i++){
      elem3[i].style.color = "#AD7546";
    }
    for(var i=0; i<elem4.length ;i++){
      elem4[i].style.borderColor = "#AD7546";
    }
    for(var i=0; i<elem5.length ;i++){
      elem5[i].style.boxShadow = "0 0 10px 2px #AD7546";
    }
    document.getElementById('contform').style.boxShadow = "0px 2px 10px #AD7546";
    document.getElementById('homesection').style.backgroundImage = "url('static/img/bg/darkorangebg.jpg')";
    document.getElementById("boi").src = "static/img/bg/darkorangeboi.svg";
    document.getElementById('menu-btn').src = "static/img/bg/menudarkorange.png";
})
$('#col7').click(()=>{
    var elem = document.getElementsByClassName('themes');
    var elem2 = document.querySelectorAll('hr');
    var elem3 = document.getElementsByClassName('themes2');
    var elem4 = document.getElementsByClassName('themes3');
    var elem5 = document.getElementsByClassName('themes4');
    for(var i=0; i<elem.length ;i++){
      elem[i].style.backgroundColor = "#911F27";
    }
    for(var i=0; i<elem2.length ;i++){
      elem2[i].style.color = "#911F27";
    }
    for(var i=0; i<elem3.length ;i++){
      elem3[i].style.color = "#911F27";
    }
    for(var i=0; i<elem4.length ;i++){
      elem4[i].style.borderColor = "#911F27";
    }
    for(var i=0; i<elem5.length ;i++){
      elem5[i].style.boxShadow = "0 0 10px 2px #911F27";
    }
    document.getElementById('contform').style.boxShadow = "0px 2px 10px #911F27";
    document.getElementById('homesection').style.backgroundImage = "url('static/img/bg/darkredbg.jpg')";
    document.getElementById("boi").src = "static/img/bg/darkredboi.svg";
    document.getElementById('menu-btn').src = "static/img/bg/menudarkred.png";
})
$('#col8').click(()=>{
    var elem = document.getElementsByClassName('themes');
    var elem2 = document.querySelectorAll('hr');
    var elem3 = document.getElementsByClassName('themes2');
    var elem4 = document.getElementsByClassName('themes3');
    var elem5 = document.getElementsByClassName('themes4');
    for(var i=0; i<elem.length ;i++){
      elem[i].style.backgroundColor = "#8938d4";
    }
    for(var i=0; i<elem2.length ;i++){
      elem2[i].style.color = "#8938d4";
    }
    for(var i=0; i<elem3.length ;i++){
      elem3[i].style.color = "#8938d4";
    }
    for(var i=0; i<elem4.length ;i++){
      elem4[i].style.borderColor = "#8938d4";
    }
    for(var i=0; i<elem5.length ;i++){
      elem5[i].style.boxShadow = "0 0 10px 2px #8938d4";
    }
    document.getElementById('contform').style.boxShadow = "0px 2px 10px #8938d4";
    document.getElementById('homesection').style.backgroundImage = "url('static/img/bg/purplebg.jpg')";
    document.getElementById("boi").src = "static/img/bg/purpleboi.svg";
    document.getElementById('menu-btn').src = "static/img/bg/menupurple.png";
})
$('#col9').click(()=>{
    var elem = document.getElementsByClassName('themes');
    var elem2 = document.querySelectorAll('hr');
    var elem3 = document.getElementsByClassName('themes2');
    var elem4 = document.getElementsByClassName('themes3');
    var elem5 = document.getElementsByClassName('themes4');
    for(var i=0; i<elem.length ;i++){
      elem[i].style.backgroundColor = "#5E454B";
    }
    for(var i=0; i<elem2.length ;i++){
      elem2[i].style.color = "#5E454B";
    }
    for(var i=0; i<elem3.length ;i++){
      elem3[i].style.color = "#5E454B";
    }
    for(var i=0; i<elem4.length ;i++){
      elem4[i].style.borderColor = "#5E454B";
    }
    for(var i=0; i<elem5.length ;i++){
      elem5[i].style.boxShadow = "0 0 10px 2px #5E454B";
    }
    document.getElementById('contform').style.boxShadow = "0px 2px 10px #5E454B";
    document.getElementById('homesection').style.backgroundImage = "url('static/img/bg/brownnewbg.jpg')";
    document.getElementById("boi").src = "static/img/bg/brownnewboi.svg";
    document.getElementById('menu-btn').src = "static/img/bg/menubrown.png";
})


$('#col10').click(()=>{
    var elem = document.getElementsByClassName('themes');
    var elem2 = document.querySelectorAll('hr');
    var elem3 = document.getElementsByClassName('themes2');
    var elem4 = document.getElementsByClassName('themes3');
    var elem5 = document.getElementsByClassName('themes4');
    for(var i=0; i<elem.length ;i++){
      elem[i].style.backgroundColor = "#00ca8e";
    }
    for(var i=0; i<elem2.length ;i++){
      elem2[i].style.color = "#00ca8e";
    }
    for(var i=0; i<elem3.length ;i++){
      elem3[i].style.color = "#00ca8e";
    }
    for(var i=0; i<elem4.length ;i++){
      elem4[i].style.borderColor = "#00ca8e";
    }
    for(var i=0; i<elem5.length ;i++){
      elem5[i].style.boxShadow = "0 0 10px 2px #00ca8e";
    }
    document.getElementById('contform').style.boxShadow = "0px 2px 10px #00ca8e";
    document.getElementById('homesection').style.backgroundImage = "url('static/img/bg/Untitled-1-01.svg')";
    // document.getElementById("boi").src = "static/img/bg/New bg.png";
    document.getElementById("boi").src = "static/img/bg/bgboi.svg";
    document.getElementById('menu-btn').src = "static/img/bg/menu2.png";
})




$('.themes-btn').click(()=>{
    $('.colors').toggleClass('activebtn');
    $('.themes-btn-p').toggleClass('activethemesbtn');
})

$('.themes-btn-2').click(()=>{
    $('.colors').toggleClass('activebtn');
    $('.themes-btn-p').toggleClass('activethemesbtn');
})