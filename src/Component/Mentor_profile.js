import React, { useState, useEffect } from 'react'
import './Mentor_profile.css'
import {mentorData}  from "./../Data/Mentor_details"
import { Rating } from 'react-simple-star-rating'
import Arrow from "../Data/Icons/Arrow.png"

function Mentor_profile() {
    var [curProfile, setCurProfile]= useState(mentorData[0]);
    var [curIndex, setCurIndex]= useState(0);
    var [rating, setRating]= useState((curProfile.rating>4.5 && curProfile.rating<5)?(4.5):curProfile.rating); //rating is decreased because in design there is half full star for 4.9 rating

  return (
    <>
    <div className={'mentor_profile_card ' + ((curIndex%2==0)? 'background1': 'background2')}>
        <div className='mentor_details_left'>
            <div className='mentor_details'>
                <p className='mentor_rating' style={{"color": (curIndex%2==0)?"#4CAF50":"#609B6C"}}>{parseFloat(curProfile.rating).toFixed(1)}</p>
                <Rating
                    initialValue={rating}
                    allowFraction= {true}
                    transition= {true}
                    fillColor= {(curIndex%2==0)?"#4CAF50":"#609B6C"}
                    size= {28}
                    emptyColor= {"#FFFF"}
                />
                
                <p className='mentor_name'>{curProfile.name}</p>
                <p className='mentor_designation'>{curProfile.designation}</p>
                <p className='mentor_description'>{curProfile.description}</p>
                <button style={{"background-color": (curIndex%2==0)?"#4CAF50":"#609B6C", "box-shadow": (curIndex%2==0)?"-1px -1px 20px 0px #4caf50": "-1px -1px 20px 0px #609B6C"}} className='session_booking'>Book a session</button>
            </div>
        </div>
        <div className='mentor_details_right'>
            <div className='outer_circle'>
                <div className="gallery">
                    <img src={mentorData[0].profile_picture} alt="Prankur Profile Pic"/>
                    <img src={mentorData[1].profile_picture} alt="Saurav Profile Pic"/>
                    <img src={mentorData[2].profile_picture} alt="Saumya Profile Pic"/>
                    <img src={mentorData[3].profile_picture} alt="Keshav Profile Pic"/>
                    <img src={mentorData[4].profile_picture} alt="Ankita Profile Pic"/>
                    
                </div>
                
                <div className='focused_profile'>
                    <button style={{"background-color": (curIndex%2==0)?"#4CAF50":"#609B6C"}}  className='shift_button' onClick={()=> {
                        if(curIndex==0){
                            setCurProfile(mentorData[4]);
                            setRating((mentorData[4].rating>4.5 && mentorData[4].rating<5.0)?(4.5):mentorData[4].rating)
                            setCurIndex(4);
                        }
                        else{
                            setCurProfile(mentorData[curIndex-1]);
                            setRating((mentorData[curIndex-1].rating>4.5 && mentorData[curIndex-1].rating<5.0)?(4.5):mentorData[curIndex-1].rating)
                            setCurIndex(curIndex-1); 
                            
                        }
                        // console.log("down", curIndex)
                        }}>
                        <img src={Arrow}/>
                    </button>
                        
                    
                    <div className='focused_profile_center'>
                        <div >
                            <img className='focused_profile_pic' src={curProfile.profile_picture}/>
                        </div>
                        <div className='focused_profile_name'>
                            <button>{curProfile.name}</button>
                        </div>
                    </div>

                    <button style={{"background-color": (curIndex%2==0)?"#4CAF50":"#609B6C"}} className='shift_button' onClick={()=> {
                        if(curIndex==4){
                            setCurProfile(mentorData[0]);
                            setRating((mentorData[0].rating>4.5 && mentorData[0].rating<5.0)?(4.5):mentorData[0].rating)
                            setCurIndex(0);
                        }
                        else{
                            setCurProfile(mentorData[curIndex+1]);
                            setRating((mentorData[curIndex+1].rating>4.5 && mentorData[curIndex+1].rating<5.0)?(4.5):mentorData[curIndex+1].rating)
                            setCurIndex(curIndex+1); 
                        }
                        // console.log("up", curIndex)
                        }}>
                        <img src={Arrow}/>
                    </button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Mentor_profile