import React from 'react' //THIS IS THE FIRST STEP 

// function Greet(){
//     return <h1>Hello Amit</h1>
// }


// const Greet = () => <h1>Hello Amit</h1>


const Greet = (props) => {
    console.log(props);
    return(
        <div>
            <h1> Hello {props.name} a.k.a {props.heroName}</h1>
            {props.children}
        </div>
    )
}

//❗❗❗ DESTRUCTURING IN FUNCTIONAL COMPONENT ❗❗❗

// TYPE 1 ❗❗❗ Destructuring in the function parameter itself ❗❗❗

// const Greet = ({name, heroName}) => {
//     return(
//         <div>
//             <h1>
//                 Hello {name} a.k.a {heroName}
//             </h1>
//         </div>
//     )
// }


// TYPE 2 ❗❗❗ Destructuring in the function body  ❗❗❗

// const Greet = props => {
//     const {name, heroName} = props
//     return(
//         <div>
//             <h1>
//                 Hello {name} a.k.a {heroName}
//             </h1>
//         </div>
//     )
// }


export default Greet 