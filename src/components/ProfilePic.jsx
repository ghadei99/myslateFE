import Modal from 'react-modal'
import axios from 'axios'
import { store } from '../reduxFolder/store/ConfigureStore'
import { useState } from 'react'
import { setProfilepicModal } from "../reduxFolder/actions/ProfilePicModal"
import { useEffect } from 'react'

const stores = store()

const ProfilePicUpload = ({ postModalFlag, postModalSwitch }) => {
    const [file, setFile] = useState('')
    const [error, setError] = useState('')
    const onFileUpload = (e) => {
        setFile(e.target.files[0])
    }

    const uploadingPost = (e) => {
        e.preventDefault()
        if (file) {
            let form = new FormData();
            form.append('avatar', file)
            axios({
                method: 'post',
                url: 'https://writetoslate.herokuapp.com/users/me/avatar',
                data: form,
                headers: {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'Authorization': 'Bearer ' + stores.getState().tokens.token,
                    'Content-Type': `multipart/form-data`,
                }
            }).then((response) => {
                setError('')
                window.location.reload(false);
                // console.log(response)
            }).catch((error) => {
                setError('Please Authenticate !')
            })
        } else {
            setError('Please select an image !')
        }
    }
    return (

        <>
            <div >
                <Modal
                    isOpen={postModalFlag}
                    onRequestClose={postModalSwitch}
                    contentLabel="Example Modal"
                    className="main-modal-profilepic"
                >
                    <div className="button-box-profilepic">
                        <h2> Upload Profile Pic </h2>
                    </div>
                    <form action="" className='input-area-profilepic' onSubmit={(e) => uploadingPost(e)}>
                        <input type='file' className='input-image-profilepic' placeholder='Upload an Image!' onChange={(e) => onFileUpload(e)} />
                        {error ? <p className='profilepic-error'>{error}</p> : ''}
                        <button type='submit' className='submit-btn-profilepic'>Upload</button>
                    </form>

                </Modal>
            </div>
        </>
    )
}


export default ProfilePicUpload;