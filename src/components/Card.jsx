import trash from "../assets/trash.png"
import groub from "../assets/Group.png"
import qr from "../assets/qr_img 1.png"
import send from "../assets/send-2.png"

function Card() {
    return (
            <div className="col-4 text-light rounded p-4" style={{ backgroundColor: "#8A74F9" }}>
                <div className="row   " style={{ borderBottom: "2px dotted white" }}>
                    <div className="col-2"><img src={trash} /></div>
                    <div className="col-8 text-center " >
                        <h5 className="mb-3" style={{ fontSize: "12px" }}>عرض التذكرة الخاصة بالفيلم</h5>
                        <button className="btn btn-light d-flex justify-content-center mb-3 w-100"><img src={groub} /><h5 className="ms-1 mb-0" style={{ fontSize: "12px" }}>www.tazkty.com/473847</h5></button>
                        <h5 style={{ fontSize: "12px" }}>فعال حتي 15 يوليو 2023</h5>
                    </div>
                </div>
                <div className="d-flex mt-4">
                    <div className="me-auto"><img src={qr} /></div>
                    <div className="align-self-end">
                        <button className="btn btn-outline-light btn-sm"><img src={send} />مشاركة</button>
                        <h5 className="ms-2 d-inline" style={{ fontSize: "18px" }}>خصم %25</h5>
                    </div>
                </div>
            </div>
    )
}

export default Card
