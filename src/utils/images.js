import api from './api' // the backend
import axios from 'axios' // AWS S3

export const uploadImage = async (file) => {
  const { data } = await api.get(
    `/s3/signed-upload-url/?name=${file.name}&type=${file.type}`,
  )
  const { presigned_url, final_image_url } = data

  await axios.put(presigned_url, file, {
    headers: { 'Content-Type': file.type },
  })

  console.log(final_image_url)

  return final_image_url
}
