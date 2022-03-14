import React,{ useEffect } from 'react'
import { Link } from 'react-router-dom';
import Folder from '../image/folder.gif'

function Index(props) {
  useEffect(() => { 
    document.title = "Index | Portfolio";
  }, []);
  return (
    <div>
        <h1>{props.title}</h1>
        <hr />
        <div className='cell'>
          <img src={Folder} alt='folder-icon' />
          <label className='label-list'>
            Profile
          </label>
        </div>
        <div className='cell'>
          <img src={Folder} alt='folder-icon' />
          <label className='label-list'>Education</label>
        </div>
        <div className='cell'>
          <img src={Folder} alt='folder-icon' />
          <label className='label-list'>Skill</label>
        </div>
        <div className='cell'>
          <img src={Folder} alt='folder-icon' />
          <label className='label-list'>Project</label>
        </div>
        <div className='cell'>
          <img src={Folder} alt='folder-icon' />
          <label className='label-list'>Certificate</label>
        </div>
        <div className='cell'>
          <img src={Folder} alt='folder-icon' />
          <label className='label-list'>Language</label>
        </div>
    </div>
  )
}

export default Index