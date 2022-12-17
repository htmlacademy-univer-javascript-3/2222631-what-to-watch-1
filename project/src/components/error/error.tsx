import {useAppSelector} from '../../hooks';
import './error.css';
import {getError} from '../../store/app-processor/selectors';

function Error(): JSX.Element | null {
  const error = useAppSelector(getError);

  return (error)
    ? <div className='error'>{error}</div>
    : null;
}

export default Error;
