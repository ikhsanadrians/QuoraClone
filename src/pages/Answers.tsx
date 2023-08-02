import { useLocation } from 'react-router-dom';

function Answers() {
  const location = useLocation();
  return (
    <div>{ location.pathname }</div>
  )
}

export default Answers