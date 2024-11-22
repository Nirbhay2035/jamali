// onload = () => {
//     const c = setTimeout(() => {
//       document.body.classList.remove("not-loaded");
//       clearTimeout(c);
//     }, 1000);
//   };


onload = () => {
    let userName = prompt("What's your name?");
    if (userName === "Tanzi" ) {
        alert('HELLO '+userName+',here is a virtual flower from my side:)');
        document.body.classList.remove("not-loaded");
        
        
    } 
    else if (userName === "Chomu"){
        alert('HELLO '+userName+',here is a virtual flower from my side:)');
        document.body.classList.remove("not-loaded");
    }
    else {
        alert('Please enter the name by which i use to call you');
    }
};




