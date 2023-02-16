import React, { Component } from 'react'

export default class BT3 extends Component {

    render() {
        
        return (
            <div className='container d-flex justify-content-center'>
                <div className="card text-white w-50 ">
                    <div style={{height:"350px"}} className=' d-flex flex-column align-items-center'>
                        <img className="card-img-top" src="https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/02/background-banner.jpg?ssl=1" />
                        <img style={{ borderRadius: "50%", width: '200px', transform:"translateY(-50%)"}} className="card-img" src="https://s3.cloud.cmctelecom.vn/tinhte1/2015/07/3095742_image.jpg" />
                    </div>
                    <div className="card-body text-dark text-center">
                        <h4 >Nguyễn Đình Mạnh</h4>
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consequuntur sit earum adipisci explicabo possimus accusamus veritatis. </p>
                        <button className='btn btn-success mt-2'> FOLLOW ME</button>
                    </div>
                </div>

            </div>
        )
    }
}
