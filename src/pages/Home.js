import { Button, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import ErrorMssg from './Errormssg'

const Home = ({name, setName,email, setEmail,phone, setPhone, fetchQuestions}) => {

  const [difficulty, setDifficulty] = useState("")
  const [error, setError] = useState(false)
    
  let navigate = useNavigate();

  const handleSubmit=()=>{
    if(!name||!email||!phone||!difficulty){
      setError(true);
      return;
    }
    else{
      setError(false)
      fetchQuestions( difficulty);
      navigate("/quiz");
    }
  }

  return (
    <div className='content'>
        <div className='settings text-center'>
            <span style={{fontSize:30}}>Quiz Settings</span>
            <div className="settings_select">
              {error && <ErrorMssg>Please fill all the fields</ErrorMssg>}
                <TextField 
                style={{marginBottom:20}}
                label='Enter your name'
                variant='outlined'
                onChange={(e)=>setName(e.target.value)}
                />
                <TextField 
                style={{marginBottom:20}}
                label='Enter your email'
                variant='outlined'
                onChange={(e)=>setEmail(e.target.value)}

                />
                <TextField 
                style={{marginBottom:20}}
                label='Enter your phone'
                variant='outlined'
                onChange={(e)=>setPhone(e.target.value)}

                />


                  <TextField 
                style={{marginBottom:20}}
                select
                label='Select Dificulty'
                variant='outlined'
                onChange={(e)=>setDifficulty(e.target.value)}
                value={difficulty}
                >
                  <MenuItem key="Easy" value="easy"> Easy</MenuItem>
                  <MenuItem key="Medium" value="medium"> Medium</MenuItem>
                  <MenuItem key="Hard" value="hard"> Hard</MenuItem>
                  </TextField>
                  <Button variant='contained' color='secondary' size='large'
                  onClick={handleSubmit}
                  >
                    Start Quiz
                  </Button>
            </div>
        </div>        
    </div>
  )
}

export default Home