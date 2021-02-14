import React, { useState } from 'react';
import { removeFromFavourites } from '../../redux/redux';
import PropTypes from 'prop-types';
import Button from '../Button';
import Modal from '../Modal';
import { connect } from 'react-redux';


const Favourite = ({ data, icon, removeFromFavourites }) => {
    const [modalActive, setModalActive] = useState(false);

    const openModal = () => {
        setModalActive(true);
    };

    return(
        <tr className="table__tr">
            <td className="table__td">{data.code}</td>
            <td className="table__td">{data.currency}</td>
            <td className="table__td table__td--flex">
                {data.mid}
                <Button
                    icon={icon}
                    onClick={openModal}
                />
            </td>
            <td className="table__td--modal">
                <Modal
                    active={modalActive}
                    setActive={setModalActive}
                    confirm={() => removeFromFavourites(data.code)}
                    abort={() => setModalActive(false)}
                />
            </td>
        </tr>
    );
};

const mapDispatchToProps = {
    removeFromFavourites
};

Favourite.propTypes = {
    data: PropTypes.shape ({
        code: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        mid: PropTypes.number.isRequired
    })
};

export default connect(null, mapDispatchToProps)(Favourite);