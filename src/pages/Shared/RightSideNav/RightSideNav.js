import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import brand1 from '../../../assets/brands/brand1.png.jpg'
import brand2 from '../../../assets/brands/brand2.png.jpg'
import React, { useContext } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const RightSideNav = () => {
    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))

    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Log in with google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Log in with Github</Button>
            </ButtonGroup>

            <div className='mt-4'>
                <h5 className='mt-2 mb-2'>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook>  FaceBook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaInstagram></FaInstagram>  Instragram</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp>  Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter>  Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'></ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={brand1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={brand2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    );
};

export default RightSideNav;