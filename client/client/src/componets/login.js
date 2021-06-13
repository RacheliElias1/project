import React, { useEffect, useRef } from 'react'


export default function LogIn(props){

    let refToEmail = useRef(null)
    let refToPassword = useRef(null)
    let refToCheckPassword = useRef(null)

    useEffect(() => {
        //console.log(refToName);
    }, [refToEmail])
    const ifLogin = () => {
        if (refToPassword.current.value == refToCheckPassword.current.value) {
//props.setName(refToName.current.value)
           // props.setItem(2)
        }
        // refToPassword.current.value == refToCheckPassword.current.value ?
        //   props.setItem(2): alert('password not match')

    }

    return(
        <>
        <div>
            <label>email</label>
            <input ref={refToEmail}></input>
            <br></br>
            <label>password</label>
            <input ref={refToPassword}></input>
            <br></br>
            <label>check password</label>
            <input ref={refToCheckPassword}></input>
            <br></br>
            <button onClick={ifLogin}>Log In</button>
        </div>
        
        </>
    )
}