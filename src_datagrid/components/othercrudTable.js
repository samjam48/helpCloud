import React, { Component } from 'react';
import * as Table from 'reactabular-table';
import * as resolve from 'table-resolver';
import { cloneDeep, findIndex } from 'lodash';
import * as edit from 'react-edit';


// let rows = []
//   {
//     id: 1,
//     bookingDetails: {
//       jobRef: 'JR1311',
//       sector: 'delivery',
//       type: 'scooter',
//       status: 'complete',
//       client: 'Eat-Last',
//       postcode: 'ne8 4hh',
//       date: '03/01/17',
//       start: '08:00',
//       hours: '4.5',
//       type: 'scooter',
//       bookingRate: '£10.00',
//       bookingTotal: '£45.00'
//     },
//     gap1: '',
//     freelancerDetails: {
//         name: 'Bruce Bruce',
//         type: 'car',
//         hours: '4.5',
//         freelancerRate: '£9.00',
//         status: 'complete',
//         statusDate: '03/01/17',
//     },
//     gap2: '',
//     clientInvoice: {
//        status: 'INV1612090082',
//        statusDate: '11/12/16'
//     },
//     gap3: '',
//     other: {
//        comments: 'such a great worker'
//     }
//   },{
//     id: 2,
//     bookingDetails: {
//       jobRef: 'JR1311',
//       sector: 'delivery',
//       type: 'scooter',
//       status: 'complete',
//       client: 'Eat-Last',
//       postcode: 'ne8 4hh',
//       date: '03/01/17',
//       start: '08:00',
//       hours: '4.5',
//       type: 'scooter',
//       bookingRate: '£10.00',
//       bookingTotal: '£45.00'
//     },
//     gap1: '',
//     freelancerDetails: {
//         name: 'Bruce Bruce',
//         type: 'car',
//         hours: '4.5',
//         freelancerRate: '£9.00',
//         status: 'complete',
//         statusDate: '03/01/17',
//     },
//     gap2: '',
//     clientInvoice: {
//        status: 'INV1612090082',
//        statusDate: '11/12/16'
//     },
//     gap3: '',
//     other: {
//        comments: 'such a great worker'
//     }
//   },{
//     id: 3,
//     bookingDetails: {
//       jobRef: 'JR1311',
//       sector: 'delivery',
//       type: 'scooter',
//       status: 'complete',
//       client: 'Eat-Last',
//       postcode: 'ne8 4hh',
//       date: '03/01/17',
//       start: '08:00',
//       hours: '4.5',
//       type: 'scooter',
//       bookingRate: '£10.00',
//       bookingTotal: '£45.00'
//     },
//     gap1: '',
//     freelancerDetails: {
//         name: 'Bruce Bruce',
//         type: 'car',
//         hours: '4.5',
//         freelancerRate: '£9.00',
//         status: 'complete',
//         statusDate: '03/01/17',
//     },
//     gap2: '',
//     clientInvoice: {
//        status: 'INV1612090082',
//        statusDate: '11/12/16'
//     },
//     gap3: '',
//     other: {
//        comments: 'such a great worker'
//     }
//   }
// ];

