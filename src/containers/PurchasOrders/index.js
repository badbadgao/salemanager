// @flow

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { map, keys } from 'lodash';
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
} from '@material-ui/core/';

import { getPurchaseOrders } from 'reducers/purchaseorders/actions';

type Props = {
  tableData?: Object,
  actions: Object,
};

class PurchaseOrders extends React.Component<Props> {
  static defaultProps = {
    tableData: {
      data: [],
    },
  };

  componentWillMount() {
    this.props.actions.getPurchaseOrders();
  }

  render() {
    const tableRowsComponent = map(this.props.tableData.data, (rowData) => {
      const RowCommponent = map(keys(rowData), (keyValue) => {
        if (keyValue !== 'id') {
          return (
            <TableCell key={keyValue}>
              {rowData[keyValue]}
            </TableCell>
          );
        }

        return undefined;
      });

      return (
        <TableRow key={rowData.id}>
          {RowCommponent}
        </TableRow>
      );
    });

    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Brand </TableCell>
              <TableCell>Category Type </TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Total Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRowsComponent}
          </TableBody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tableData: state.purchaseorders.tableData,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getPurchaseOrders,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseOrders);
