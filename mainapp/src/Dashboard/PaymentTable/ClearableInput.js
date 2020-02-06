import React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
  { key: 1, text: "All", value: 1 },
  { key: 2, text: "Reconciled", value: 2 },
  { key: 3, text: "Un- Reconciled", value: 3 },
  { key: 4, text: "Settled", value: 4 },
  { key: 4, text: "Unsettled", value: 5 }
];

const ClearableInput = () => <Dropdown clearable options={options} selection />;

export default ClearableInput;
