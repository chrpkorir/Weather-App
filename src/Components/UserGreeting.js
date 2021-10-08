import React, {Component} from 'react';

class UserGreeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn : false
        }
    }
    render() {

        // 1. Short Circuit operator Approach

        return this.state.isLoggedIn && <div>Welcome Mona</div>

        //2. Ternary Conditional approach

        return(
            this.state.isLoggedIn ?
                <div>Welcome Mona</div>:
                <div>Welcome Guest</div>
        )

        //3.  Element Variables Conditional Rendering

        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Mona</div>
        // }
        // else{
        //     message = <div>Welcome Guest</div>
        // }

      //  // 4. If else conditional Rendering

        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Mona</div>
        // }
        //     else {
        //        return <div>Welcome Guest</div>
        //
        //     }
        }
        // return (
        //     <div>
        //         <div>Welcome Mona</div>
        //         <div>Welcome Guest</div>
        //
        //     </div>
        // );
}

export default UserGreeting;