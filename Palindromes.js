function palindrome(str) {
  // Good luck!
  
  str = str.replace(/[\W_]/g,'').toLowerCase();
  var tab= [], str2 ="";
  for(i=0; i<str.length; i++)
    tab[i] = str[i];
  str2 = tab.reverse().join('');
  if(str == str2)
  return true;
  else
  return false;
}



palindrome("eye");
