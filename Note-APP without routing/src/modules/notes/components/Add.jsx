import React from 'react'
import Input from '@mui/material/Input';import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import Box from '@mui/material/Box';
import SpatialAudioOffIcon from '@mui/icons-material/SpatialAudioOff';
import { BsFillFileEarmarkRuledFill } from 'react-icons/bs';
import Button from '@mui/material/Button';
import { useRef } from 'react';
import { noteOperations } from '../services/note-operations';
 
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MuiColorInput } from 'mui-color-input'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
 
export const Add =(props)=>{
   
 const id=  useRef();
 const title=useRef();
 const desc=useRef();
 const [date, setDate] = React.useState(null);
 const [value, setValue] = React.useState('#ffffff')
 
  const handleChange = (newValue) => {
    setValue(newValue)
  }
  const addNote = ()=>{
    console.log('Add Note is called')
    const idValue=id.current.value;
    const titleValue=title.current.value;
    const descValue=desc.current.value;
    // const cDate={date};
    const cDate = date ? date.toISOString() : null;
    console.log('date is:',cDate);
    const importance={value};
    console.log('importance is :',importance);
    console.log('ID',idValue);
    console.log('Title',titleValue);
    console.log('Desc',descValue);
    //put data in object
    // const noteObject = {'id':idValue, 'title':titleValue, 
    // 'descr':descValue};
    // const noteObject=noteOperations.addNote(idValue, titleValue, descValue, '','')
    //     props.fn(noteObject);//call collectNoteData...
   
      noteOperations.addNote(idValue, titleValue, descValue,cDate,importance);
    props.fn(); // Call collectNoteData
  }
    return (
       <>
     
    <Box
     sx={{
        margin:5,flexDirection:'column',display:'flex',gap:2,
      
      }}>
    <TextField
        id="note-id"
        inputRef={id}
        label="Id"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DescriptionIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <TextField
        id="note-title"
        inputRef={title}
        label="Title"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SpatialAudioOffIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <TextField
        id="note-desc"
        inputRef={desc}
        label="Description"
        multiline
        maxRows={4}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <BsFillFileEarmarkRuledFill />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
     {/* <input type="date"/> */}
     <LocalizationProvider dateAdapter={AdapterDayjs}>
    
        <DatePicker label="Date" value={date} onChange={(newValue) => setDate(newValue)} />
    </LocalizationProvider>
    <MuiColorInput  label="Color" value={value} onChange={handleChange} />
     <Button onClick={addNote} variant="contained" color="warning">Add Note</Button>
 
   </Box>     
    
       </>
    )
 }
 