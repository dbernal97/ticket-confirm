/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.header #header-title {
  background-color: #072146;
}
.header section {
  text-align: center;
}

.main-container {
  padding: 5px;
}
.main-container .info-section p {
  margin: 10px 0;
}
.main-container .info-section #btn {
  margin-top: 15px;
}
.main-container .panel-section #panel-title {
  font-size: 18px;
}
.main-container .panel-section #bold-text {
  margin-top: 15px;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
}

@media screen and (min-width: 800px) {
  .main-container {
    display: flex;
    width: 100%;
    padding-left: 100px;
  }
  .main-container .info-section {
    margin-top: 25px;
    width: 45%;
  }
  .main-container .panel-section {
    width: 35%;
    margin-left: 50px;
  }
}
`;