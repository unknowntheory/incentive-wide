import React, { Component } from 'react';
import {NewUserMain} from './../container/NewUserMain.jsx'
import './../main.css'

const About = () => (
  <div className="container">
    <img className="houseImgOverlay" src="https://i.kinja-img.com/gawker-media/image/upload/s--bIV3xkEm--/c_scale,f_auto,fl_progressive,q_80,w_800/jsprifdd1gmfy7e7nola.jpg" />
    <section className="is-info is-fullheight">
            <div className="hero-head">

                </div>

                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-6 is-offset-3">
                            <h1 className="title has-text-black">
                                About
                            </h1>
                            <h2 className="subtitle has-text-black has-text-weight-bold">
                              We noticed millennials had a lot of questions about buying a house.
Incentivize is here to answer those questions, helping you prepare financially and making your house feel like your own. With each milestone you achieve, we will help with home improvement. .
                            </h2>
                            <NewUserMain />
                        </div>
                    </div>
                </div>

        </section>
  </div>


)

module.exports.About = About;
