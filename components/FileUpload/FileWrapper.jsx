import React, {useState} from 'react'
import { uploadFileService, exportData } from '../../helper/fileUploadService';
import File from './File';

function FileWrapper() {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fileUploadToServer = async (formData) => {

        setIsLoading(true);

        uploadFileService(formData)
            .then(res => {
                exportData(res.data.data);
                setIsLoading(false);
            })
            .catch((e) => {
                setError(e.message);
                setIsLoading(false);
            });
    }

    return (
        <>
            <File
                error={error}
                isLoading={isLoading}
                onHandleChange={fileUploadToServer}
            />
        </>
    )
}

export default FileWrapper