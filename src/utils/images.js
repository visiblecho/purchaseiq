import api from './api' // the backend
import axios from 'axios' // AWS S3

export const uploadImage = async (file) => {
  const { data } = await api.get(
    `/uploads/presign/?name=${file.name}&type=${file.type}`,
  )

  const { presigned_url, upload } = data

  await axios.put(presigned_url, file, {
    headers: { 'Content-Type': file.type },
  })

  await confirmUpload(upload.id)
  return showUpload(upload.id)
}

export const confirmUpload = async (uploadId) => {
  await api.post('uploads/confirm-status/', {
    upload_id: uploadId,
    status_type: 'upload',
  })
}

// Not used in frontend
export const confirmAnalysis = async (uploadId) => {
  await api.post('uploads/confirm-status/', {
    upload_id: uploadId,
    status_type: 'analysis',
  })
}

export const listUploads = async () => {
  const res = await api.get('uploads/')
  return res
}

export const showUpload = async (uploadId) => {
  const res = await api.get(`uploads/${uploadId}/`)
  return res
}
