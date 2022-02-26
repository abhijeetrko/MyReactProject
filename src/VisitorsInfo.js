import React from 'react'
import {useFormik} from 'formik'

function VisitorsInfo() {
    async function saveUsers(values){
        console.log ('calling through save' , values);
        const result = await fetch("http://localhost:5500/saveUser",{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({
                name:values.name,
                mail:values.mail   
            })
        })
    }
    const formik = useFormik({
        initialValues: {
            'name' : 'vinod',
            'mail' : 'vinod@gmail.com'
        },
        onSubmit : values => {
            //console.log('saving' + values)
            saveUsers(values);
        }
        
    })
    return (
        <React.Fragment>
        <div>
            <h1>Here we will collect all the VisitorsInfo</h1>
            <form onSubmit={formik.handleSubmit}>   
                <label for="Name"></label>
                <input type="text" id="name" placeholder="name" name='name' onChange={formik.handleChange} value={formik.values.name}></input>
                <br></br>
                <label for="Mail"></label>
                <input type="email" id="mail" placeholder="mail" name='mail' onChange={formik.handleChange} value={formik.values.mail}></input>

                <button type="submit" class="btn">Submit</button>
            </form>

        </div>
        </React.Fragment>
    )
}
export default VisitorsInfo