// let columns = []
// const columns = [
//   {
//     header: {
//       label: 'Booking Details'
//     },
//     children: [
//       {
//         property: 'bookingDetails.jobRef',
//         header: {
//           label: 'Job Ref'
//         }
//       },
//       {
//         property: 'bookingDetails.sector',
//         header: {
//           label: 'Sector'
//         }
//       },
//       {
//         property: 'bookingDetails.type',
//         header: {
//           label: 'Type'
//         }
//       },
//       {
//         property: 'bookingDetails.status',
//         header: {
//           label: 'Status'
//         },
//         cell: {
//             transforms: [
//                 (value, extra) => editable(edit.input())(value, extra, {
//                 className: extra.rowData.edited && 'edited'
//                 })
//             ]
//         }
//       },
//       {
//         property: 'bookingDetails.client',
//         header: {
//           label: 'Client'
//         },
//         props: {
//             style: { minWidth: 100, width: 300 }
//         }
//       },
//       {
//         property: 'bookingDetails.postcode',
//         header: {
//           label: 'Postcode'
//         }
//       },
//       {
//         property: 'bookingDetails.date',
//         header: {
//           label: 'Date'
//         }
//       },
//       {
//         property: 'bookingDetails.start',
//         header: {
//           label: 'Start'
//         }
//       },
//       {
//         property: 'bookingDetails.hours',
//         header: {
//           label: 'Hours'
//         }
//       },
//       {
//         property: 'bookingDetails.bookingRate',
//         header: {
//           label: 'Rate £/h'
//         }
//       },
//       {
//         property: 'bookingDetails.bookingTotal',
//         header: {
//           label: 'Booking Total'
//         }
//       }
//     ]
//   },
//   {header: {
//       label: ''
//     }
//   },
//   {
//     header: {
//       label: 'Freelancer Details'
//     },
//     children: [
//       {
//         property: 'freelancerDetails.name',
//         header: {
//           label: 'Name'
//         },
//         props: {
//             style: { minWidth: 150, width: 300 }
//         }
//       },
//       {
//         property: 'freelancerDetails.type',
//         header: {
//           label: 'Type'
//         }
//       },
//       {
//         property: 'freelancerDetails.hours',
//         header: {
//           label: 'hours'
//         }
//       },
//       {
//         property: 'freelancerDetails.freelancerRate',
//         header: {
//           label: 'Rate £/h'
//         }
//       },
//       {
//         property: 'freelancerDetails.status',
//         header: {
//           label: 'Status'
//         }
//       },
//       {
//         property: 'freelancerDetails.statusDate',
//         header: {
//           label: 'Status Date'
//         }
//       }
//     ]
//   },
//   {header: {
//       label: ''
//     }
//   },
//   {
//     header: {
//       label: 'Client Invoice'
//     },
//     children: [
//       {
//         property: 'clientInvoice.status',
//         header: {
//           label: 'Status'
//         }
//       },
//       {
//         property: 'clientInvoice.statusDate',
//         header: {
//           label: 'Status Date'
//         }
//       }
//     ]
//   },
//   {header: {
//       label: ''
//     }
//   },
//   {
//     header: {
//       label: 'Other'
//     },
//     children: [
//       {
//         property: 'other.comments',
//         header: {
//           label: 'Comments'
//         },
//         props: {
//             style: { minWidth: 250, width: 350 }
//         }
//       }
//     ]
//   }
// ];



