import React from 'react';
import template1 from '../images/template1.png';
import template2 from '../images/template2.png';
import template3 from '../images/template3.png';
import template4 from '../images/template4.png';
import * as Style from '../../css/HomePage/MiniTemplateStyle';

const MiniTemplate = () => {
  return (
    <Style.MiniTemplateContainer>
      <Style.Title>읽어보면 좋아요</Style.Title>
      <Style.TemplateBoxContainer>
        <Style.TemplateBox>
          <Style.Template1
            onClick={() =>
              window.open('https://if-blog.tistory.com/10531', '_blank')
            }
          >
            <Style.Img1 src={template1} />
            <Style.Desc1>레포트 작성 가이드</Style.Desc1>
          </Style.Template1>
          <Style.Template2
            onClick={() =>
              window.open(
                'https://m.post.naver.com/viewer/postView.naver?volumeNo=6959810&memberNo=10505396',
                '_blank',
              )
            }
          >
            <Style.Img2 src={template2} />
            <Style.Desc2>자료 조사 하는 법</Style.Desc2>
          </Style.Template2>
          <Style.Template2
            onClick={() =>
              window.open(
                'https://m.post.naver.com/viewer/postView.nhn?volumeNo=4624319&memberNo=10505396',
                '_blank',
              )
            }
          >
            <Style.Img3 src={template3} />
            <Style.Desc2>보고서 각주와 참고문헌 작성법</Style.Desc2>
          </Style.Template2>
          <Style.Template1
            onClick={() => window.open('https://linkareer.com', '_blank')}
          >
            <Style.Img4 src={template4} />
            <Style.Desc1>대학생 공모전 대외활동, 링커리어</Style.Desc1>
          </Style.Template1>
        </Style.TemplateBox>
      </Style.TemplateBoxContainer>
    </Style.MiniTemplateContainer>
  );
};

export default MiniTemplate;
