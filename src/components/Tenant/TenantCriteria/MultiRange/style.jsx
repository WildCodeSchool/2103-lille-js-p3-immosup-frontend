import styled from 'styled-components';

const SMultiRangeSlider = styled.div`
  background-color: #ffffff;

  .container {
    height: 3vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slider {
    position: relative;
    width: 30vw;
  }

  .sliderTrack,
  .sliderRange,
  .sliderLeft-value,
  .sliderRight-value {
    position: absolute;
  }

  .sliderTrack,
  .sliderRange {
    border-radius: 3px;
    height: 5px;
  }

  .sliderTrack {
    background-color: #dcdcdc;
    width: 100%;
    z-index: 1;
  }

  .sliderRange {
    background-color: #109fe6;
    z-index: 2;
  }

  .sliderLeft-value,
  .sliderRight-value {
    color: black;
    font-size: 12px;
    margin-top: 20px;
  }

  .sliderLeft-value {
    left: 6px;
  }

  .sliderRight-value {
    right: -4px;
  }

  /* Removing the default appearance */
  .thumb,
  .thumb::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  .thumb {
    pointer-events: none;
    position: absolute;
    height: 0;
    width: 30vw;
    outline: none;
  }

  .thumb--left {
    z-index: 3;
  }

  .thumb--right {
    z-index: 4;
  }

  /* For Chrome browsers */
  .thumb::-webkit-slider-thumb {
    background-color: #109fe6;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ffffff;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }

  /* For Firefox browsers */
  .thumb::-moz-range-thumb {
    background-color: ##109fe6;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ffffff;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
`;
export default SMultiRangeSlider;
