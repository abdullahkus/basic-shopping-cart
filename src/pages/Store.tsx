// Components
import StoreItem from '../components/StoreItem';
// Bootstrap
import { Col, Row } from 'react-bootstrap';
// Dummy
import storeItems from '../data/items.json';

const Store = () => {
  return (
    <>
      <Row md={2} xs={2} lg={3} className='g-3'>
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
