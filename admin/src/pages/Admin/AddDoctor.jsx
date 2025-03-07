import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import { toast } from 'react-toastify'
import axios from 'axios'

export const AddDoctor = () => {

    const [docImg,setDocImg] = useState(false)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [experience,setExperience] = useState('1 Year')
    const [fees,setFees] = useState('')
    const [about,setAbout] = useState('')
    const [degree,setDegree] = useState('')
    const [speciality,setSpeciality] = useState('General physician')
    const [address1,setAddress1] = useState('')
    const [address2,setAddress2] = useState('')

    const {backendUrl,aToken} = useContext(AdminContext)

    const onSubmitHandler = async(event) =>{
        event.preventDefault();
        try{
            if(!docImg){
                return toast.error('Image Not Selected')
            }
            const formData = new FormData()

            formData.append('image',docImg)
            formData.append('name',name)
            formData.append('email',email)
            formData.append('password',password)
            formData.append('experience',experience)
            formData.append('fees',Number(fees))
            formData.append('about',about)
            formData.append('speciality',speciality)
            formData.append('degree',degree)
            formData.append('address',JSON.stringify({line1:address1,line2:address2}))

           const {data} = await axios.post(backendUrl+'/api/admin/add-doctor',formData,{headers:{aToken}})

           if(data.success){
            toast.success(data.message)
            setDocImg(false)
            setName('')
            setPassword('')
            setEmail('')
            setAddress1('')
            setAddress2('')
            setDegree('')
            setAbout('')
            setFees('')
           }
           else{
            toast.error(data.message)
           }

        }
        catch(error){
            toast.error(error.message)
        }
    }


  return (

    <form onSubmit={onSubmitHandler} className='mb-5 w-full'>
       <p className='mb-3 text-lg font-medium'>Add Doctor</p>

       <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
        <div className='flex items-center gap-4 mb-8 text-gray-800'>
            <label htmlFor='doc-img'>
                <img src={docImg? URL.createObjectURL(docImg):assets.upload_area} alt="" className='w-16 bg-gray-100 rounded-full cursor-pointer'/>
            </label>
            <input onChange={(e)=>setDocImg(e.target.files[0])} type="file" id='doc-img' hidden name='img'/>
            <p>Upload doctor <br/> picture</p>
        </div>
        
         <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
            <div className='w-full lg:flex-1 flex flex-col gap-4'>
               
               <div className='flex-1 flex flex-col gap-1 '>
                <p>Doctor name</p>
                <input onChange={(e)=>setName(e.target.value)} className='border rounded px-3 py-2 ' 
                type="text" placeholder='Name' value={name} required name='name'/>
               </div>

               <div className='flex-1 flex flex-col gap-1 '>
                <p>Doctor Email</p>
                <input className='border rounded px-3 py-2 ' type="email" placeholder='Email' required 
                 onChange={(e)=>setEmail(e.target.value)} value={email} name='email'/>
               </div>

               <div className='flex-1 flex flex-col gap-1 '>
                <p>Doctor Password</p>
                <input className='border rounded px-3 py-2 ' type="password" placeholder='Password' required
                 onChange={(e)=>setPassword(e.target.value)} value={password} name='password'/>
               </div>

               <div className='flex-1 flex flex-col gap-1 '>
                <p>Experience</p>
                <select name='experience' onChange={(e)=>setExperience(e.target.value)} 
                value={experience} className='border rounded px-3 py-2 ' id="">
                    <option value="1 Year">1 Year</option>
                    <option value="2 Year">2 Year</option>
                    <option value="3 Year">3 Year</option>
                    <option value="4 Year">4 Year</option>
                    <option value="5 Year">5 Year</option>
                    <option value="6 Year">6 Year</option>
                    <option value="7 Year">7 Year</option>
                    <option value="8 Year">8 Year</option>
                    <option value="9 Year">9 Year</option>
                    <option value="10 Year">10 Year</option>
                </select>
               </div>

               <div className='flex-1 flex flex-col gap-1 '>
                <p>Fees</p>
                <input name='fees'  onChange={(e)=>setFees(e.target.value)} value={fees} className='border rounded px-3 py-2 ' type="number" placeholder='fees' required/>
               </div>

            </div>

            <div className='w-full lg:flex-1 flex flex-col gap-4'>

              <div className='flex-1 flex flex-col gap-1 '>
                <p>Speciality</p>
                <select name='speciality'  onChange={(e)=>setSpeciality(e.target.value)} value={speciality}  className='border rounded px-3 py-2 ' >
                    <option value="General physician">General physician</option>
                    <option value="Gynecologist">Gynecologist</option>
                    <option value="Dermatologist">Dermatologist</option>
                    <option value="Pediatricians">Pediatricians</option>
                    <option value="Neurologist">Neurologist</option>
                    <option value="Gastroenterologist">Gastroenterologist</option>
                </select>
              </div>

              <div className='flex-1 flex flex-col gap-1 '>
                <p>Education</p>
                <input name='education' onChange={(e)=>setDegree(e.target.value)} value={degree}  className='border rounded px-3 py-2 ' type="text" placeholder='Education' required/>
               </div>
       
               <div className='flex-1 flex flex-col gap-1 '>
                <p>Address</p>
                <input onChange={(e)=>setAddress1(e.target.value)} value={address1}
                 className='border rounded px-3 py-2 ' type="text" placeholder='Address 1' required name='address1'/>
                <input onChange={(e)=>setAddress2(e.target.value)} value={address2}
                className='border rounded px-3 py-2 ' type="text" placeholder='Address 2' required name='address2'/>
               </div>

            </div>

         </div>

         <div>
            <p className='mt-4 mb-2'>About Doctor</p>
            <textarea onChange={(e)=>setAbout(e.target.value)} value={about}
             className='w-full px-4 pt-2 border rounded' placeholder='Write about doctor' rows={5} required name='about'/>
         </div>

         <button type='submit' className='bg-primary px-10 py-3 mt-4 text-white rounded-full'>Add Doctor</button>

       </div>
    </form>
       
    
  )
}
