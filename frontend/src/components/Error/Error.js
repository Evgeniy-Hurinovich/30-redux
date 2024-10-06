import { ToastContainer, toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'
import { clearError, selectErrorMessage } from '../../redux/slices/errorSlice'
import { useEffect } from 'react'

const Error = () => {
  //   toast.info('Test Massage')
  //   toast.warning('Test Massage')
  const errorMessge = useSelector(selectErrorMessage)
  const dispatch = useDispatch()
  useEffect(() => {
    if (errorMessge) {
      toast.info(errorMessge)
      dispatch(clearError())
    }
  }, [errorMessge, dispatch])
  return <ToastContainer position="top-right" autoClose={2000} />
}

export default Error
