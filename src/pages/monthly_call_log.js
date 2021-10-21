import React, { Component } from "react";
import { Table, DatePicker } from "antd";
import moment from "moment";

function Home() {
  const columns = [
    {
      title: "Call date",
      dataIndex: "dateTime",
      defaultSortOrder: "descend",
      sorter: (a, b) => (a.dateTime > b.dateTime ? -1 : 1)
    },
    {
      title: "Call type",
      dataIndex: "callType",
      defaultSortOrder: "descend",
      sorter: (a, b) => (a.callType > b.callType ? -1 : 1)
    },
    {
      title: "Other type",
      dataIndex: "otherType",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.otherType.localeCompare(b.otherType)
    },
    {
      title: "Call sub-type",
      dataIndex: "callSubType"
    },
    {
      title: "Need review",
      dataIndex: "needReview"
    },
    {
      title: "HICS activation",
      dataIndex: "HICSActivation"
    },
    {
      title: "AOD",
      dataIndex: "aod"
    },
    {
      title: "",
      dataIndex: "link"
    }
  ];

  const dataSource = [
    {
      key: "1",
      dateTime: "9/26/2021 @ 3:24 PM",
      callType: "Other",
      otherType: "Rapid Covid",
      callSubType: "",
      needReview: "No",
      HICSActivation: "No",
      aod: "Judith Mahoney",
      link: ">"
    },
    {
      key: "2",
      dateTime: "9/26/2021 @ 1:06 PM",
      callType: "Complaint",
      otherType: "",
      callSubType: "",
      needReview: "No",
      HICSActivation: "No",
      aod: "Judith Mahoney",
      link: ">"
    },
    {
      key: "3",
      dateTime: "9/26/2021 @ 11:24 PM",
      callType: "Request for Administrative Guidance",
      otherType: "",
      callSubType: "",
      needReview: "Yes",
      HICSActivation: "No",
      aod: "Judith Mahoney",
      link: ">"
    },
    {
      key: "4",
      dateTime: "9/26/2021 @ 5:24 PM",
      callType: "Code Red Activation",
      otherType: "",
      callSubType: "Inpatient Patient/families",
      needReview: "No",
      HICSActivation: "Yes",
      aod: "Judith Mahoney",
      link: ">"
    }
  ];

  const dateFormat = "MM/DD/YYYY";

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <div>
      <h2>Monthly Call Log Report</h2>
      <label>Begin*</label>
      <DatePicker onChange={onChange} format={dateFormat} />
      <label>End*</label>
      <DatePicker onChange={onChange} format={dateFormat} />
      <button className="button button--primary">Submit</button>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default Home;
