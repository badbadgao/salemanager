// @flow

import * as React from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
} from '@material-ui/core';

import Article from './Article';

type Props = {
  name: string,
  data: string,
};

type State = {
  count: number,
};

export default class MVTable extends React.Component<Props, State> {
  static defaultProps = {
    data: 'aaksd',
  };

  state = {
    count: 2,
  };

  render() {
    return (
      <div>
        <Article
          title={234}
        />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Brand {this.props.name}</TableCell>
              <TableCell>Product Name{this.props.data}</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Total Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Tomptson</TableCell>
              <TableCell>{this.state.count}</TableCell>
              <TableCell>10</TableCell>
              <TableCell>$10.12</TableCell>
              <TableCell>$101.2</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}
