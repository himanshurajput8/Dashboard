export function TransactionsComponent(){
    return(
        <div className="transaction-container">
            <div className="transaction-left-div">
                    <h2>Transactions</h2>                
                <div className="sixtyFive">65</div>
                <div className="nintyNine">99</div>
                <div className="thirtyEight">38</div>
                <div className="sixtyOne">61</div>            
            </div>
            <div className="transaction-right-div">
                <h2>Reports Overview</h2>
                <h1>$7,431.14 USD</h1>
                <div className="empty-div"></div>
            <table>
                <tbody>
                    <tr>
                        <td>Gross value</td>
                        <td>$3,500.71</td>
                        <td>+12.1%</td>
                    </tr>
                    <tr>
                        <td>Net volume from sales</td>
                        <td>$3,500.71</td>
                        <td>+12.1%</td>
                    </tr>
                    <tr>
                        <td>Net volume from sales</td>
                        <td>$3,500.71</td>
                        <td>+12.1%</td>
                    </tr>
                    <tr>
                        <td>Other</td>
                        <td>$3,500.71</td>
                        <td>+12.1%</td>
                    </tr>
                </tbody>    
            </table>    
  
            </div>
        </div>
    )
}