import React, { Component } from 'react'

function UserGreeting(props) {
    return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn
    if (isLoggedIn) {
        return <UserGreeting />
    }
    return <GuestGreeting />
}

function LoginButton(props) {
    return (<button onClick={props.onClick}>Login</button>)
}

function LogoutButton(props) {
    return (<button onClick={props.onClick}>Logout</button>)
}

class LoginControl extends Component {
    constructor(props) {
        super(props)

        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.state = { isLoggedIn: false }
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true })
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn

        let button
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}></LogoutButton>
        } else {
            button = <LoginButton onClick={this.handleLoginClick}></LoginButton>
        }

        const messages = ['React', 'Re: React', 'Re:Re: React'];
        const count = 2

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
                <Mailbox unreadMessages={messages} />
                <h2>The user has {count > 0 ? count : 'zero'} messages</h2>
                <Page />
            </div>
        )
    }
}

function Mailbox(props) {
    const unreadMessages = props.unreadMessages
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 && <h2>You have {unreadMessages.length} unread messages.</h2>}
        </div>
    )
}

function WarningBanner(props) {
    if (!props.warn) {
        return null
    }

    return (
        <div className="warning">Warning!</div>
    )
}

class Page extends Component {
    constructor(props) {
        super(props)

        this.state = {showWarning: true}
        this.handleToggleClick = this.handleToggleClick.bind(this)
    }

    handleToggleClick() {
        this.setState(state => ({showWarning: !state.showWarning}))
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}

export default LoginControl