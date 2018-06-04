import * as React from 'react';
import { TableRowColumn } from 'material-ui/Table';

type Props = {
  value?: Node,
  node?: React.node,
};

export default function MVTableRowColumn(props: Props) {
  const tableRowColumn = props.node
    ? (
      <TableRowColumn >
        {props.node}
      </TableRowColumn>
    )
    : (
      <TableRowColumn>
        {props.value}
      </TableRowColumn>
    );

  return (
    <div>
      {tableRowColumn}
    </div>
  );
}

MVTableRowColumn.defaultProps = {
  value: {},
  node: undefined,
};
