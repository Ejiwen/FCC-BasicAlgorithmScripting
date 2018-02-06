function findLongestWord(str) {
  var tab = str.split(" ");

  for (i=0; i<tab.length-1; i++)
    for (j=1; j<tab.length; j++){
    if(tab[i].length<tab[j].length)
      tab[i] = tab[j];
  }
  return tab[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");