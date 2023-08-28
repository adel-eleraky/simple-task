/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Header from "./components/Header"


import './App.css'
import Card from "./components/Card"
import Chart from "./components/Chart"
import Table from "./components/Table"

function App() {

    return (
        <>
            <div className="container">
                <Header />
                <div className="row justify-content-between">
                    <Card />
                    <Chart />
                </div>
                <div className="d-flex align-items-center my-4">
                    <button className="btn text-white mx-2" style={{ backgroundColor: "#8A74F9" }}>حجز تذكرة جديدة</button>
                    <h5 className="text-muted mx-2">مفعلة</h5>
                    <div className="form-check form-switch mx-2 me-auto ">
                        <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    </div>
                    <button className="btn btn-light border border-secondary mx-2"><i className="bi bi-arrow-down-up"></i></button>
                    <button className="btn btn-light border border-secondary mx-2"><i className="bi bi-sliders"></i></button>
                    <form className="form-inline my-2 my-lg-0 mx-2">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                    <h5 style={{ fontSize: "15px" }}>مبيعات تذاكر</h5>
                </div>
                <Table />
            </div>
        </>
    )
}

export default App
