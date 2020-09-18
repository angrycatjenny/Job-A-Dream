import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import { Link } from 'react-router-dom';

const InterviewListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const CreateInterviewButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const InterviewItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  /* 맨 위 포스트는 padding-top 없음 */
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

const InterviewItem = ({ interview }) => {
  const { publishedDate, user, tags, title, body, _id } = interview;
  return (
    <InterviewItemBlock>
      <h2>
        <Link to={`/@${user.username}/${_id}`}>{title}</Link>
      </h2>
      <SubInfo
        username={user.username}
        publishedDate={new Date(publishedDate)}
      />
      <Tags tags={tags} />
      <p>{body}</p>
    </InterviewItemBlock>
  );
};

const InterviewList = ({ interviews, loading, error, showWriteButton }) => {
  // 에러 발생 시
  if (error) {
    return <InterviewListBlock>에러가 발생했습니다.</InterviewListBlock>;
  }

  return (
    <InterviewListBlock>
      <CreateInterviewButtonWrapper>
        {showWriteButton && (
          <Button cyan to="/iwrite">
            새 글 작성하기
          </Button>
        )}
      </CreateInterviewButtonWrapper>
      {/*  로딩 중 아니고, 포스트 배열이 존재할 때만 보여줌 */}
      {!loading && interviews && (
        <div>
          {interviews.map(interview => (
            <InterviewItem interview={interview} key={interview._id} />
          ))}
        </div>
      )}
    </InterviewListBlock>
  );
};

export default InterviewList;
