import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
// import DisplayCard from './DisplayCard';
import AutomatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';

const DisplayList = () => {
    const items = useSelector((state) =>[
        selectFeaturedCampsite(state),
        selectFeaturedPromotion(state),
        selectFeaturedPartner(state)
    ]);

    console.log('display items: ', items)

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    item && (
                        <Col md className='m-1' key={idx}>
                            <AutomatedDisplayCard item={item} />
                        </Col>
                    )
                )
            })}
        </Row>
    )
};

export default DisplayList