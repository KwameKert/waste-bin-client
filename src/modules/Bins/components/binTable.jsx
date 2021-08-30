import React from "react";
import Table from "../../../components/common/table";
import TimeAgo from "react-timeago";
import DropDownParent from "../../../components/common/Dropdowncustom";

const BinTable = ({ events, sortColumn, onSort, editEvent }) => {
  let columns = [
    {
      path: "id",
      label: "#",
    },
    {
      path: "name",
      label: "Name",
    },
    {
      path: "status",
      label: "Status",
      content: (event) => (
        <span
          className={
            event.status === "active"
              ? "badge bg-primary text-white"
              : "badge bg-secondary text-white"
          }
        >
          {event.status}
        </span>
      ),
    },
    {
      path: "createdAt",
      label: "Created On",
      content: (event) => <TimeAgo date={event.createdAt} />,
    },
    {
      path: "action",
      label: "Action",
      content: (event) => {
        return (
          <DropDownParent>
            <a
              className="dropdown-item"
              //onClick={(event) => editEvent(event)}
            >
              View
            </a>
            <a className="dropdown-item" onClick={() => editEvent(event)}>
              Edit
            </a>
          </DropDownParent>
        );
      },
    },
  ];
  return (
    <Table
      columns={columns}
      data={events}
      sortColumn={sortColumn}
      onSort={onSort}
    />
  );
};

export default BinTable;
