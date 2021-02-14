import React from 'react';

const Currency = ({ data }) => {
    return(
        <tr className="table__tr">
            <td className="table__td">{data.code}</td>
            <td className="table__td">{data.currency}</td>
            <td className="table__td">{data.mid}</td>
        </tr>
    );
};

export default Currency;