import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const Currency = ({ data, onClick, icon }) => {

    return(
        <tr className="table__tr">
            <td className="table__td">{data.code}</td>
            <td className="table__td">{data.currency}</td>
            <td className="table__td table__td--flex">
                {data.mid}
                <Button
                    icon={icon}
                    onClick={() => onClick(data.code)}
                />
            </td>
        </tr>
    );
};

Currency.propTypes = {
    data: PropTypes.shape ({
        code: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        mid: PropTypes.number.isRequired
    })
};

export default Currency;