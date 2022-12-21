import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { modifyBoard } from "../modules/board";

const BoardWriteFrom = () => {
    // navigate를 통해서 값을 보내주고 state에 사용
    
    // 값을 수정했을때 board의 내용을 수정하는 함수 
    const onChange = (e) => {
        setBoard({...board, [e.target.name]: e.target.value})
    }

    
  // 리덕스의 dispatch
  const dispatch = useDispatch();

  // 라우터의 navigate
  const navigate = useNavigate();

  // 값을 가져옴
  const location = useLocation();
  // 값 수정하는곳
  const [board, setBoard] = useState(location.state);

  // 수정완료 버튼을 눌렸을 때 실행하는 함수
  const onModifyBoard = () => {
    dispatch(modifyBoard(board));
    navigate('/board/'+ board.boardId)
  }

  return (
    <div>
      <Container>
        <Row>
          <Col xs={1}>{board.boardId}</Col>
          <Col>
            <input
              name="title"
              value={board.title}
              onChange={(e) => {
                onChange(e)
              }}
            />
          </Col>
          <Col>
            <Button onClick={onModifyBoard}>수정하기</Button>
          </Col>
        </Row>
        <Row>
          <Col>{board.userEmail}</Col>
        </Row>
        <Row className="my-4">
          <Col>
            <textarea name="content" onChange={(e)=>{onChange(e)}}>{board.content}</textarea>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>조회수 {board.view}</span>
          </Col>
          <Col>
            <span>좋아요 {board.like}</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BoardWriteFrom;
