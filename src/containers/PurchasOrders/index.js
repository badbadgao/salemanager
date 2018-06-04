// @flow

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { map, keys } from 'lodash';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import { getPurchaseOrders } from 'reducers/purchaseorders/actions';

type Props = {
  tableData?: Object,
  actions: Object,
};

class PurchaseOrders extends React.Component<Props> {
  static defaultProps = {
    tableData: {},
  };

  componentWillMount() {
    this.props.actions.getPurchaseOrders();
  }

  render() {
    const tableRowsComponent = map(this.props.tableData.data, (rowData) => {
      const RowCommponent = map(keys(rowData), (keyValue) => {
        if (keyValue !== 'id') {
          return (
            <TableRowColumn key={keyValue}>
              {rowData[keyValue]}
            </TableRowColumn>
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
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Brand </TableHeaderColumn>
              <TableHeaderColumn>Product Name</TableHeaderColumn>
              <TableHeaderColumn>Quantity</TableHeaderColumn>
              <TableHeaderColumn>Price</TableHeaderColumn>
              <TableHeaderColumn>Total Price</TableHeaderColumn>
            </TableRow>
          </TableHeader>
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
