import SWorkInProgressDisplay from './style';
import WorkInProgress from '../index';
import HomePage from '../../HomePage';

export default function WorkInProgressDisplay() {
  return (
    <>
      <HomePage />
      <SWorkInProgressDisplay>
        <WorkInProgress />
      </SWorkInProgressDisplay>
    </>
  );
}
