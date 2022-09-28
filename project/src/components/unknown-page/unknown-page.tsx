import {Link} from 'react-router-dom';

export default function UnknownPage(){
  return(
    <div>
      <p>404 Not Found</p>
      <Link to='/'>На главную</Link>
    </div>
  );
}
