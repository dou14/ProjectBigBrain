
let flag=getCookie("flag");
if (flag=="true")
document.writeln("<a href='logoff.html'><span class='button'>Logoff</span></a>"         );
else
document.writeln("<a href='login.html'><span class='button'>Login</span></a>"           );


document.writeln("<a href='books.html'> <span class='button'>Books</span> </a>"         );
document.writeln("<a href='verify.html'> <span class='button'>Verify</span> </a>"       );
document.writeln("<a href='reward.html'> <span class='button'>Reward</span> </a>"       );
document.writeln("<a href='contact.html'> <span class='button'>Contact</span> </a>"     );
document.writeln("<a href='about.html'> <span class='button'>About</span> </a>"         );
document.writeln("<a href='cart.html'> <i class='fas fa-shopping-cart'></i> </a>"       );
     