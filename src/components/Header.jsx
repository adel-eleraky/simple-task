import arrow from "../assets/arrow-right.png"
import edit from "../assets/edit.png"

function Header() {
    return (
        <div className="d-flex my-4">
            <button className="btn btn-secondary me-auto bg-light text-dark border border-light-subtle" ><img src={edit} />تعديل</button>
            <h3 className="mb-0" style={{ fontSize: "18px", lineHeight: 2 }}>تذكرة رقم #2432</h3>
            <button className="btn btn-secondary ms-2 border border-light-subtle  text-dark" style={{ backgroundColor: "#E7EAED" }}><img src={arrow} /></button>
        </div>
    )
}

export default Header
