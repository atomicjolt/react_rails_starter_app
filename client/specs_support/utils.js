import TestUtils from 'react-addons-test-utils';
import _ from 'lodash';

export default {

  findTextField(textFields, labelText) {
    return _.find(textFields, (field) => {
      const label = TestUtils.findRenderedDOMComponentWithTag(field, 'label');
      return label.getDOMNode().textContent.toLowerCase() === labelText;
    });
  },
};
