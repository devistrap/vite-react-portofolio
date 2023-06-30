import { useState } from 'react'
import './index.css'
import * as React from 'react'
import './App.css'


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         
        };
      }
        render(){
    return (
        <footer className='flex justify-center flex-row'>   
            <p className='px-8 text-2xl'>contact?</p>
            <p className='px-8 text-2xl'><a href="mailto:bart.nieman11@gmail.com">mail me!</a></p>
            <p className='px-8 text-2xl'><a href='github.com/devistrap'>github </a></p>
            <p className='px-8 text-2xl'><a href='linkedin.com/in/bart-nieman/'>linkedin</a></p>
            <p className='px-8 text-2xl'>discord: devistrap#1036</p>
        </footer>

    )
}

}

export default Contact
