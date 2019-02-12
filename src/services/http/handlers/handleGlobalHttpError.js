import Rematch from '~services/rematch'
import { toast } from 'react-toastify'

export default error => {
  if (
    error && Object.prototype.hasOwnProperty.call(error, 'response') && error.response === undefined
  ) {
    // Handle HTTP errors here
    toast.error(error.message)
  }
}
