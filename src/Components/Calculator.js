import React, { useState } from 'react';
import './Calculator.css'

const Calculator = () => {
    const [value, setValue]= useState('');

    const back = () =>{
        setValue(value.slice(0,-1))
      }

    const evalueExpresion = () => {
        try{
          const evalue = eval(value)
          setValue(evalue.toString())
        }catch(error){
          console.log(error)
        }
      }
  return (
    <div className='container'>
        <form>
            <div>
                <input className='display' type='text' name='display' value={value}/>
            </div>
            <div>
                <input type='button' value='AC' onClick={e=>setValue('')} className='AC'/>
                <input type='button' value='DEL' onClick={back} className='del'/>
                <input type='button' value='.' onClick={e=>setValue(value + e.target.value)} className='dot'/>
                <input type='button' value='/' onClick={e=>setValue(value + e.target.value)} className='divi'/>
            </div>
            <div>
                <input type='button' value='7' onClick={e=>setValue(value + e.target.value)} className='int-val'/>
                <input type='button' value='8' onClick={e=>setValue(value + e.target.value)} className='int-val'/>
                <input type='button' value='9' onClick={e=>setValue(value + e.target.value)} className='int-val'/>
                <input type='button' value='*' onClick={e=>setValue(value + e.target.value)} className='mul'/>
            </div>
            <div>
                <input type='button' value='4' onClick={e=>setValue(value + e.target.value)} className='int-val'/>
                <input type='button' value='5' onClick={e=>setValue(value + e.target.value)} className='int-val'/>
                <input type='button' value='6' onClick={e=>setValue(value + e.target.value)} className='int-val'/>
                <input type='button' value='-' onClick={e=>setValue(value + e.target.value)} className='sub'/>
            </div>
            <div>
                <input type='button' value='1' onClick={e=> setValue(value + e.target.value)} className='int-val'/>
                <input type='button' value='2' onClick={e=>setValue(value + e.target.value)} className='int-val'/>
                <input type='button' value='3' onClick={e=>setValue(value + e.target.value)} className='int-val'/>
                <input type='button' value='+' onClick={e=>setValue(value + e.target.value)} className='add'/>
            </div>
            <div>
                <input type='button' value='%' onClick={e=>setValue(value + e.target.value)} className='mod'/>
                <input type='button' value='0' onClick={e=>setValue(value + e.target.value)} className='int-val'/>
                <input type='button' value='=' className='equal' onClick={evalueExpresion}/>
            </div>
        </form>
    </div>
  )
}

export default Calculator