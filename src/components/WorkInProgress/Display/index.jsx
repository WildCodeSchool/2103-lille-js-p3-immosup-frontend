import PropTypes from 'prop-types';
import SWorkInProgressDisplay from './style';
import WorkInProgress from '../index';
import HomePage from '../../HomePage';

const WorkInProgressDisplay = ({ landlord }) => {
  return (
    <>
      <HomePage />
      <SWorkInProgressDisplay>
        <WorkInProgress landlord={landlord} />
      </SWorkInProgressDisplay>
    </>
  );
};

WorkInProgressDisplay.propTypes = {
  landlord: PropTypes.bool,
};

WorkInProgressDisplay.defaultProps = {
  landlord: false,
};

export default WorkInProgressDisplay;
