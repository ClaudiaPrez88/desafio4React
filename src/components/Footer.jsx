import { Row } from "react-bootstrap"
import {Col} from "react-bootstrap"
import {  TbGps } from "react-icons/tb";
import { FaPhone } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div>
        <Row id="footer">
            <Col xs={12} md={6} lg={4} className="col-footer">
                <img className="logo-footer" src="./logo_blanco.png"></img>
            </Col>
            <Col xs={12} md={6} lg={4} className="col-footer">
            <TbGps className="icon"/>
                <p>Providencia,Santiago,Chile.</p>
            </Col>
            <Col xs={12} md={6} lg={4} className="col-footer">
            <FaPhone className="icon"/>
                <p>+56 9456 3498</p>
            </Col>
        </Row>
    </div>
  )
}
