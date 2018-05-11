// @flow

import * as React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import Article from './Article';

type Props = {
  name: string,
  data: string,
};

type State = {
  count: number,
};

export default class MVTable extends React.Component<Props, State> {
  state = {
    count: 2,
  };

  static defaultProps = {
    data: "aaksd",
  };

  render() {
    return (
      <div>
        <Article
          title={234}
        />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Brand {this.props.name}</TableHeaderColumn>
              <TableHeaderColumn>Product Name</TableHeaderColumn>
              <TableHeaderColumn>Quantity</TableHeaderColumn>
              <TableHeaderColumn>Price</TableHeaderColumn>
              <TableHeaderColumn>Total Price</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn>Tomptson</TableRowColumn>
              <TableRowColumn>{this.state.count}</TableRowColumn>
              <TableRowColumn>10</TableRowColumn>
              <TableRowColumn>$10.12</TableRowColumn>
              <TableRowColumn>$101.2</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}
