import React, {Component} from 'react';

function sayHi(user) {
    return user.firstName + ' ' + user.lastName
}

const user = {
    firstName: 'Tian',
    lastName: 'Tong'
}

class Learn extends Component {

    render() {
        const element = (
            <div>
                <h1>Hello {sayHi(user)}!</h1>
                <h1>Good to see you here.</h1>
            </div>
        )

        return element
    }
}

export default Learn