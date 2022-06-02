import React, { useState, useRef } from 'react'
import styles from '../../styles/File.module.css'

function File({isLoading, error, onHandleChange}) {

    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef();

    const handelFileChange = (event) => {
        event.preventDefault();
        let fileInstance = event.target.files[0];
        setSelectedFile(fileInstance);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append('file', selectedFile);
        onHandleChange(data);
        fileInputRef.current.value= null;
    }


  return (
    <>
        <h2 className={styles.heading}>File Upload</h2>
        <div className={styles.card}>
            <form>
                <input type="file" ref={fileInputRef} name="file" onChange={(event) => handelFileChange(event)} />
                <br />
                <button
                    onClick={(event) => handleSubmit(event)}
                    disabled={isLoading}
                    className={styles.btn}
                >
                    {isLoading ? "Loading..." : "Upload File"}

                </button>

            </form>
        </div>
        <div className={styles.message}>
            {error !== null ? error : " "}
        </div>
    </>
  )
}

export default File