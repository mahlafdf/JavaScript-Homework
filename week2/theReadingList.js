var bookLists = [
    
    {title = 'The sophie\'s world',
    author ='Gorder',
    alreadyRead = true ,}
    ,
    {title = 'Othello',
    author ='Shekspire',
    alreadyRead = true ,}
    ,
    {title = ' The Course of love',
    author ='Alan de buton',
    alreadyRead = false ,}
]

for (let i = 0; i< bookLists.length; i++) {
  
    console.log(bookLists[i].title +'by'+bookLists[i].author);
    
    if(bookLists[i].alreadyRead){
        console.log('You already read\" '+ bookLists[i].title + '\"');
    }else{
        console.log('You still need to read\"'+bookLists[i].title+'\"');
    }
    console.log('');
}
