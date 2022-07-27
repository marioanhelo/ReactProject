import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import DefaultImage from '../assets/img-default.png'


function CardProduct(props) {
   const styleCard={
     width:'18rem',
     marginLeft:'1rem',
     marginRight:'1rem',
     marginBottom:'1rem',
     boxShadow: '0.5rem 1rem rgba(0,0,0,.15)!important'

   }
    return (
    <Card style={styleCard}>
      <Card.Img
            variant="top"
            src={props.img}
            alt={props.title}
            onError={(e) => {
                e.target.src = DefaultImage
                e.target.style = 'padding: 8px; margin: 16px'
            }}
            style={{marginTop:'10px'}}
            />
      <Card.Body>
        <Link to={`/products/${props.productId}`} style={{ textDecoration: 'none' }}>
            <h6 className="card-title text-center card-link">{props.title}</h6>
        </Link>
        <h6 className='text-center'>{props.brand}</h6>
        <h6 className='text-center'>${props.price}</h6>
        <div className='text-center'>
            <Badge pill bg="primary">{props.category}</Badge>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;