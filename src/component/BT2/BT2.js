import React, { Component } from 'react'
import { students } from '../../data/data'
import "./BT2.css"
export default class BT2 extends Component {
    renderList = () => {
        return students.map((student, index) => (
            <tr key={index}>
                <td>{student.company}</td>
                <td>{student.contact}</td>
                <td>{student.country}</td>
            </tr>
        ))
    }
    render() {
        return (
            <div className='container'>
                <table>
                    <tbody>
                    {this.renderList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