export default class Reactabular extends Component {
  constructor(props) {
    super(props);

    const editable = edit.edit({
      // Determine whether the current cell is being edited or not.
      isEditing: ({ columnIndex, rowData }) => columnIndex === rowData.editing,

      // The booking requested activation, mark the current cell as edited.
      // IMPORTANT! If you stash the rows at this.state.rows, DON'T
      // mutate it as that will break Table.Body optimization check.
      onActivate: ({ columnIndex, rowData }) => {
        const index = findIndex(this.state.rows, { id: rowData.id });
        const rows = cloneDeep(this.state.rows);

        rows[index].editing = columnIndex;

        this.setState({ rows });
      },

      // Capture the value when the booking has finished and update
      // application state.
      onValue: ({ value, rowData, property }) => {
        const index = findIndex(this.state.rows, { id: rowData.id });
        const rows = cloneDeep(this.state.rows);

        rows[index][property] = value;
        rows[index].editing = false;

        // Optional: capture the fact that a field was edited for visualization
        rows[index].edited = true;

        this.setState({ rows });
      }
    });

        this.state = {
      editedCell: null, // Track the edited cell somehow
      columns: [
  {
    header: {
      label: 'Booking Details'
    },
    children: [
      {
        property: 'bookingDetails.jobRef',
        header: {
          label: 'Job Ref'
        }
      },
      {
        property: 'bookingDetails.sector',
        header: {
          label: 'Sector'
        }
      },
      {
        property: 'bookingDetails.type',
        header: {
          label: 'Type'
        }
      },
      {
        property: 'bookingDetails.status',
        header: {
          label: 'Status'
        },
        cell: {
            transforms: [
                (value, extra) => editable(edit.input())(value, extra, {
                className: extra.rowData.edited && 'edited'
                })
            ]
        }
      },
      {
        property: 'bookingDetails.client',
        header: {
          label: 'Client'
        },
        props: {
            style: { minWidth: 100, width: 300 }
        }
      },
      {
        property: 'bookingDetails.postcode',
        header: {
          label: 'Postcode'
        }
      },
      {
        property: 'bookingDetails.date',
        header: {
          label: 'Date'
        }
      },
      {
        property: 'bookingDetails.start',
        header: {
          label: 'Start'
        }
      },
      {
        property: 'bookingDetails.hours',
        header: {
          label: 'Hours'
        }
      },
      {
        property: 'bookingDetails.bookingRate',
        header: {
          label: 'Rate £/h'
        }
      },
      {
        property: 'bookingDetails.bookingTotal',
        header: {
          label: 'Booking Total'
        }
      }
    ]
  },
  {header: {
      label: ''
    }
  },
  {
    header: {
      label: 'Freelancer Details'
    },
    children: [
      {
        property: 'freelancerDetails.name',
        header: {
          label: 'Name'
        },
        props: {
            style: { minWidth: 150, width: 300 }
        }
      },
      {
        property: 'freelancerDetails.type',
        header: {
          label: 'Type'
        }
      },
      {
        property: 'freelancerDetails.hours',
        header: {
          label: 'hours'
        }
      },
      {
        property: 'freelancerDetails.freelancerRate',
        header: {
          label: 'Rate £/h'
        }
      },
      {
        property: 'freelancerDetails.status',
        header: {
          label: 'Status'
        }
      },
      {
        property: 'freelancerDetails.statusDate',
        header: {
          label: 'Status Date'
        }
      }
    ]
  },
  {header: {
      label: ''
    }
  },
  {
    header: {
      label: 'Client Invoice'
    },
    children: [
      {
        property: 'clientInvoice.status',
        header: {
          label: 'Status'
        }
      },
      {
        property: 'clientInvoice.statusDate',
        header: {
          label: 'Status Date'
        }
      }
    ]
  },
  {header: {
      label: ''
    }
  },
  {
    header: {
      label: 'Other'
    },
    children: [
      {
        property: 'other.comments',
        header: {
          label: 'Comments'
        },
        props: {
            style: { minWidth: 250, width: 350 }
        }
      }
    ]
  }
],
      rows: [
  {
    id: 1,
    bookingDetails: {
      jobRef: 'JR1311',
      sector: 'delivery',
      type: 'scooter',
      status: 'complete',
      client: 'Eat-Last',
      postcode: 'ne8 4hh',
      date: '03/01/17',
      start: '08:00',
      hours: '4.5',
      type: 'scooter',
      bookingRate: '£10.00',
      bookingTotal: '£45.00'
    },
    gap1: '',
    freelancerDetails: {
        name: 'Bruce Bruce',
        type: 'car',
        hours: '4.5',
        freelancerRate: '£9.00',
        status: 'complete',
        statusDate: '03/01/17',
    },
    gap2: '',
    clientInvoice: {
       status: 'INV1612090082',
       statusDate: '11/12/16'
    },
    gap3: '',
    other: {
       comments: 'such a great worker'
    }
  },{
    id: 2,
    bookingDetails: {
      jobRef: 'JR1311',
      sector: 'delivery',
      type: 'scooter',
      status: 'complete',
      client: 'Eat-Last',
      postcode: 'ne8 4hh',
      date: '03/01/17',
      start: '08:00',
      hours: '4.5',
      type: 'scooter',
      bookingRate: '£10.00',
      bookingTotal: '£45.00'
    },
    gap1: '',
    freelancerDetails: {
        name: 'Bruce Bruce',
        type: 'car',
        hours: '4.5',
        freelancerRate: '£9.00',
        status: 'complete',
        statusDate: '03/01/17',
    },
    gap2: '',
    clientInvoice: {
       status: 'INV1612090082',
       statusDate: '11/12/16'
    },
    gap3: '',
    other: {
       comments: 'such a great worker'
    }
  },{
    id: 3,
    bookingDetails: {
      jobRef: 'JR1311',
      sector: 'delivery',
      type: 'scooter',
      status: 'complete',
      client: 'Eat-Last',
      postcode: 'ne8 4hh',
      date: '03/01/17',
      start: '08:00',
      hours: '4.5',
      type: 'scooter',
      bookingRate: '£10.00',
      bookingTotal: '£45.00'
    },
    gap1: '',
    freelancerDetails: {
        name: 'Bruce Bruce',
        type: 'car',
        hours: '4.5',
        freelancerRate: '£9.00',
        status: 'complete',
        statusDate: '03/01/17',
    },
    gap2: '',
    clientInvoice: {
       status: 'INV1612090082',
       statusDate: '11/12/16'
    },
    gap3: '',
    other: {
       comments: 'such a great worker'
    }
  }
]
    };
  }

  render(){

  const resolvedColumns = resolve.columnChildren({ columns });
  const resolvedRows = resolve.resolve({
    columns: resolvedColumns,
    method: resolve.nested
  })(rows);


    return (
  <Table.Provider className="pure-table pure-table-striped" columns={resolvedColumns} >
  <Table.Header className="header" headerRows={resolve.headerRows({ columns })}/>
  <Table.Body rows={resolvedRows} rowKey="id" />
  </Table.Provider>
    );
  }
}
