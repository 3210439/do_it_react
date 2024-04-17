import type {FC} from 'react'
import {Link} from 'react-router-dom'

type HomeProps = {
  title?: string
}

const Home: FC<HomeProps> = ({title}) => {
  return (
    <div>
      <div className="flex bg-gray-200-4">
        <Link to="/">Home</Link>
        <Link to="/welcome" className="ml-4">
          Welcome
        </Link>
        <Link to="/board" className="ml-4">
          Board
        </Link>
      </div>
      <p className="text-xl text-center text-bold">{title ?? 'Home'}</p>
    </div>
  )
}
export default Home
