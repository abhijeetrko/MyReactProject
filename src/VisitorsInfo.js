import React from 'react'
import {useFormik} from 'formik'

function VisitorsInfo() {


    const formik = useFormik({
        initialValues: {
            'name' : '',
            'mail' : ''
        }
    })

    console.log(formik.values , 'Form Valyues')
    return (
        <React.Fragment>
        <div>
            <h1>Here we will collect all the VisitorsInfo</h1>
            <form>
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
