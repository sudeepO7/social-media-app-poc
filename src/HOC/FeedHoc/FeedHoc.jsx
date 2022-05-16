import Topbar from "../../components/Topbar/Topbar";

export default function FeedHoc({ children }) {
  return (
    <>
        <Topbar />
        {
            children
        }
    </>
  )
}
