import { Row, Col} from 'react-bootstrap'
import Product from '../components/Product';
import products from '../products'

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product)=>(
          // sm = small screen will be stacked md = medium screen will take up 6 columns
         <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
          <Product product={product}></Product>
         </Col> 
        ))}
      </Row>
    </>
  )
}

export default HomeScreen