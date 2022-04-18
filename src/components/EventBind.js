// import React, { Component } from 'react'

// class EventBind extends Component {

// constructor(props) {
//     super(props)

//     this.state = {
//          message:'hello'
//     }





    // 3 BINDING THE EVENT IN THE CONSTRUCTION FUNCTION 

    // this.clickHandler = this.clickHandler.bind(this)
// }

// clickHandler(){
//     this.setState({
//         message: 'Goodbye !'
//     })
//     console.log(this);
// }





// 4 USING THE ARROW FUNCTION AS A CLASS PROPERTY 
// clickHandler = () => {
//     this.setState({
//         message: ' GoodBye ! '
//     })
// }

// 1 ❗❗❗BINDING IN THE RENDER METHOD❗❗❗ 

    // render() {
    //     return (
    //         <div>
    //         <div>{this.state.message}</div>
                {/* <button onClick = {this.clickHandler.bind(this)}>Click</button> */}

                {/* ALTHOUGH THIS OPTION WORKS PERFECTLY FINE EVERY UPDATE TO THE STATE WILL CAUSE THE COMPONENT TO RE RENDER THIS INTERN WILL GENERATE A BRAND NEW EVENT HANDLER ON EVERY RENDER ALTHOUGH THE IMPACT ON PERFORMANCE IS NOT SEVERE IN SMALL APPLICATION IT COULD BE TORUBLESOME IN LARGE APPLICATIONS AND COMPONENTS THAT CONTAINS  NESTED CHILDREN COMPONENTS.. */}


{/* 2 ❗❗❗BINDING USING THE ARROW FUNCTION ❗❗❗ */}
{/* 
                <button onClick = {() => this.clickHandler()}>Click</button> */}



{/* 3 ❗❗❗BINDING IN THE CONSTRUCTOR FUNCTION ❗❗❗  */}

            {/* <button onClick = {this.clickHandler}>Click</button>  */}



            {/* 4 ❗❗❗BINDING USING THE ARROW FUNCTION AS THE CLASS PROPERTY ❗❗❗   */}


            {/* <button onClick = {this.clickHandler}>Click</button>  */}




            // </div>
//         )
//     }
// }





// export default EventBind
