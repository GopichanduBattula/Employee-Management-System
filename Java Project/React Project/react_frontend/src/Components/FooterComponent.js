import React, { Component } from 'react'
import '../App.css';
import axios from 'axios';

export default class FooterComponent extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
            <span>  All Right Reserved &copy; YataYati</span>
        </footer>
      </div>
    )
  }
}