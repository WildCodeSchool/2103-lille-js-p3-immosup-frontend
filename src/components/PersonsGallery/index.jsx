import PropTypes from 'prop-types';
import Person from '../Person/index';
// import { useEffect, useState } from 'react';
// import request from '../../utilities/request';

function PersonsGallery({ persons }) {
  // useEffect(() => {
  //   request({
  //     method: 'get',
  //     url: '/users',
  //   }).then(({ data }) => {
  //     setPersons(data);
  //   });
  // }, []);

  return (
    <>
      <ul>
        {persons.map((person) => {
          return <Person key={person.id} {...person} />;
        })}
      </ul>
    </>
  );
}
PersonsGallery.propTypes = {
  persons: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default PersonsGallery;
