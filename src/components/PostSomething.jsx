import Modal from 'react-modal'
import axios from 'axios'
// import { useState } from 'react'
import { store } from '../reduxFolder/store/ConfigureStore'
import { useState } from 'react'

const stores = store()

const PostSomething = ({ postModalFlag, postModalSwitch }) => {
    const [file, setFile] = useState('')
    const [text, setText] = useState('')
    const [errormsg, setErrormsg] = useState('')

    const onFileUpload = (e) => {
        setFile(e.target.files[0])
    }

    const uploadingPost = (e) => {
        e.preventDefault()
        let form = new FormData();
        form.append('photo', file)
        form.append('text', e.target[1].value)
        axios({
            method: 'post',
            url: 'https://writetoslate.herokuapp.com/post/new',
            data: form,
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Authorization': 'Bearer ' + stores.getState().tokens.token,
                'Content-Type': `multipart/form-data`,
            }
        }).then((response) => {
            window.location.reload(false);
            // console.log(response)
            setErrormsg('')
        }).catch((error) => {
            setErrormsg('Please Authonticate')
            console.log('error occured:- ', error + '   thats it')
        })
    }
    return (

        <>
            <div >
                <Modal
                    isOpen={postModalFlag}
                    onRequestClose={postModalSwitch}
                    contentLabel="Example Modal"
                    className="main-modal-post"
                >
                    <div className="button-box-post">
                        <h2> Write something to Slate! </h2>
                    </div>
                    <form action="" className='input-area-post' onSubmit={(e) => uploadingPost(e)}>
                        <input type='file' className='input-image-post' placeholder='Upload an Image!' onChange={(e) => onFileUpload(e)} />
                        <textarea cols="30" rows="10" className='input-field-post' type="text" />
                        {errormsg ? <p className='post-error'>{errormsg} </p> : ''}
                        <button type='submit' className='submit-btn-post'>Post</button>
                    </form>

                </Modal>
            </div>
        </>
    )
}




export default PostSomething