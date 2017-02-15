import React, { Component } from 'react';
import * as Table from 'reactabular-table';
import * as resolve from 'table-resolver';
import { cloneDeep, findIndex } from 'lodash';
import * as edit from 'react-edit';


const rows = [
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
];


const columns = [
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
  <Table.Header className="header" headerRows={resolve.headerRows({ columns })}/>
  <Table.Body rows={resolvedRows} rowKey="id" />
  </Table.Provider>
    );
  }
}
