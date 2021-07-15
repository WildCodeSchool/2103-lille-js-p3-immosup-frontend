import PropTypes from 'prop-types';
import SPersonMatch from './style';

function PersonMatch({ lastname, firstname, avatarUrl }) {
  return (
    <SPersonMatch>
      <div>
        <img src={avatarUrl} alt="" />
        {lastname} {firstname}
        <p />
      </div>
    </SPersonMatch>
  );
}

PersonMatch.propTypes = {
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,

  avatarUrl: PropTypes.string.isRequired,
};

export default PersonMatch;
