import React, { Component } from 'react'

export default class BT4 extends Component {

    render() {
        return (
            <div style={{height:"100vh"}} className='d-flex justify-content-center align-items-center'>
                <div style={{height:"450px"}} className="card text-left w-25 d-flex flex-column align-items-center ">
                    <img className="card-img-top w-50 mt-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png?20210507000024" alt />
                    <div className="card-body text-center">
                        <h3 className="card-title">Please sign in</h3>
                        <input className='p-2' style={{width:"100%"}} placeholder='Enter your email'/>
                        <input className='p-2' style={{width:"100%"}} placeholder='Enter your password'/>
                        <label className='mt-2'>
                            <input type='checkbox'/>
                            <span className=' ml-2'>Remember me</span>
                        </label>
                        <button className='w-100 btn btn-success p-2 mt-2'>Sign in </button>
                    </div>
                </div>
            </div>
        )
    }
}
