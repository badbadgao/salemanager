import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class MVTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: {}, // eslint-disable-line
    };
  }

  render() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Brand</TableHeaderColumn>
            <TableHeaderColumn>Product Name</TableHeaderColumn>
            <TableHeaderColumn>Quantity</TableHeaderColumn>
            <TableHeaderColumn>Price</TableHeaderColumn>
            <TableHeaderColumn>Total Price</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableRowColumn>Tomptson</TableRowColumn>
            <TableRowColumn>Finsh Oil</TableRowColumn>
            <TableRowColumn>10</TableRowColumn>
            <TableRowColumn>$10.12</TableRowColumn>
            <TableRowColumn>$101.2</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

export default MVTable;
