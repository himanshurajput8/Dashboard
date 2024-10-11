import React from "react";

export function TableComponent(){
    const tableHeaderData = ["FULL NAME", "STATUS", "TYPE", "EMAIL", "SIGNED UP", "USER ID"]
    const tableData = [
        {name: "Amanda Harvey", sign:"🟢", status: "Successful", type: "Unassigned", email: "amanda@site.com", signup: "1year ago", userId: "67989", imageUrl: "https://st4.depositphotos.com/4509995/29739/i/450/depositphotos_297397964-stock-photo-portrait-of-a-handsome-arab.jpg"},
        {name: "Amanda Harvey", sign:"🟠", status: "Successful", type: "Unassigned", email: "amanda@site.com", signup: "1year ago", userId: "67989", imageUrl: "https://thumbs.dreamstime.com/b/hispanic-teenager-standing-over-blue-background-success-sign-doing-positive-gesture-hand-thumbs-up-smiling-happy-cheerful-307014830.jpg"},
        {name: "Amanda Harvey", sign:"🟡", status: "Successful", type: "Unassigned", email: "amanda@site.com", signup: "1year ago", userId: "67989", imageUrl: "https://media.istockphoto.com/id/1444177531/photo/portrait-of-a-mature-man-on-a-gray-background.jpg?s=612x612&w=0&k=20&c=ivXOr2aZOs40BTGJHis3Xo6u9m32dT5i1b30blhlVqE="},
        {name: "Amanda Harvey", sign:"🔴", status: "Successful", type: "Unassigned", email: "amanda@site.com", signup: "1year ago", userId: "67989", imageUrl: "https://image.shutterstock.com/image-photo/you-what-we-need-excited-250nw-2038489718.jpg"},
        {name: "Amanda Harvey", sign:"🔵", status: "Successful", type: "Unassigned", email: "amanda@site.com", signup: "1year ago", userId: "67989", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbVkAw0ZCuS2xxdOiEn-a1N5QeNTVvITCVoLEPWcRlReZ87chVNfNfv88EhVLe8vqk5C0&usqp=CAU"},
        {name: "Amanda Harvey", sign:"🟣", status: "Successful", type: "Unassigned", email: "amanda@site.com", signup: "1year ago", userId: "67989", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT73jmW5JyLs5EeInfkUD_nO71871wvStyoAcVJvJV5Sd6VleRCE87q1uzm3vU0amxfdeY&usqp=CAU"},
        {name: "Amanda Harvey", sign:"🟤", status: "Successful", type: "Unassigned", email: "amanda@site.com", signup: "1year ago", userId: "67989", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqflZWT2SOr9LOeOIbkLoNMTNnaJ9AnsNElfPW3mHaY6NSMicq-UY-B0LkhIO7uQgrdAQ&usqp=CAU"},
        {name: "Amanda Harvey", sign:"🟠", status: "Successful", type: "Unassigned", email: "amanda@site.com", signup: "1year ago", userId: "67989", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqotPKlPOeJZvUwKwUvGrQ3umX5sHOrcEmg&s"},
        {name: "Amanda Harvey", sign:"🔵", status: "Successful", type: "Unassigned", email: "amanda@site.com", signup: "1year ago", userId: "67989", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScD-QR1nyeaoWvu82e-dyrnZ7p52J8vGSHCQ&s"}
    ]
    return(
        <div className="table-container"> 
            <table>
                <thead>
                    <tr>
                        {tableHeaderData.map((item, index) => (
                            <th key={index}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item,index)=>(
                        <tr key={index}>
                            <td>
                                <div className="image-name">
                                    <img src={item.imageUrl} alt="" />
                                    <span>{item.name}</span>
                                </div>
                            </td>
                            <td><span className="status-sign">{item.sign}</span>{item.status}</td>
                            <td>{item.type}</td>
                            <td>{item.email}</td>
                            <td>{item.signup}</td>
                            <td>{item.userId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}