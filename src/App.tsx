import React from "react";
import {observer, Provider} from "mobx-react";
import axios from "axios";

import { signUp } from "./middleware"
import { ChatStore, chatStore } from './store/ChatStore'
import { MessagesList } from "./components/MessageList";
import { MessageWriter } from "./components/MessageWriter";

// @observer
// export class App extends React.Component {
//     private chatStore: ChatStore = new ChatStore();

//     render() {
//         return(
//             <div>
//                 <Provider chatStore={this.chatStore}>
//                     <MessagesList />
//                     <MessageWriter />
//                 </Provider>
//             </div>
//         )
//     }

// }

import { SignUp, SignIn } from "./components/Auth";

export class App extends React.Component {
    componentDidMount() {
        let axiosConfig = {
            params: {
                filter: {
                    email: "sasha@gmail.com"
                }
            }
        }

        axios.get('http://lvh.me:3000/signin?filter[email]=sasha@gmail.com')
        .then(response => {
            console.log(response)
        }) 
        .catch(error => {
            console.log(error)
        }) 
    }

    signIn = (email: string, password: string) => {
        const config = {
            params: {
                where: {
                    email: email
                }
            }
        }

        axios.get('http://lvh.me:3000/signin', config)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    render() {
        return(
            <div>
                <h1>SignUp</h1>
                <SignUp signUp={signUp} />
                <h1>SignIn</h1>
                <SignIn signIn={this.signIn} />
            </div>
        )
    }
}