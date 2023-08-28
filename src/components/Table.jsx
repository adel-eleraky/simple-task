import person from "../assets/Image-30.png"
import frame from "../assets/Frame 10.png"
import download from "../assets/Group 1000010390.png"

function Table() {
    return (
        <>
            <table className="table rounded" lang="ar" dir="rtl">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">المستخدم</th>
                        <th scope="col">رقم التذكرة</th>
                        <th scope="col">قيمة التذكرة <i className="bi bi-arrow-down-up"></i></th>
                        <th scope="col">السينمات</th>
                        <th scope="col">عدد الاشخاص </th>
                        <th scope="col">عدد مرات الشراء</th>
                        <th scope="col">التذكرة</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td className="d-flex"><img className="mx-1" src={person} /><div className="details">محمد الغريب</div></td>
                        <td>C-101</td>
                        <td>$40</td>
                        <td>سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...</td>
                        <td>1</td>
                        <td>مرة واحدة</td>
                        <td className="d-flex justify-content-between align-items-center"><img src={frame} />تذكرة رقم 12.pdf<img src={download} /></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td className="d-flex"><img className="mx-1" src={person} /><div className="details">محمد الغريب</div></td>
                        <td>C-101</td>
                        <td>$40</td>
                        <td>سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...</td>
                        <td>1</td>
                        <td>مرة واحدة</td>
                        <td className="d-flex justify-content-between align-items-center"><img src={frame} />تذكرة رقم 12.pdf<img src={download} /></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td className="d-flex"><img className="mx-1" src={person} /><div className="details">محمد الغريب</div></td>
                        <td>C-101</td>
                        <td>$40</td>
                        <td>سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...</td>
                        <td>1</td>
                        <td>مرة واحدة</td>
                        <td className="d-flex justify-content-between align-items-center"><img src={frame} />تذكرة رقم 12.pdf<img src={download} /></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td className="d-flex"><img className="mx-1" src={person} /><div className="details">محمد الغريب</div></td>
                        <td>C-101</td>
                        <td>$40</td>
                        <td>سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...</td>
                        <td>1</td>
                        <td>مرة واحدة</td>
                        <td className="d-flex justify-content-between align-items-center"><img src={frame} />تذكرة رقم 12.pdf<img src={download} /></td>
                    </tr>
                </tbody>
            </table>
            <div className="row">
                <nav aria-label="Page navigation example">
                    <ul className="pagination ">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item" ><a className="page-link text-white" style={{ backgroundColor: "#8A74F9" }} href="#">1</a></li>
                        <li className="page-item"><a className="page-link " href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Table
