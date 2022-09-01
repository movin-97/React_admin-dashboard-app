export const Columns = [
  {
    Header: () => <input type="checkbox" />,
    id:'id',
    accessor: () => <input type="checkbox" className="checkbox"/>,
  },
  {
    Header: "Full Name",
    accessor: 'image',
    Cell: ({value}) => (
        <img
        src={value}
        alt="images"
        width={30}
        height={30}
        className="rounded-circle"
      />
    
    ),
  },
  {
    Header: "Position",
    accessor: 'firstName' ,
  },

  {
    Header: "Date Of Birth",
    accessor: "birthDate",
  },
  {
    Header: "Exp",
    accessor: "weight",
  },
  {
    Header: "Skills",
    accessor: "domain",
  },
  {
    Header: "RpH,$",
    accessor: "height",
  },
  {
    Header: "Date Of Birth",
    accessor: "ssn",
  },
  {
    Header: "Exp",
    accessor: "age",
  },
  {
    Header: "Skills",
    accessor: "eyeColor",
  },
];
