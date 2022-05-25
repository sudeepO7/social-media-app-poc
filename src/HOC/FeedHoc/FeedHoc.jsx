import Topbar from "../../components/Topbar/Topbar"
import { useContext } from 'react'
import { Navigate } from "react-router-dom"
import { AuthContext } from '../../context/AuthContext'

export default function FeedHoc({ children }) {
  const { user } = useContext(AuthContext);
  const CommonFeed = () => (
    <>
        <Topbar />
        {
            children
        }
    </>
  );
  return (
    <>
        {
            user ? <CommonFeed /> : <Navigate to="/login" />
        }
    </>
  )
}
