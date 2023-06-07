import React, { useState } from "react";
import {
  Container,
  Button,
  Form,
  Row,
  Col,
  Modal,
  Table,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  setCountry,
  setFromCities,
  setCityList,
  setToCities,
} from "./flightSlice";
const data = {
  india: ["mumbai", "delhi", "chennai"],
  usa: ["california", "alaska", "new york"],
  canada: ["alberta", "manitoba", "nunavut"],
};
const tableData = [
  {
    srNo: 1,
    flightName: "Air India",
    from: "mumbai",
    to: "delhi",
    price: 9562,
  },
  {
    srNo: 2,
    flightName: "American Airlines",
    from: "mumbai",
    to: "delhi",
    price: 1025,
  },
  {
    srNo: 3,
    flightName: "AirFrance",
    from: "mumbai",
    to: "delhi",
    price: 1226,
  },
];

const Booking = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [country, setCountry] = useState("");
  //   const [countries, setCountries] = useState("");
  // const [cityList, setCityList] = useState([]);
  // const [toCities, setToCities] = useState("");
  // const [fromCities, setFromCities] = useState("");
  // const [showValue, setShowValue] = useState(false);
  const [dropdown, setDropdown] = useState("");
  const [display, setDisplay] = useState(false);

  // new states created today
  const [searchData, setSearchData] = useState("");
  const [results, setResults] = useState([]);
  const [value, setValue] = useState("");
  const [debounceTime, setDebounceTime] = useState(null);

  const country = useSelector((state) => state.counter.country.payload);
  // console.log("Redux Country", country);
  const fromCities = useSelector((state) => state.counter.fromCities.payload);
  let cityList = useSelector((state) => state.counter.cityList.payload);
  if (cityList === "") {
    cityList = [];
  }

  const toCities = useSelector((state) => state.counter.toCities.payload);
  console.log("redux citylist", cityList);
  const dispatch = useDispatch();

  const debounceSearch = (id, debounceTimeout) => {
    console.log("value 1", id);

    if (debounceTime) {
      clearTimeout(debounceTime);
    }
    const timeOut = setTimeout(() => {
      console.log("value ", id);
      setValue(id);
    }, debounceTimeout);
    setDebounceTime(timeOut);
  };

  // const handleClick = () => {
  //   setShowValue(true);
  // };
  // console.log("value upted or no", showValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (dropdown === "Return") {
    //   setDisplay(true);
    // }
  };
  console.log(display);
  console.log("values of journey", dropdown);
  return (
    <div className=" mt-11">
      <Container fluid>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} lg="6" className="mb-3 ml-[350px]">
              <Form.Label>Journey type</Form.Label>

              <Form.Select
                onChange={(e) => {
                  setDropdown(e.target.value);
                  if (e.target.value === "Return") {
                    setDisplay(true);
                  } else {
                    setDisplay(false);
                  }
                }}
              >
                <option>Single</option>
                <option>Return</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} lg="4" className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            {/* <Form.Group as={Col} lg="4" className="mb-3">
              <Form.Label> Select Country</Form.Label>
              <Form.Select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option>Select from below</option>
                {Object.keys(data).map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </Form.Select>
            </Form.Group> */}

            {/* search result for trying  */}

            <Form.Group as={Col} lg="4" className="mb-3">
              <Form.Label>Search Bar</Form.Label>
              <Form.Control
                value={country}
                type="search"
                placeholder="Search for a country"
                onChange={(e) => {
                  setSearchData(e.target.value);
                  debounceSearch(e.target.value, 500);
                  if (e.target.value === "") {
                    setResults([]);
                  } else {
                    const results = Object.keys(data).filter((key) =>
                      key.toLowerCase().includes(e.target.value.toLowerCase())
                    );
                    setResults(results);
                  }
                }}
              />
              <div className=" h-11 w-[490px] bg-white rounded-lg">
                {results.map((item, index) => {
                  return (
                    <p
                      className="cursor-pointer"
                      onClick={(e) => {
                        dispatch(setCountry(item));
                        // setSearchData(item);
                        setResults([]);
                      }}
                      value={item}
                      key={index}
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
            </Form.Group>

            <Form.Group as={Col} lg="4" className="mb-3">
              <Form.Label>From</Form.Label>
              <Form.Select
                value={fromCities}
                onChange={(e) => {
                  dispatch(setFromCities(e.target.value));
                  dispatch(
                    setCityList(
                      data[country].filter((item) => item !== e.target.value)
                    )
                  );
                }}
                as={Col}
                lg="6"
              >
                <option>Select from below</option>
                {data[country]?.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            {/* this date will be optional apply conditional rendering to make it
          visible or not according to return or single */}

            {dropdown === "Return" && (
              <Form.Group as={Col} lg="4" className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            )}

            <Form.Group as={Col} lg="4" className="mb-3">
              <Form.Label>To</Form.Label>
              <Form.Select
                value={toCities}
                onChange={(e) => dispatch(setToCities(e.target.value))}
              >
                <option>Select from below</option>
                {cityList?.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Row>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <Row>
            <Button
              as={Col}
              lg="6"
              className="ml-[350px]"
              variant="primary"
              type="submit"
              onClick={handleShow}
            >
              Submit
            </Button>
          </Row>
        </Form>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>Flight Details:-</Modal.Header>
          <Modal.Body>
            <h5>From</h5>
            <Table responsive>
              <thead>
                <tr>
                  <th>SR NO</th>
                  <th>Flight Name</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((tableData, index) => {
                  return (
                    <tr>
                      <td>{tableData.srNo}</td>
                      <td>{tableData.flightName}</td>
                      <td>{fromCities}</td>
                      <td>{toCities}</td>
                      <td>{tableData.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <br />
            {display && (
              <div>
                <h5>To</h5>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>SR NO</th>
                      <th>Flight Name</th>
                      <th>To</th>
                      <th>From</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((tableData, index) => {
                      return (
                        <tr>
                          <td>{tableData.srNo}</td>
                          <td>{tableData.flightName}</td>
                          <td>{toCities}</td>
                          <td>{fromCities}</td>
                          <td>{tableData.price}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default Booking;
