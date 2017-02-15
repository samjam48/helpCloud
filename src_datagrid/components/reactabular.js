import React, { Component } from 'react';
import * as Table from 'reactabular-table';
import * as resolve from 'table-resolver';
import { cloneDeep, findIndex } from 'lodash';
import * as edit from 'react-edit';


const rows = [
  {
    id: 100,
    color: 'red',
    name: {
      user: 'Adam',
      dad: 'John'
    }
  },
  {
    id: 101,
    color: 'blue',
    name: {
      user: 'Dam',
      dad: 'Bruce'
    }
  }
];


const columns = [
  {
    property: 'color',
    header: {
      label: 'color',
      formatters: [
        color => (
          <div>
            <input
              type="checkbox"
              onClick={() => console.log('clicked')}
              style={{ width: '50px' }}
            />
            <span>{name}</span>
          </div>
        )
      ]
      ,
      transforms: [
        color => ({
          // show alert when clicked
          onClick: () => alert(`clicked ${color}`)
        })
      ]
    },
    props: {
      style: {
        width: 100
      }
    },
    cell: {
      // format color content
      format: color => <span style={{ color }}>{color}</span>,
      // transforms: [editable(edit.input())]
    }
  },
  {
    header: {
      label: 'Name'
    },
    children: [
      {
        property: 'name.user',
        header: {
          label: 'User'
        },
        props: {
          style: {
            width: 100
          }
        }
      },
      {
        property: 'name.dad',
        header: {
          label: 'Dad'
        },
        props: {
          style: {
            width: 100
          }
        }
      }
    ]
  }

];

export default class Reactabular extends Component {
  render(){

  const resolvedColumns = resolve.columnChildren({ columns });
  const resolvedRows = resolve.resolve({
    columns: resolvedColumns,
    method: resolve.nested
  })(rows);


    return (
  <Table.Provider className="pure-table pure-table-striped" columns={resolvedColumns} >
  <Table.Header componentClass="header" headerRows={resolve.headerRows({ columns })}/>
  <Table.Body rows={resolvedRows} rowKey="id" />
  </Table.Provider>
    );
  }
}
