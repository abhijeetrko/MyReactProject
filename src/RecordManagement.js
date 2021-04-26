import React,{useRef,useState} from 'react'
import Button from './Button'
import axios from 'axios'
import './Styles.css'
import { Form, Row, Col} from 'react-bootstrap';
export default function RecordManagement() {

 /*    const fileRef=useRef();
    const clickHandler =() =>{
        fileRef.current.click()
        console.log("Upload Clikced")

    }

    const changeHandler =(e) =>{
        console.log(e.target)
      
        const files=e.target.files;
        console.log(files[0])
    } */
    
/*     return (
        <div>
            <h1>Welcome to File Uploader</h1>
            <div>
            <label htmlFor="file">Upload File</label>
            <input type="file" name="file" id="file" style={{display:'none'}} ref={fileRef} onChange={changeHandler}></input>
            <button name="upload File" class="btn" onClick={clickHandler} onChange={changeHandler} >Upload File</button>
            </div>
        
        </div>
    ) */
    const [file, setFile] = useState(null); // state for storing actual image
    const [previewSrc, setPreviewSrc] = useState(''); // state for storing previewImage
    const [state, setState] = useState({
      title: '',
      description: ''
    });
    const [errorMsg, setErrorMsg] = useState('');
    const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images
    const dropRef = useRef(); // React ref for managing the hover state of droppable area
  
    const handleInputChange = (event) => {
      setState({
        ...state,
        [event.target.name]: event.target.value
      });
    };
  

    const handleInputFile = (event) => {
        event.preventDefault();
        console.log(event.target.files[0]);
        var formData =new FormData()
        formData.append("File",event.target.files[0])
        axios.post('http://localhost:5500/uploadFile',formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
      }
    
        )
    };
  
    const handleOnSubmit = async (event) => {
      event.preventDefault();
    };
  

    return (
        <React.Fragment>
          <Form className="search-form" onSubmit={handleOnSubmit}>
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <Row>
              <Col>
                <Form.Group controlId="title">
                  <Form.Control
                    type="text"
                    name="title"
                    value={state.title || ''}
                    placeholder="Enter title"
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="description">
                  <Form.Control
                    type="text"
                    name="description"
                    value={state.description || ''}
                    placeholder="Enter description"
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
            <Col>
                <Form.Group controlId="File">
                  <Form.Control
                    type="file"
                    name="file"
                    value={state.description || ''}
                    placeholder="Upload Your File"
                    onChange={handleInputFile}
                  />
                </Form.Group>
              </Col>
            </Row>
        
          </Form>
        </React.Fragment>
      );

}
