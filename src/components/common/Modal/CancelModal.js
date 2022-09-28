import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const CancelModal = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>취소</Modal.Title>
      </Modal.Header>
      <Modal.Body>취소하시겠습니까?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.clickNo}>
          아니오
        </Button>
        <Button variant="primary" onClick={props.clickYes}>
          예
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default CancelModal;
