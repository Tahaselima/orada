import React from 'react'

const Notification = ({ appearance, children }) => {
    let notifyClass = `notify ${appearance}`
    let Icon = (attrs) =>  {
    switch (appearance) {
        case 'success':
        return <div>Success</div>
        case 'warning': 
        return <div>warning</div>
        case 'info':
        return <div>info</div>
        case 'error':
        return <div>error</div>
        default:
        return <></>
    }
    }
    return(
    <div className={notifyClass}>
        <div className="notifyIcon">
        <Icon/>
        </div>
        <div className="notifyContent">
        {children}
        </div>
    </div>
    )
}

export default Notification; 