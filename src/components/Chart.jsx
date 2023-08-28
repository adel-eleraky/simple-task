import chart from "../assets/Line Gradient.png"

function Chart() {
    return (
        <div className="col-7 bg-light p-3 rounded">
            <div className="d-flex justify-content-between align-items-center">
                <div className="dropdown show">
                    <a className="btn btn-light border border-dark dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        سنويا
                    </a>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                <div>
                    <h5 className="text-right" style={{ fontSize: "12px" }}>إحصائيات إستخدام القسيمة</h5>
                    <p className="text-weight-light " style={{ fontSize: "12px" }}>05 يوليو , 2023 - 05 أغسطس , 2023</p>
                </div>
            </div>
            <div className="row mt-4">
                <img src={chart} />
                <ul className="list list-unstyled d-flex justify-content-between mb-0 mt-1">
                    <li className="list-item">يناير</li>
                    <li className="list-item">فبراير</li>
                    <li className="list-item">مارس</li>
                    <li className="list-item">ابريل</li>
                    <li className="list-item">مايو</li>
                    <li className="list-item">يونيو</li>
                    <li className="list-item">يوليو</li>
                    <li className="list-item">اغسطس</li>
                    <li className="list-item">سبتمبر</li>
                    <li className="list-item">اكتوبر</li>
                    <li className="list-item">نوفمبر</li>
                    <li className="list-item">ديسمبر</li>
                    
                </ul>
            </div>
        </div>

    )
}

export default Chart
