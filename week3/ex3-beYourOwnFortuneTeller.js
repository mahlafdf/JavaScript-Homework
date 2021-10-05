

function tellFortune (){

    const numChildren =[6,2,3,4,5];
    const partnerNames =['john','Ali','sam','david','jack'];
    const locations   =['Teh','NY','LA','DC','Ker'];
    const jobs =['Teacher','Driver','Coder','Accountant','Police'];


    let JOB_TITLE = jobs[Math.floor((Math.random()*jobs.length))];
    let LOCATION = locations[Math.floor((Math.random()*locations.length))];
    let PARTNER_NAME = partnerNames[Math.floor((Math.random()*partnerNames.length))];
    let NUMBER_KIDS = numChildren[Math.floor((Math.random()*numChildren.length))];

    return `You will be a ${JOB_TITLE} in ${LOCATION}, married to ${PARTNER_NAME} with ${NUMBER_KIDS} kids .`;
}


console.log(tellFortune());
console.log(tellFortune());
console.log(tellFortune());